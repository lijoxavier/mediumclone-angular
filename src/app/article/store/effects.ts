import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ArticleService as SharedArticleService } from "src/app/shared/services/article.service";
import { articleActions } from "./action";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticeService } from "../services/article.service";
import { Router } from "@angular/router";

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

export const deleteArticleEffect = createEffect(
    (actions$ = inject(Actions),articleService = inject(ArticeService))=>{
        return actions$.pipe(
            ofType(articleActions.deleteArticle),
            switchMap(({slug})=>{
                return articleService.deleteArticle(slug).pipe(
                    map(()=>{
                        return articleActions.deleteArticleSuccess()
                    }),
                    catchError(()=>{
                        return of(articleActions.deleteArticleFaliure())
                    })
                )
            })
        )

    },
    {functional:true}
)

export const redirectAfterDeleteEffect = createEffect(
    (actions$ = inject(Actions),router = inject(Router))=>{
        return actions$.pipe(
            ofType(articleActions.deleteArticleSuccess),
            tap(()=>{
                router.navigateByUrl("/")
            })
        )

    },
    {functional:true,dispatch:false}
)