import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-small',
  templateUrl: './note-small.component.html',
  styleUrls: ['./note-small.component.scss']
})
export class NoteSmallComponent implements OnInit {
  @Input() title!: string;
  @Input() content!: string;

  constructor() { }

  ngOnInit() {
  }

}
