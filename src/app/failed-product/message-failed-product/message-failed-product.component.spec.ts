import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFailedProductComponent } from './message-failed-product.component';

describe('MessageFailedProductComponent', () => {
  let component: MessageFailedProductComponent;
  let fixture: ComponentFixture<MessageFailedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageFailedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFailedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
