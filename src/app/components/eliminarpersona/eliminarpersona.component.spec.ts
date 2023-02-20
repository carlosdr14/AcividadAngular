import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarpersonaComponent } from './eliminarpersona.component';

describe('EliminarpersonaComponent', () => {
  let component: EliminarpersonaComponent;
  let fixture: ComponentFixture<EliminarpersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarpersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
