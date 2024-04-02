import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeMasterCodeMasterUtilComponent } from './code-master-code-master-util.component';

describe('CodeMasterCodeMasterUtilComponent', () => {
  let component: CodeMasterCodeMasterUtilComponent;
  let fixture: ComponentFixture<CodeMasterCodeMasterUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeMasterCodeMasterUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeMasterCodeMasterUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
