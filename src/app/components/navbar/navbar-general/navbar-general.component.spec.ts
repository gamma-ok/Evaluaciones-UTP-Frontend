import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGeneralComponent } from './navbar-general.component';

describe('NavbarComponent', () => {
  let component: NavbarGeneralComponent;
  let fixture: ComponentFixture<NavbarGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
