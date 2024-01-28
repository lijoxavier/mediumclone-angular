import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ArticleService as SharedArticleService } from "src/app/shared/services/article.service";
import { articleActions } from "./action";
import { catchError, map, of, switchMap } from "rxjs";
import { ArticleInterface } from "src/app/shared/types/article.interface";

export const getArticleEffect = createEffect(
  (
    actions$ = inject(Actions),
    articleService = inject(SharedArticleService)
  ) => {
    return actions$.pipe(
        ofType(articleActions.getArticle),
        switchMap(({slug})=>{
            return articleService.getArticle(slug).pipe(
                map((article:ArticleInterface)=>{
                    return articleActions.getArticleSuccess({article})
                }),
                catchError(()=>{
                    return of(articleActions.getArticleFaliure())
                })
            )
        })
    )
  },
  {functional: true}
)