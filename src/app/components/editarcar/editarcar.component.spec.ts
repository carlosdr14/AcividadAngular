import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcarComponent } from './editarcar.component';

describe('EditarcarComponent', () => {
  let component: EditarcarComponent;
  let fixture: ComponentFixture<EditarcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarcarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
