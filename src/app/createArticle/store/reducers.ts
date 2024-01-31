import { createFeature, createReducer, on } from "@ngrx/store";
import { CreateArticleStateInterface } from "../types/createArticleState.interface";
import { createArticleActions } from "./actions";

const initialState:CreateArticleStateInterface = {
    isSubmitting:false,
    validationErrors:null
}

const createArticleFeature = createFeature({
    name:"createArticle",
    reducer:createReducer(
        initialState,
        on(createArticleActions.createArticle,(state)=>({...state,isSubmitting:true})),
        on(createArticleActions.createArticleSuccess,(state)=>({...state,isSubmitting:false})),
        on(createArticleActions.createArticleFaliure,(state,action)=>({...state,isSubmitting:false,validationErrors:action.errors}))
    )
})

export const {
    name:createArticleFeatureKey,
    reducer:createArticleReducer,
    selectIsSubmitting,
    selectValidationErrors
} = createArticleFeature