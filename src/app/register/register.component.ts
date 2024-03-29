import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private quizser:QuizService, private rt:Router) { }



  ngOnInit() {
  }
  name;email;
  Onsubmit(userdata){
    var obj ={name:this.name,email:this.email}
    this.quizser.insertParticipant(obj).subscribe(
      data =>{
        localStorage.clear();
        localStorage.setItem('participant',JSON.stringify(data));
        this.rt.navigate(['/quize']);
      }
    );
      
  }

}
