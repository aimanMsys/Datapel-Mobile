import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AlertController,LoadingController } from '@ionic/angular';
import { HttpHeaders } from '@angular/common/http';
import { Device } from '@capacitor/device';
import { interval } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  current_year: number = new Date().getFullYear();
  loading:boolean=false;
  user:any;
  email:string="";
  deviceId:string="";


  signin_form: UntypedFormGroup = new UntypedFormGroup({
    username: new UntypedFormControl(null, {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    password: new UntypedFormControl(null, {
      updateOn: 'change',
      validators: [Validators.required]
    })
  });
  submit_attempt: boolean = false;
  heartbeatSubscription: any;

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private formBuilder: UntypedFormBuilder,
    private toastService: ToastService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    
    this.email = localStorage.getItem('email');
    // console.log(this.email);
    // Setup form
    this.signin_form = this.formBuilder.group({
      username: ['', Validators.compose([ Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });

    // DEBUG: Prefill inputs
    // this.signin_form.get('username').setValue('datapel@mobilityapi.com');
    this.signin_form.get('username').setValue(this.email);
    this.signin_form.get('password').setValue('');
    this.logDeviceInfo();
  }

  // Sign in
  async signIn() {

    this.submit_attempt = true;

    // If email or password empty
    if (this.signin_form.value.email == '' || this.signin_form.value.password == '') {
      this.toastService.presentToast('Error', 'Please input email and password', 'top', 'danger', 2000);

    } else {

      // Proceed with loading overlay
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p>Signing in</p><span>Please wait...</span>',
        spinner: 'crescent'
      });
      await loading.present();

      // TODO: Add your sign in logic
      // ...

      // Fake timeout
      setTimeout(async () => {

        // Sign in success
        await this.router.navigate(['/two-factor-verification']);
        loading.dismiss();
      }, 2000);

    }
  }

  async logDeviceInfo() {
    // const info = await Device.getInfo();
    // console.log(info);
    this.deviceId = (await Device.getId()).identifier;
  };

  async submit() {
    this.loading = true;
    // console.log("this.signin_form.value.username ",this.signin_form.value.username)
    let param = {
      username: this.signin_form.value.username,
      password: this.signin_form.value.password
      
    }

    // Proceed with loading overlay
    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Signing in</p><span>Please wait...</span>',
      spinner: 'crescent'
    });
    await loading.present();
    
    this.authService.token(param).subscribe({
      next: (resp) => {
        this.loading = false;
        localStorage.setItem("user", JSON.stringify(resp));
        // console.log("Token response:",  JSON.stringify(resp));
    
        // Now initiate the mobility login
        this.authService.loginMobility(param).subscribe({
          next: (mobilityResp) => {
            // console.log("1 ="+JSON.stringify(mobilityResp));
            loading.dismiss();
            // console.log('mobilityResp',JSON.stringify(mobilityResp));
            localStorage.setItem("mobility", JSON.stringify(mobilityResp));
            localStorage.setItem("email", this.signin_form.value.username);
            // let devideId = "device_id_1";

            // Now initiate the mobility login
            this.authService.sessionLogin(this.deviceId).subscribe({
              next: (session) => {
                if(session.status == "success"){
                  // console.log("1 ="+JSON.stringify(mobilityResp));
                  loading.dismiss();
                  // console.log('mobilityResp',JSON.stringify(mobilityResp));
                  localStorage.setItem("mobility", JSON.stringify(mobilityResp));
                  localStorage.setItem("email", this.signin_form.value.username);

                  this.authService.startInterval(this.deviceId,loading);

                  // console.log('Mobility login successful:', mobilityResp);
                  this.router.navigate(['/two-factor-verification']);
                } else {
                  loading.dismiss();
                  let msg = "";
                  if(session.status == "failed" && session.message == "session already active in this device."){
                    msg = `session already active in this device.`;
                  } else if(session.status == "failed"){
                    msg = `You’re already logged in on another device. Please log out from that device to continue.`
                  } else {
                    msg = session.message;
                  }
                    
                  this.presentAlert(session.status,msg);
                }

                
                
              },
              error: (error) => {
                loading.dismiss();
                this.loading = false;
                console.error('Error during mobility login:',error);
                localStorage.removeItem("user");
                // this.presentAlert(error.statusMessage || 'Unknown error during mobility login - '+JSON.stringify(error), "error 2");
                // this.presentAlert("Login Failed", "Authorization failed");
              }
            });

            // // console.log('Mobility login successful:', mobilityResp);
            // this.router.navigate(['/two-factor-verification']);

          },
          error: (error) => {
            loading.dismiss();
            this.loading = false;
            console.error('Error during mobility login:'+ error);
            localStorage.removeItem("user");
            // this.presentAlert(error.statusMessage || 'Unknown error during mobility login - '+JSON.stringify(error), "error 2");
            // this.presentAlert("Login Failed", "Authorization failed");
          }
        });
    
      },
      error: (error) => {
        this.loading = false;
        loading.dismiss();
        console.error('Error during token retrieval:', error);
        this.presentAlert(error.statusMessage || 'Unknown error during token retrieval', "error 3");
      }
    });
    

    // this.authService.token(param).subscribe({
    //   next: (resp) => {
    //     this.loading = false;
    //     localStorage.setItem("user", JSON.stringify(resp));
    //     console.log("resp",resp);
    //     // this.router.navigate(['/two-factor-verification']);

    //     this.authService.loginMobility(param).subscribe({
    //       next: (resp) => {
    //         if(resp){
    //           localStorage.setItem("mobility", JSON.stringify(resp));
    //           console.log('Login successful:', resp);
    //           this.router.navigate(['/two-factor-verification']);
    //         } else {
    //           console.error('Login failed:',resp);
              
    //         localStorage.removeItem("user");
    //           this.presentAlert(resp, "error 1")
    //         }
           
    //       }, error: (error) => {
    //         this.loading = false;
    //         this.presentAlert(error.statusMessage, "error 2")
    //       }
    //     })

    //   }, error: (error) => {
    //     this.loading = false;
    //     this.presentAlert(error.statusMessage, "error 3")
    //   }
    // })

  }

  login() {
    const username = '1RjENhNssDEdrsYK';
    var password = 'h1SOJhDHKmGkwEnI';

    this.authService.login(username, password).subscribe(
      response => {
        console.log('Login successful:', response);
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }
  
  // alert(msg:string, status:any, title:any) {
  //   Swal.fire({
  //     text: msg,
  //     icon: status,
  //     title:title,
  //     buttonsStyling: false,
  //     confirmButtonText: "OK",
  //     heightAuto: false,
  //     customClass: {
  //       confirmButton: "btn btn-primary"
  //     }
  //   }).then((result) => {
  //     if (result.value) {
  //       if(status == "success"){

  //       }
  //     }

  //   })
  // }

  async presentAlert(headerText:string,message:string): Promise<void> {
    const alert = await this.alertController.create({
      header: this.capitalizeFirstLetter(headerText),
      message: this.capitalizeFirstLetter(message),
      buttons: ['OK'],
    });
    await alert.present();
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

}
