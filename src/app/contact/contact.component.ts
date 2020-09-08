import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'
import { ContactRequest, PersonalData } from '../../models/contact-request';
import { HttpService } from "../http-service.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public http: HttpService) {
      this.contactForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        name: new FormControl(),
        phone: new FormControl(),
        msg: new FormControl(),
        email: new FormControl()
      }),
      text: new FormControl(),
    })
  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const result: ContactRequest = Object.assign({}, this.contactForm.value);
    result.personalData = Object.assign({}, result.personalData);

    // Do useful stuff with the gathered data
    console.log(result);

    let user = {
      name: result.personalData.name,
      phone: result.personalData.phone,
      email: result.personalData.email,
      msg: result.personalData.msg
    }
    this.http.sendEmail("http://localhost:3000/sendFormData", user).subscribe
      (
        data => 
        {
          let res:any = data; 
          console.log(
            `${user.name} heeft een mail verzonden.`
          );
        }
      )
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
