import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRoutingComponent } from './test-routing.component';

describe('TestRoutingComponent', () => {
  let component: TestRoutingComponent;
  let fixture: ComponentFixture<TestRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestRoutingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
