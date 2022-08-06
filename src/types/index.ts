export type CharacterData = {
  _id: number;
  alignment: string;
  allies: string[];
  enemies: string[];
  films: string[];
  imageUrl: string;
  name: string;
  parkAttractions: string[];
  shortFilms: string[];
  tvShows: string[];
  url: string;
  videoGames: string[];
};

export type CharactersData = {
  count: number;
  data: CharacterData[];
  nextPage: string;
  previousPage: string;
  totalPages: number;
};
