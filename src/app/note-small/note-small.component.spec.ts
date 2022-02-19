/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoteSmallComponent } from './note-small.component';

describe('NoteSmallComponent', () => {
  let component: NoteSmallComponent;
  let fixture: ComponentFixture<NoteSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
