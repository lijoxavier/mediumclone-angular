import { ProfileInterface } from "../components/feed/types/profile.interface";

export interface ArticleInterface {
    body:string,
    createdAt:string,
    description:string,
    favorited:boolean,
    favoritesCount:boolean,
    slug:string,
    tagList:string[],
    title:string,
    updatedAt:string,
    author:ProfileInterface
}