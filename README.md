Angular 17 Encrypting and Decrypting Data with Crypto-js

First, let's install crypto-js in our Angular project using npm:

npm install crypto-js
npm i --save-dev @types/crypto-js


With crypto-js installed, we can import it into our Local Service (EncrDecrService):

import * as CryptoJS from 'crypto-js';

Now we will add two encrypt and decrypt methods to handle encryption and decryption in our service class:

import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class EncrDecrService {
  //Private Key
  key = "encrypt!135790";

  //constructor
  constructor() { }

  //To encrypt input data
  public encrypt(password: string): string {
    return CryptoJS.AES.encrypt(password, this.key).toString();
  }
  
  //To decrypt input data
  public decrypt(passwordToDecrypt: string) {
    return CryptoJS.AES.decrypt(passwordToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }

}


Using this service in component class,

import { Component, inject } from '@angular/core';
import { UserinfoComponent } from '../userinfo/userinfo.component';
import { EncrDecrService } from '../encr-decr-service.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserinfoComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
   user= 'This is user list'
   encrypt ='';
   decripted='';
   private _text = 'system!1233';


   //Constructor
   constructor(private encrDecrService: EncrDecrService) {}

   ngOnInit(): void {
    console.log('Password :' + this._text);

    this.encrypt = this.encrDecrService.encrypt(this._text);    
    console.log('Decrypted password data :', this.encrypt);

    this.decripted = this.encrDecrService.decrypt(this.encrypt);
    console.log('Encripted to Decrypted password data :', this.decripted);
  }
   
}


