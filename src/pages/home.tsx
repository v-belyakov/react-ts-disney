import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { ChangeEvent, Suspense, useState } from 'react';
import Character from 'src/components/Character/Character';
import List from 'src/components/List/List';
import { useFetchCharacters } from 'src/hooks';

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const { data, error, loading } = useFetchCharacters({ url: `/characters?page=${page}` });

  if (error) console.log(error);

  const { data: characters, totalPages } = data;

  const onPaginationChange = (_: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ mt: 2 }}>
        Characters
      </Typography>

      <Pagination
        count={totalPages}
        disabled={loading}
        onChange={onPaginationChange}
        page={page}
        sx={{ mt: 2 }}
      />

      <Suspense fallback={<div>Loading...</div>}>
        {!!characters && characters.length > 0 && (
          <List
            items={characters}
            renderItem={(character, i) => (
              <Box key={character._id} sx={{ py: 2 }}>
                <Character character={character} />
              </Box>
            )}
          />
        )}
      </Suspense>
    </Container>
  );
};

export default Home;
