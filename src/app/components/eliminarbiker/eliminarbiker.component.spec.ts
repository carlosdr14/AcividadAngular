import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarbikerComponent } from './eliminarbiker.component';

describe('EliminarbikerComponent', () => {
  let component: EliminarbikerComponent;
  let fixture: ComponentFixture<EliminarbikerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarbikerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarbikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
