import { Component, OnInit} from '@angular/core';
import { ChangeViewService } from '../services/changeView.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-big',
  templateUrl: './note-big.component.html',
  styleUrls: ['./note-big.component.scss']
})
export class NoteBigComponent implements OnInit {
  noteTitle!: string;
  noteContent!: string;
  noteService!: NoteService;
  changeViewService!: ChangeViewService;

  constructor(noteService: NoteService, changeViewService: ChangeViewService) {
    this.noteService = noteService;
    this.changeViewService = changeViewService;
   }

  ngOnInit() {
  }

  safeNote(title: string, content: string){
    let wholeNote = title + "|" + content;
    this.noteService.addNote(wholeNote.trim());
  }

  changePage(){
    this.changeViewService.changeView();
  }

}
