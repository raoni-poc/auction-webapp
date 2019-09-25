// import {Component, EventEmitter, Output} from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {UserHttpService} from '../../user/service/user-http.service';
// import {MustMatch} from '../../../validators/must-match.validator';
// import userFieldOptions from '../../user/user-form/user-fields-options';
// import {Router} from '@angular/router';
//
// @Component({
//   selector: 'app-sign-up-form',
//   templateUrl: './sign-up-form.component.html',
//   styleUrls: ['./sign-up-form.component.css']
// })
// export class SignUpFormComponent {
//
//   userForm: FormGroup;
//   errors = {};
//
//   constructor(private userHttp: UserHttpService,
//               private formBuilder: FormBuilder,
//               private router: Router) {
//     this.userForm = this.formBuilder.group({
//       name: ['Raoni ' + (new Date().getTime()), [
//         Validators.required,
//         Validators.maxLength(userFieldOptions.name.validationMessage.maxlength),
//         Validators.minLength(userFieldOptions.name.validationMessage.minlength)
//       ]
//       ],
//       email: ['raonibs' + (new Date().getTime()) + '@gmail.com', [
//         Validators.required,
//         Validators.maxLength(userFieldOptions.email.validationMessage.maxlength),
//         Validators.minLength(userFieldOptions.email.validationMessage.minlength),
//         Validators.email,
//       ]
//       ],
//       password: ['12345678', [
//         Validators.required,
//         Validators.minLength(userFieldOptions.password.validationMessage.minlength)
//       ]
//       ],
//       repassword: ['12345678', [
//         Validators.required
//       ]
//       ],
//     }, {validator: MustMatch('password', 'repassword')});
//   }
//
//   onSubmit() {
//     this.userHttp
//       .create(this.userForm.value)
//       .subscribe((input) => {
//         this.userForm.reset({
//           name: null,
//           email: null,
//           password: null,
//           repassword: null
//         });
//         this.router.navigate(['/sing-up/success']);
//       }, responseError => {
//         this.errors = responseError.error.errors;
//       });
//   }
//
//   showErrors() {
//     return Object.keys(this.errors).length !== 0;
//   }
// }
