/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoteBigComponent } from './note-big.component';

describe('NoteBigComponent', () => {
  let component: NoteBigComponent;
  let fixture: ComponentFixture<NoteBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
