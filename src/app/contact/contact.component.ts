import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { PersonalData } from '../../models/contact-request';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  showModal: Boolean = false;

  constructor(public http: HttpClient) {
      this.contactForm = this.createFormGroup();
  }

  get name(): AbstractControl {
    return this.contactForm.get('name');
  }

  get phone(): AbstractControl {
    return this.contactForm.get('phone');
  }

  get msg(): AbstractControl {
    return this.contactForm.get('msg');
  }

  get email(): AbstractControl {
    return this.contactForm.get('email');
  }

  ngOnInit(): void {}

  createFormGroup(): FormGroup {
    return new FormGroup({
        name: new FormControl('', Validators.required),
        phone: new FormControl(''),
        msg: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit(): void {
    const user: PersonalData = {
      email: this.email.value,
      name: this.name.value,
      phone: this.phone.value,
      msg: this.msg.value
    };

    console.log(user);
    // this.http.post('https://beta.de-atol.nl/httpdocs/' + 'mail_send.php', (user)).subscribe(
    //   (response) => {console.log(response)},
    //   (error) => {console.log(error)}
    // );

    this.resetForm();
    this.toggleModal();
  }

  resetForm(): void {
    this.contactForm.reset();
  }

  toggleModal(): void {
    if (this.showModal === false) {
      this.showModal = true;
    }
    else {
      this.showModal = false;
    }
  }

}
