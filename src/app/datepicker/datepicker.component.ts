import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { FormGroup } from '@angular/forms';
import {DatePicker} from '../../app/datepicker/model'
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  datepickerform:FormGroup;  
  datepickerObj :DatePicker=new DatePicker;
  fromdate:any
  endDate: any;
  StartDate:Date;
  constructor() { 
  
  }
 
  ngOnInit() {
   
    
  }
  datepicker(event:any)
  {
    alert(event)
    selected: {StartDate: moment; endDate: moment};

    this.fromdate=this.StartDate;
    
    const form=this.datepickerform.value;
    this.datepickerObj.selected=form;
    
  }
  
}
