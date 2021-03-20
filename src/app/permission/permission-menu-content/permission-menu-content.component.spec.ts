import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionMenuContentComponent } from './permission-menu-content.component';

describe('PermissionMenuContentComponent', () => {
  let component: PermissionMenuContentComponent;
  let fixture: ComponentFixture<PermissionMenuContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionMenuContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionMenuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
