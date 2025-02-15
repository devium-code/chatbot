import { createApplication } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ChatbotComponent } from './app/chatbot/chatbot';

(async () => {
  // Genera los providers y aplánalos (flat) en un arreglo
  const providers = [
    { provide: APP_BASE_HREF, useValue: '/' },
    importProvidersFrom(BrowserModule)
  ].flat();

  const app = await createApplication({ providers });

  const chatbotElement = createCustomElement(ChatbotComponent, { injector: app.injector });
  if (!customElements.get('chatbot-element')) {
    customElements.define('chatbot-element', chatbotElement);
  }

  (window as any).initChatbot = (selector: string) => {
    const container = document.querySelector(selector);
    if (container) {
      const element = document.createElement('chatbot-element');
      container.appendChild(element);
    } else {
      console.error(`No se encontró ningún contenedor para el selector: ${selector}`);
    }
  };

  console.log('Chatbot cargado y función initChatbot expuesta.');
})();
