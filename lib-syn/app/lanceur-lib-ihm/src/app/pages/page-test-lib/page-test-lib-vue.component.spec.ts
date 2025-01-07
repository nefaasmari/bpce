import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OCNgxsUpgradeModule } from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import { PageTestLibComponent } from './page-test-lib-vue.component';

describe('PageTestLibComponent', () => {
  let component: PageTestLibComponent;
  let fixture: ComponentFixture<PageTestLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageTestLibComponent],
      imports: [RouterTestingModule, OCNgxsUpgradeModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
