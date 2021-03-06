import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PasswordConfirmationValidatorService } from '../../Customvalidators/password-confirmation-validator.service';
import { ResetPasswordDTO } from '../../../../src/app/Shared/Models/ResetPasswordDTO';
import { AuthenticateService } from '../../../../src/app/Shared/Services/Authenticate/authenticate.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public resetPasswordForm: FormGroup;
  public showSuccess: boolean;
  public showError: boolean;
  public errorMessage: string;
  public _token: string;
  public _email: string;
  fieldTextType: boolean;
  repeatFieldTextType: boolean;
  constructor(fb: FormBuilder,private _authService: AuthenticateService, private _passConfValidator: PasswordConfirmationValidatorService, 
    private _route: ActivatedRoute) { }
 
    ngOnInit(): void {
      
      this.resetPasswordForm = new FormGroup({
        password: new FormControl('', [Validators.required]),
        confirm: new FormControl('')
      });
      this.resetPasswordForm.get('confirm').setValidators([Validators.required,
        this._passConfValidator.validateConfirmPassword(this.resetPasswordForm.get('password'))]);
        //localStorage.getItem("clientURI");
        this._token = this._route.snapshot.queryParams['token'];
        this._email = this._route.snapshot.queryParams['email'];
        console.log("this._token",this._token) 
         console.log("this._email",this._email)
    }
    toggleFieldTextType() {
      this.fieldTextType = !this.fieldTextType;
    }
    toggleRepeatFieldTextType() {
      this.repeatFieldTextType = !this.repeatFieldTextType;
    }
    public validateControl = (controlName: string) => {
      return this.resetPasswordForm.controls[controlName].invalid && this.resetPasswordForm.controls[controlName].touched
    }
  
    public hasError = (controlName: string, errorName: string) => {
      return this.resetPasswordForm.controls[controlName].hasError(errorName)
    }
  
    public resetPassword = (resetPasswordFormValue) => {
      this.showError = this.showSuccess = false;
  
      const resetPass = { ... resetPasswordFormValue };
      const resetPassDto: ResetPasswordDTO = {
        password: resetPass.password,
        confirmPassword: resetPass.confirm,
        token: this._token,
        email: this._email
      }
      
      this._authService.resetPassword('api/Authenticate/ResetPassword', resetPassDto)
      .subscribe(_ => {
        this.showSuccess = true;
        console.log("token",resetPassDto)

      },
      error => {
        this.showError = true;
        this.errorMessage = error;
      })
    }
  
  }