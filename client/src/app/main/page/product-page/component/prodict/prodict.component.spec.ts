import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdictComponent } from './prodict.component';

describe('ProdictComponent', () => {
  let component: ProdictComponent;
  let fixture: ComponentFixture<ProdictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
