import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  @ViewChild('fileInput') fileInputRef: ElementRef
  title = 'Register'
  image: File
  imagePreview: string | ArrayBuffer = ''
  form: FormGroup
  invalidPassword: boolean

  error_messages = {
    'userName': [
      {type: 'required', message: 'Запольните это поле'},
      {type: 'minlength', message: 'Пароль дожен быть не меньше 6 симвалов'}
    ],
    'email': [
      {type: 'required', message: 'Запольните это поле'},
      {type: 'minlength', message: 'Пароль дожен быть не меньше 6 симвалов'}
    ],
    'password': [
      {type: 'required', message: 'Запольните это поле'},
      {type: 'minlength', message: 'Пароль дожен быть не меньше 6 симвалов'},
    ],
    'confirmPassword': [
      {type: 'required', message: 'Запольните это поле'},
      {type: 'minlength', message: 'Пароль дожен быть не меньше 6 симвалов'},
    ]
  }


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.email
      ])),
      password: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmPassword: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])),
    }, {
      validators: this.password.bind(this)
    });

  }

  password(formGroup: FormGroup) {
    const {value: password} = formGroup.get('password');
    const {value: confirmPassword} = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : {passwordNotMatch: true, message: 'Пароли не совдвдают'};
  }

  trigger() {
    this.fileInputRef.nativeElement.click()
  }

  ngSubmit() {

  }

  onFileUpload(event: any) {
    const file = event.target.files[0]
    this.image = file
    const render = new FileReader()
    render.onload = () => {
      this.imagePreview = render.result
    }
    render.readAsDataURL(file)
  }
}
