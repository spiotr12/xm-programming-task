import { TestBed } from '@angular/core/testing';
import { FormConfigService } from './form-config.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormConfigService', () => {
  let service: FormConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(FormConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
