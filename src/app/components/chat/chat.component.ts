import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';
import { Mensaje } from '../../interfaces/mensaje.interface';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent {
  chats: Mensaje[] = [];
  mensaje = '';
  constructor(public chatService: ChatService) {
    this.chatService.cargarMensajes().subscribe();
    // chats = this.chattS
  }

  enviarMensaje() {
    console.log(this.mensaje);
    if (this.mensaje.trim().length === 0) {
      return;
    }

    this.chatService.agregarMensaje( this.mensaje )
    .then(() => this.mensaje = '')
    .catch((error) => console.error('No se pudo enviar el mensaje', error));
  }

}
