import { Component, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.minLength(6), Validators.required]),
    password2: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  alertMessage = '';
  alertsList: any = {
    user: () => 'Ez az e-mail cím már rendelkezik egy fiókkal.',
    server: () => 'A szolgáltatás nem elérhető.',
    false: () => ''
  };

  @HostListener('document:keydown.enter') onKeydownHandler() {
    this.registration();
  }

  constructor(private router: Router, private authService: AuthService) { }

  navTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  registration(): void {
    if (this.form.invalid) {
      return;
    }
    if (this.form.value.password1 !== this.form.value.password2){
      this.alertMessage = 'Hibás ellenörző jelszó.';
      return;
    }
    this.authService.createUser(this.form.value.email, this.form.value.password1, this.form.value.username).then(
      result => {
        this.navTo('/login');
      },
      (error) => {
        console.log(error);
        this.alertMessage = (error.code === 'auth/email-already-in-use' || error.code === 'auth/wrong-password')
          ? this.alertsList.user() : this.alertsList.server();
      }
    );
  }
}
