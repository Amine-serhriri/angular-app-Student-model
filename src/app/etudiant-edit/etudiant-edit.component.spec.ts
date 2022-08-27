import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantEditComponent } from './etudiant-edit.component';

describe('EtudiantEditComponent', () => {
  let component: EtudiantEditComponent;
  let fixture: ComponentFixture<EtudiantEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
