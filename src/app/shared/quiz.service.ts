import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  //---------------- Properties---------------
  
  
  seconds: number;
  qns;
  correctAnswerCount: number = 0;

  constructor(@Inject(HttpClient) public ht) {}
    displayTimeElapsed() {
      return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
    }

    getParticipantName() {
      var participant = JSON.parse(localStorage.getItem('participant'));
      return participant.name;
    }
   


  //---------------- Http Methods---------------

  insertParticipant(body) {
    
    return this.ht.post("participentsref/insertParticipents", body);
  }

  getquestions(){
    return this.ht.get("questionsref/getQuestions")
  }

  // getAnswers() {
  //   var body = this.qns.map(x => x.QnID);
  //   return this.ht.post("questionsref/GetAnswers", body);
  // }
}
