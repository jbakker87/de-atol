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

  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public http: HttpClient) {
      this.contactForm = this.createFormGroup();
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

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const result: ContactRequest = Object.assign({}, this.contactForm.value);
    result.personalData = Object.assign({}, result.personalData);

    let user = {
      email: result.personalData.email,
      name: result.personalData.name,
      phone: result.personalData.phone,
      msg: result.personalData.msg
    }

    console.log(user);
    this.http.post('https://beta.de-atol.nl/httpdocs/' + 'mail_send.php', (user)).subscribe(
      (response) => {console.log(response)},
      (error) => {console.log(error)}
    );
      this.revert();
  }

  revert() {
    // Resets to blank object
    this.contactForm.reset();

    // Resets to provided model
    this.contactForm.reset({ personalData: new PersonalData(), requestType: '', text: '' });
  }

  ngOnInit(): void {
  }
}
