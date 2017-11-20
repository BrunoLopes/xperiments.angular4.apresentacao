import { TestBed, async } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
describe('RegisterComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          RegisterComponent
      ],
    }).compileComponents();
  }));
  it('should create the login', async(() => {
      const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
 });
