import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarcarComponent } from './eliminarcar.component';

describe('EliminarcarComponent', () => {
  let component: EliminarcarComponent;
  let fixture: ComponentFixture<EliminarcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarcarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
