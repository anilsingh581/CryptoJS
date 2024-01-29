import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class EncrDecrServiceService {
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
