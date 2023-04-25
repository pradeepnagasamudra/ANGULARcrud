import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllusersdataComponent } from './allusersdata.component';

describe('AllusersdataComponent', () => {
  let component: AllusersdataComponent;
  let fixture: ComponentFixture<AllusersdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllusersdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllusersdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
