import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  qns;
  constructor(private quizservice:QuizService, private router:Router) { }

  ngOnInit() {

  this.quizservice.getquestions().subscribe(data=>{
    this.qns=data
  
  })
   }
 


   restart() {
    //localStorage.setItem('qnProgress', "0");
    //localStorage.setItem('qns', "");
    //localStorage.setItem('seconds', "0");
    this.router.navigate(['/quize']);
  }
}
