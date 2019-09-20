import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quize',
  templateUrl: './quize.component.html',
  styleUrls: ['./quize.component.css']
})
export class QuizeComponent implements OnInit {
  qns: any;
  
  timer;
  qnProgress: number;
  correctAnswerCount: number = 0;
  constructor(public quizservice:QuizService, private router:Router) { }

  ngOnInit() {
    this.quizservice.seconds = 0;
    this.qnProgress = 0;
    this.quizservice.getquestions().subscribe(data=>{
      this.qns=data
      this.startTimer();
    })
  }


  startTimer() {
    
    this.timer = setInterval(() => {
      this.quizservice.seconds++;
      localStorage.setItem('seconds', this.quizservice.seconds.toString());
    }, 1000);
  }

  Answer(qID, choice) {
    this.qns[this.qnProgress].answer = choice;
    localStorage.setItem('qns', JSON.stringify(this.qns));
    this.qnProgress++;
    localStorage.setItem('qnProgress', this.qnProgress.toString());
    if (this.qnProgress == 10) {
      clearInterval(this.timer);
      this.router.navigate(['/result']);
    }
  }

}
