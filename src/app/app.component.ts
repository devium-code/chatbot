import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot';

@Component({
  selector: 'app-root',
  imports: [ChatbotComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    console.log('Esto es para ver si hace el build automatico...')
  }
  title = 'chatbot';
}
