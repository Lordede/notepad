import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: string[][] = [[]];

constructor() {
  
 }

 addNote(value: string){
   let noteArray = value.split("|", 2);
   this.notes.push(noteArray);
   console.log(noteArray[0] + ", " + noteArray[1]);

 }

 getNotes(){
   return this.notes;
 }
}

