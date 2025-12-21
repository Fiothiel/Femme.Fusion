import type IImageInfo from "./IImageInfo";

export default interface IContentPost {
  id: string;
  publishedAt: string;
  heading: string;
  preamble?: string;
  body: string;
  image?: IImageInfo;
};