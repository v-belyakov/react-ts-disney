import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FC, lazy, Suspense } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchCharacters } from 'src/hooks';

const Character = lazy(() => import('src/components/Character/Character'));

const CharacterPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, error } = useFetchCharacters({ url: `/characters/${id}`, single: true });

  if (error) console.log(error);

  const { data: characters } = data;
  const character = characters[0];

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ my: 2 }}>
        Character: {id}
      </Typography>

      <Suspense fallback={<div>Loading...</div>}>
        {!!character && <Character character={character} key={character._id} />}
      </Suspense>

      <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/')}>
        Back
      </Button>
    </Container>
  );
};

export default CharacterPage;
