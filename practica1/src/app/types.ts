export type Character = {
  name: string;
  gender: string;
  birth_year: string;
};

export type ApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
};