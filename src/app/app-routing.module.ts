import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './form/form.component';
import {DatepickerComponent} from './datepicker/datepicker.component'
import { DropdownComponent } from './dropdown/dropdown.component';
import {TestComponent} from './test/test.component';
const routes: Routes = [
  { path: 'form', component:FormComponent },
  {path:'datepicker',component:DatepickerComponent},
  { path: 'dropdown', component:DropdownComponent },
  {path:'test',component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
