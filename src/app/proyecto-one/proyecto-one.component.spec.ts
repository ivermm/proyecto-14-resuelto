import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoOneComponent } from './proyecto-one.component';

describe('ProyectoOneComponent', () => {
  let component: ProyectoOneComponent;
  let fixture: ComponentFixture<ProyectoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProyectoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
