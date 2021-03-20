import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionMainContentComponent } from './permission-main-content.component';

describe('PermissionMainContentComponent', () => {
  let component: PermissionMainContentComponent;
  let fixture: ComponentFixture<PermissionMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionMainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
