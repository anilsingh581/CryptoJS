import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Encryption Decryption using crypto-js (AES)';
  checkboxDefer =false;

  constructor(){ }

  isCheckedDefer(event:any){
    if(event.target.checked==true){
      console.log('checkbox is checked');
      this.checkboxDefer =true;
    }
    else{
      console.log('checkbox is unchecked');
      this.checkboxDefer =false;
    }
  }
}
