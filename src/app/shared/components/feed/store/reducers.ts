import { createFeature, createReducer, on } from "@ngrx/store";
import { FeedStateInterface } from "../types/feedState.interface";
import { feedActions } from "./actions";

const initialState:FeedStateInterface = {
    isLoading:false,
    data:null,
    error:null
}

const feedFeature = createFeature({
    name:"feed",
    reducer:createReducer(
        initialState,
        on(feedActions.getFeed,(state)=>({
            ...state,
            isLoading:true
        })),
        on(feedActions.getFeedSuccess,(state,action)=>({
            ...state,
            isLoading:false,
            data:action.feed,

        })),
        on(feedActions.getFeedFailure,(state)=>({
            ...state,
            isLoading:false
        }))

        //TODO:12:00 video time
    )
})