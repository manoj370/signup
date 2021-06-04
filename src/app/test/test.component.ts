import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
  
  
  public SignUpForm : FormGroup;
  
  constructor() { 
  

  }

  ngOnInit() {


    this.SignUpForm  =  new FormGroup({
      firstName      : new FormControl('',(Validators.compose[Validators.required,Validators.pattern(/^[a-zA-z]*$/])]))
  });
  }

}
