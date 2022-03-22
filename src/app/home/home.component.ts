import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  getRandomIntInclusive = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  now = new Date();
  day = this.days[ this.now.getDay() ];

  public lottoString!: string;
  public lottoDayError!: string;

  public lottoNumber: number[] = [];
  public powerBallNumber: number[] = [];

  public randomNumber!: number;
  public randomNumberPowerBall!: number;

  public newLottoNumber!: string;
  public newPowerBallNumber!: string;

  onPlayNow(){
    console.log(this.day)

    if (this.day === 'Wednesday' || this.day === 'Saturday' ){

      for (var i=0; i<100; i++) {
        if (this.lottoNumber.length<6){
          // console.log("lottoNumber:", this.lottoNumber);
          this.randomNumber = this.getRandomIntInclusive(1,52);
          // console.log("randomNumber:", this.randomNumber);
          this.lottoNumber.push(this.randomNumber)
        }
      }

      this.lottoNumber.sort((a, b) => a - b )
      console.log(`Lotto Number:`, this.lottoNumber)
      this.newLottoNumber = `Your lotto number is ${String(this.lottoNumber)}`
      this.lottoNumber = []

 
    } else if (this.day === 'Tuesday' || this.day === 'Friday'){
      // console.log(`On a Tuesday or a Friday`)
  
      for (var i=0; i<100; i++) {
          if (this.powerBallNumber.length<5){
              this.randomNumberPowerBall = this.getRandomIntInclusive(1,50);
              this.powerBallNumber.push(this.randomNumberPowerBall)
          } else {
            this.powerBallNumber.sort((a, b) => a - b )
            this.randomNumberPowerBall = this.getRandomIntInclusive(1,20);
            this.powerBallNumber.push(this.randomNumberPowerBall)
            break;
          }
      }

      console.log(`PowerBall Number:`, this.powerBallNumber)
      this.newPowerBallNumber = `Your PowerBall number is ${String(this.powerBallNumber)}`
      this.powerBallNumber = []

  }
  
    else { this.lottoDayError = 'Sorry, no Lotto or PowerBall tonight!'}

  }

  ngOnInit(): void {
  }

}
