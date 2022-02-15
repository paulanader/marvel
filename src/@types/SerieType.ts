import { ThumbnailType } from "./ThumbnailType";

export type SerieType = {
    id: number;
    thumbnail: ThumbnailType;
    description: string;
    modified: string;
    title: string;
};