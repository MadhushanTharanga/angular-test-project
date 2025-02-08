import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, Observable} from "rxjs";
import {response} from "express";
import {log} from "util";
import {CurrencyPipe, DatePipe, JsonPipe, SlicePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    UpperCasePipe,
    DatePipe,
    CurrencyPipe,
    SlicePipe,
    JsonPipe
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements   OnInit{
  text = 'Hi suduuuu';
  date=new Date();
  salary=1234.99;
  name = 'kamal chandana';
  user={name:'kamal',age:24}
  searchText = new FormControl();
  ngOnInit(): void {
    // this.searchText.valueChanges.subscribe((value)=>{
    //   console.log(`will make the request [${value}`)
    // })

    this.searchText.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(value => {
        console.log(`will make the request [${value}`)
    })
  }

}
