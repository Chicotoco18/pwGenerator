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

  useLetters(){
      this.includeLetters = true;
  }

  useNumbers(){
    this.includeNumbers = true;
  }

  useSymbols(){
    this.includeSymbols = true;
  }
  onButtonClick(){
    console.log(this.includeLetters);
    console.log(this.includeNumbers);
    console.log(this.includeSymbols);
    this.password = 'My Password';
  }

  changeLength(value: string){
      const parsedValue = parseInt(value);
      if(!isNaN(parsedValue)){
        this.length = parsedValue;
      }
  }

  
}  