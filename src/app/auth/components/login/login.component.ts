import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Store, props } from "@ngrx/store";
import { authActions } from "../../store/actions";
import { RegisterRequestInterface } from "../../types/registerRequest.interface";
import { RouterLink } from "@angular/router";
// import { selectIsSubmitting } from "../../store/selectors";
import { AuthStateInterface } from "../../types/authState.interface";
import { CommonModule } from "@angular/common";
import { selectIsSubmitting, selectValidationErrors } from "../../store/reducer";
import { AuthService } from "../../services/auth.service";
import { combineLatest } from "rxjs";
import { backendErrorMessages } from "../../../shared/components/backendErrorMessages/backendErrorMessages.component";
import { LoginRequestInterface } from "../../types/loginRequest.interface";

@Component({
    selector: 'mc-login',
    templateUrl: './login.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink, CommonModule, backendErrorMessages]
})
export class LoginComponent {
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })
  // isSubmitting$ = this.store.select(selectIsSubmitting)
  // backendErrors$ = this.store.select(selectValidationErrors)
  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors:this.store.select(selectValidationErrors)
  })

  // constructor(private fb: FormBuilder,private store:Store<{auth:AuthStateInterface}>,private authService:AuthService) {}
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {}

  onSubmit() {
    console.log('forms', this.form.getRawValue())
    const request: LoginRequestInterface = {
      user: this.form.getRawValue(),
    }
    this.store.dispatch(authActions.login({request}))
    // this.authService.register(request).subscribe((res)=>console.log("res",res))
  }
}