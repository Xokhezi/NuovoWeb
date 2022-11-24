import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnoArticleComponent } from './techno-article.component';

describe('TechnoArticleComponent', () => {
  let component: TechnoArticleComponent;
  let fixture: ComponentFixture<TechnoArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnoArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnoArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
