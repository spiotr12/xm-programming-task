import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationComponent } from './registration.component';
import { FormConfigService, RegistrationService } from '../core/services';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';

// class MockFormConfigService {
//   getRegistrationFormConfig = jest.fn();
// }
//
// class MockRegistrationService {
//   createNewUser = jest.fn();
// }

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let formConfigService: FormConfigService;
  let registrationService: RegistrationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        FormConfigService,
        RegistrationService,
        // { provide: FormConfigService, useClasS: MockFormConfigService },
        // { provide: RegistrationService, useClasS: MockRegistrationService },
      ],
    })
      .compileComponents();

    formConfigService = TestBed.inject(FormConfigService) as any;
    registrationService = TestBed.inject(RegistrationService) as any;
  });

  it('should create', () => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Registration');
  });

  describe('constructor', () => {
    it('should call for config', () => {
      // Arrange
      jest.spyOn(formConfigService, 'getRegistrationFormConfig');

      // Act
      fixture = TestBed.createComponent(RegistrationComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      // Assert
      expect(formConfigService.getRegistrationFormConfig).toBeCalled();
    });
  });

  describe('register', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(RegistrationComponent);
      component = fixture.componentInstance;
    });

    it('should call ', () => {
      // Arrange
      jest.spyOn(registrationService, 'createNewUser');
      const obj = {};

      // Act
      fixture.detectChanges();
      component.register(obj);

      // Assert
      expect(registrationService.createNewUser).toBeCalledWith(obj);
    });
  });
});
