import { Component, OnInit } from '@angular/core';
import { ChangeViewService } from '../services/changeView.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-working-part',
  templateUrl: './working-part.component.html',
  styleUrls: ['./working-part.component.scss']
})
export class WorkingPartComponent implements OnInit {
  notes!: string[][];
  changeViewService!: ChangeViewService;

  constructor(noteService: NoteService, changeViewService: ChangeViewService) {
    this.notes = noteService.getNotes();
    this.changeViewService = changeViewService;
   }

  ngOnInit() {
    
  }

  changePage(){
    this.changeViewService.changeView();
  }

  isViewNoteBig(){
    return this.changeViewService.isViewNoteBig();
  }


}
