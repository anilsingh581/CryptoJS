import { Component, inject } from '@angular/core';
import { UserinfoComponent } from '../userinfo/userinfo.component';
import { EncrDecrServiceService } from '../encr-decr-service.service';

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
   constructor(private encrDecrService: EncrDecrServiceService) {}

   ngOnInit(): void {
    console.log('Password :' + this._text);

    this.encrypt = this.encrDecrService.encrypt(this._text);    
    console.log('Decrypted password data :', this.encrypt);

    this.decripted = this.encrDecrService.decrypt(this.encrypt);
    console.log('Encripted to Decrypted password data :', this.decripted);
  }
   
}
