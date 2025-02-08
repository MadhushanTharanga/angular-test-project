import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, Observable} from "rxjs";
import {response} from "express";
import {log} from "util";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements   OnInit{
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
