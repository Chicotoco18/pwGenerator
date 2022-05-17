import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeSymbols = false;
  includeNumbers = false;
  length = 0;

  useLetters() {
    this.includeLetters = true;
  }

  useNumbers() {
    this.includeNumbers = true;
  }

  useSymbols() {
    this.includeSymbols = true;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random()* validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  changeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
    else{
      this.length = 0;
    }
  }


}  