import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroDetalheComponent } from './carro-detalhe.component';

describe('CarroDetalheComponent', () => {
  let component: CarroDetalheComponent;
  let fixture: ComponentFixture<CarroDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
