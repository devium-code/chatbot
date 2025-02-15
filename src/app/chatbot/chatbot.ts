import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'chatbot',
  imports: [FormsModule, CommonModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss'
})
export class ChatbotComponent {


  mensajes: string[] = [];
  entrada: string = '';

  enviarMensaje() {
    if (this.entrada.trim()) {
      this.mensajes.push(this.entrada);
      // Aquí llamarías a tu servicio de IA para obtener una respuesta
      this.mensajes.push('Respuesta del chatbot');
      this.entrada = '';
    }
  }

}

