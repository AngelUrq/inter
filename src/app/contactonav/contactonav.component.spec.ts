import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactonavComponent } from './contactonav.component';

describe('ContactonavComponent', () => {
  let component: ContactonavComponent;
  let fixture: ComponentFixture<ContactonavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactonavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactonavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
