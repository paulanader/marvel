import { ThumbnailType } from "./ThumbnailType";

export type ComicType = {
  id: number;
  name: string;
  thumbnail: ThumbnailType;
  description: string;
  modified: string;
  title: string;
  variantDescription: string;
  diamondCode: string;
  fullName: string;
};
