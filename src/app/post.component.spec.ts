import { TestBed, async } from '@angular/core/testing';
import { PostComponent } from './post.component';
describe('PostComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          PostComponent
      ],
    }).compileComponents();
  }));
  it('should create the post', async(() => {
      const fixture = TestBed.createComponent(PostComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
 });
