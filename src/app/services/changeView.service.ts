import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeViewService {
  viewNoteBig: boolean = false;

constructor() { }

changeView(){
  this.viewNoteBig = !this.viewNoteBig;
}

isViewNoteBig(){
  return this.viewNoteBig;
}
}


