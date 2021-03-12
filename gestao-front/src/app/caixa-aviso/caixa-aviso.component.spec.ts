import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaAvisoComponent } from './caixa-aviso.component';

describe('CaixaAvisoComponent', () => {
  let component: CaixaAvisoComponent;
  let fixture: ComponentFixture<CaixaAvisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixaAvisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
