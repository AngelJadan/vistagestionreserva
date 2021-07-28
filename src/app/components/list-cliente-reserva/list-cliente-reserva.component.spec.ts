import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClienteReservaComponent } from './list-cliente-reserva.component';

describe('ListClienteReservaComponent', () => {
  let component: ListClienteReservaComponent;
  let fixture: ComponentFixture<ListClienteReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClienteReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClienteReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
