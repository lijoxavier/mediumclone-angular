import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleRequestInterface } from "src/app/shared/types/articleRequest.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";

export const editArticleActions = createActionGroup({
    source:"edit article",
    events:{
        'Get article':props<{slug:string}>(),
        'Get article success':props<{article:ArticleInterface}>(),
        'Get article faliure':emptyProps(),

        'Update article':props<{request:ArticleRequestInterface ;slug:string}>(),
        'Update article success':props<{article:ArticleInterface}>(),
        'Update article faliure':props<{errors:BackendErrorsInterface}>()

    }
})