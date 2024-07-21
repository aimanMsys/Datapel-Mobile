import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  loading:boolean=false;
  userName:any;

  form: FormGroup = new FormGroup({
    code: new FormControl(null, {
      updateOn: 'change',
      validators: [Validators.required]
    })
  });

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router,    
    private alertController: AlertController
  ) { }

  ngOnInit() {

    this.userName = JSON.parse(localStorage.getItem('mobility') ?? '').userName;

    this.form = this.formBuilder.group({
      code: ['', Validators.compose([Validators.required])]
    });

    // Setup form
    // this.verify_form = this.formBuilder.group({
    //   tac: ['', Validators.compose([])]
    // });

    // DEBUG: Prefill inputs
    // this.verify_form.get('email').setValue('john.doe@mail.com');
    // this.verify_form.get('password').setValue('123456');
  }

 submit() {
    this.loading = true;

    // Proceed with loading overlay
    // const loading = await this.loadingController.create({
    //   cssClass: 'default-loading',
    //   message: '<p>Verifying</p><span>Please wait...</span>',
    //   spinner: 'crescent'
    // });
    // await loading.present();
    
    var code = this.form.value.code

    this.authService.authenticate(this.userName,code).subscribe({
      next: (resp) => {
        console.log("resp",JSON.stringify(resp));
        // this.loading = false;
        // if (resp.statusCode == null) {
        //   this.user = resp;
        //   localStorage.clear();
        //   localStorage.setItem("user", JSON.stringify(resp));
        //   localStorage.setItem("path", environment.apiURL)
        //   if (resp.statusCode == 200) {

        if(resp.result == "ACCEPTED"){
          // result"ACCEPTED"
          // setTimeout(async () => {

          //   // Sign in success
            this.router.navigate(['/home2']);
          //   loading.dismiss();
          // }, 2000);

        } else {
          this.presentAlert(resp.statusMessage, "error")
        }
        

        //   }
        // } else {
        //   this.presentAlert(resp.statusMessage, "error")
        // }


      }, error: (error) => {
        this.loading = false;
      }
    })

  }

  async presentAlert(headerText:string,message:string): Promise<void> {
    const alert = await this.alertController.create({
      header: headerText,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
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
        message: '<p>Verifying</p><span>Please wait...</span>',
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
