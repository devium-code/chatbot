import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'chatbot',
  imports: [FormsModule, CommonModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss',
  animations: [
    trigger('slideInOut', [
      // Estado "open": visible
      state('open', style({
        transform: 'translateY(-65px)',
        opacity: 1
      })),
      // Estado "closed": desplazado (100%) y transparente
      state('closed', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      // Transiciones
      transition('closed => open', [
        animate('0.3s ease-in-out')  // 0.3s al abrir
      ]),
      transition('open => closed', [
        animate('0.2s ease-in-out')  // 0.2s al cerrar
      ]),
    ])
  ]
})
export class ChatbotComponent implements OnInit{
  ngOnInit(): void {
    console.log('Esto es para ver si hace el build automatico...');
  }

  mensajes: string[] = [];
  entrada: string = '';
  showChat = false;

  toggleChat(){
    this.showChat = !this.showChat;
  }

}

