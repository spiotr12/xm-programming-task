import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationComponent } from './registration.component';
import { FormConfigService, RegistrationService } from '../core/services';


describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let formConfigService: /*Mock*/FormConfigService;
  let registrationService: /*Mock*/RegistrationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      providers: [
        // { provide: FormConfigService, useClasS: MockFormConfigService },
        // { provide: RegistrationService, useClasS: MockRegistrationService },
      ],
    })
      .compileComponents();

    formConfigService = TestBed.inject(FormConfigService) as any;
    registrationService = TestBed.inject(RegistrationService) as any;

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('should call for config', () => {
      // Arrange

      // Act
      fixture.detectChanges();

      // Assert
      expect(formConfigService.getRegistrationFormConfig).toHaveBeenCalled();
    });
  });

  describe('register', () => {
    it('should call ', () => {
      // Arrange
      const obj = {};

      // Act
      fixture.detectChanges();
      component.register(obj);

      // Assert
      expect(registrationService.createNewUser).toHaveBeenCalledWith(obj);
    });
  });
});
