import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  submit(){
      alert("Thanks for contacting us. We will get back to you within 24 hours");
      this._router.navigate(['/home'])
  }

}
