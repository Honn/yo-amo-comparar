import { async, TestBed } from '@angular/core/testing';
import { CuiModule } from './cui.module';

describe('CuiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CuiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CuiModule).toBeDefined();
  });
});
