import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycmpComponent } from './mycmp.component';

describe('MycmpComponent', () => {
  let component: MycmpComponent;
  let fixture: ComponentFixture<MycmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
