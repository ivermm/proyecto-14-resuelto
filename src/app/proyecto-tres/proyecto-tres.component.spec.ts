import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoTresComponent } from './proyecto-tres.component';

describe('ProyectoTresComponent', () => {
  let component: ProyectoTresComponent;
  let fixture: ComponentFixture<ProyectoTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoTresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProyectoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
