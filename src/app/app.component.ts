import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ChatService } from './providers/chat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firechat';
  chats: Observable<any[]>;
  constructor(db: AngularFirestore, public chatService: ChatService) {
    this.chats = db.collection('chats').valueChanges();
  }
}
