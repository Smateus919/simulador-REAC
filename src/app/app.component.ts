import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  time = 0;
  addTime: any;
  reduceTime: any;
  showAlert = false;

  ngOnInit(): void {
    this.increaseSpeed()
    setTimeout(() => {
      clearInterval(this.addTime);
      console.log('clear');      
    }, 6000)
  }

  increaseSpeed(): void{
    this.addTime = setInterval(() => {
      this.time++
    }, 80)
  }

  desacelerar(): void{
    this.reduceTime = setInterval(() => {
      this.time--
    }, 150)
    setTimeout(() => {
      clearInterval(this.reduceTime);
    }, 2000)
  }

  desacelerarConPedal(): void{
    this.time--
  }

  acelerarConPedal(): void{
    this.time++
  }

  activeShowAlert(): void{
    const currentSpeed = this.time;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;      
    }, 2500)
    setTimeout(() => {
      if(this.time >= currentSpeed){
        console.log('reduce');
        this.desacelerar();
      }     
    }, 5000)
  }
}
