import { ThumbnailType } from "./ThumbnailType";

export type CreatorType = {
    id: number;
    thumbnail: ThumbnailType;
    description: string;
    modified: string;
    fullName: string;
};