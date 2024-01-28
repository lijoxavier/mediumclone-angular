import { createFeature, createReducer, on } from "@ngrx/store";
import { ArticleStateInterface } from "../types/articleState.interface";
import { articleActions } from "./action";
import { routerNavigationAction } from "@ngrx/router-store";

const initialState:ArticleStateInterface={
    isLoading:false,
    error:null,
    data:null
}

const articleFeature = createFeature({
    name:"article",
    reducer:createReducer(
        initialState,
        on(articleActions.getArticle,(state)=>({...state,isLoading:true})),
        on(articleActions.getArticleSuccess,(state,action)=>({...state,isLoading:false,data:action.article})),
        on(articleActions.getArticleFaliure,(state)=>({...state,isLoading:false})),
        on(routerNavigationAction,()=>initialState)
    )
})

export const {
    name:articleFeatureKey,
    reducer:articleReducer,
    selectIsLoading,
    selectData:selectArticleData,
    selectError
} = articleFeature