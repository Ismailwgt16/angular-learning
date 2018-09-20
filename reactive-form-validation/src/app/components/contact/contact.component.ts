import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder, ValidationErrors, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public fg : FormGroup;  
  submitted = false;

  constructor(private fb:FormBuilder) {  

  }

  ngOnInit() {
    this.fg = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  // convenience getter for easy access to form fields
  get f() { 
    return this.fg.controls; 
  }

  public onSubmit(value) {
    this.submitted = true; 
    // stop here if form is invalid
    if (this.fg.invalid) {
        return;
    }
    console.log(value);    
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  

}
