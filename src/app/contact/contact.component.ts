import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ContactRequest, PersonalData } from '../../models/contact-request';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string;
  phone: string;
  email: string;
  msg: string;

  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public http: HttpClient) {
      // this.formContact = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
        msg: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
        email: new FormControl('', [Validators.required, Validators.email]),
      }),
    })
  }

  submitForm() {
    // Make sure to create a deep copy of the form-model
    // const result: ContactRequest = Object.assign({}, this.formContact.value);
    // result.personalData = Object.assign({}, result.personalData);

    let user = {
      "email": this.email,
      "name": this.name,
      "phone": this.phone,
      "msg": this.msg
    }

    console.log(user);
    // this.http.post('https://beta.de-atol.nl/httpdocs/' + 'mail_send.php', (user)).subscribe(
    //   (response) => {console.log(response)},
    //   (error) => {console.log(error)}
    // );
    
    // this.resetForm();
  }

  resetForm() {
    this.contactForm.reset()
  }

  // revert() {
  //   // Resets to blank object
  //   this.formContact.reset();

  //   // Resets to provided model
  //   this.formContact.reset({ personalData: new PersonalData(), requestType: '', text: '' });
  // }

  ngOnInit(): void {
  }
}
