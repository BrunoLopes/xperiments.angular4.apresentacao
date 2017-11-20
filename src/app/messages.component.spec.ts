import { TestBed, async } from '@angular/core/testing';
import { MessagesComponent } from './messages.component';
describe('MessagesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          MessagesComponent
      ],
    }).compileComponents();
  }));
  it('should create the messages', async(() => {
      const fixture = TestBed.createComponent(MessagesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
 });
