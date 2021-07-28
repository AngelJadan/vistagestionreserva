import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasinicioComponent } from './reservasinicio.component';

describe('ReservasinicioComponent', () => {
  let component: ReservasinicioComponent;
  let fixture: ComponentFixture<ReservasinicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasinicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
