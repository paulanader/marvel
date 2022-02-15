import { ThumbnailType } from "./ThumbnailType";

export type EventType = {
    id: number;
    thumbnail: ThumbnailType;
    description: string;
    modified: string;
    title: string;
};