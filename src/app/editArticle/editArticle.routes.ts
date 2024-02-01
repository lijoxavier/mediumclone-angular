import {Route} from '@angular/router'
import {CreateArticleService} from './services/createArticle.service'
import * as editArticleEffects from './store/effects'
import {provideEffects} from '@ngrx/effects'
import {provideState} from '@ngrx/store'
import {editArticleFeatureKey, editArticleReducer} from './store/reducers'
import { EditArticleComponent } from './components/editArticle/editArticle.component'

export const routes: Route[] = [
  {
    path: '',
    component: EditArticleComponent,
    providers: [
      CreateArticleService,
      provideEffects(editArticleEffects),
      provideState(editArticleFeatureKey, editArticleReducer),
    ],
  },
]
