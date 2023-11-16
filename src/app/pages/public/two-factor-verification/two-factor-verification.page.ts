import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-two-factor-verification',
  templateUrl: './two-factor-verification.page.html',
  styleUrls: ['./two-factor-verification.page.scss'],
})
export class TwoFactorVerificationPage implements OnInit {

  current_year: number = new Date().getFullYear();

  verify_form: FormGroup;
  submit_attempt: boolean = false;

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit() {

    // Setup form
    // this.verify_form = this.formBuilder.group({
    //   tac: ['', Validators.compose([])]
    // });

    // DEBUG: Prefill inputs
    // this.verify_form.get('email').setValue('john.doe@mail.com');
    // this.verify_form.get('password').setValue('123456');
  }

  // Sign in
  async signIn() {

    this.submit_attempt = true;

    // If email or password empty
    // if (this.verify_form.value.email == '' || this.verify_form.value.password == '') {
    //   this.toastService.presentToast('Error', 'Please input email and password', 'top', 'danger', 2000);

    // } else {

      // Proceed with loading overlay
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p>Verifying...</p><span>Please be patient.</span>',
        spinner: 'crescent'
      });
      await loading.present();

      // TODO: Add your sign in logic
      // ...

      // Fake timeout
      setTimeout(async () => {

        // Sign in success
        await this.router.navigate(['/home2']);
        loading.dismiss();
      }, 2000);

    // }
  }

}
