import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevorestauranteComponent } from './nuevorestaurante.component';

describe('NuevorestauranteComponent', () => {
  let component: NuevorestauranteComponent;
  let fixture: ComponentFixture<NuevorestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevorestauranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevorestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
