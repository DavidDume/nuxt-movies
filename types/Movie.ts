export type Movie = {
    id: number;
    title: string;
    gneres: {
        id: number;
        name: string;
    }[];
    release_date: string;
    runtime: number | null;
    overview: string;
    poster_path: string;
};