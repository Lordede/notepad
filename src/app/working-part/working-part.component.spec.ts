/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WorkingPartComponent } from './working-part.component';

describe('WorkingPartComponent', () => {
  let component: WorkingPartComponent;
  let fixture: ComponentFixture<WorkingPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
