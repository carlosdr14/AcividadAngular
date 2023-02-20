import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarbikerComponent } from './editarbiker.component';

describe('EditarbikerComponent', () => {
  let component: EditarbikerComponent;
  let fixture: ComponentFixture<EditarbikerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarbikerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarbikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
