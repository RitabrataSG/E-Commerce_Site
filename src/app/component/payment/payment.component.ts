import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
alert:boolean=false
  addResto = new FormGroup({
    email: new FormControl(''),
    CardNo: new FormControl(''),
    Date: new FormControl(''),
    CSV: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

  collectResto() {
    this.alert=true
    this.addResto.reset({})
    
  }
  closeAlert() {
    this.alert=false
  }
}
