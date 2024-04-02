import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeMasterCodeMasterUiComponent } from './code-master-code-master-ui.component';

describe('CodeMasterCodeMasterUiComponent', () => {
  let component: CodeMasterCodeMasterUiComponent;
  let fixture: ComponentFixture<CodeMasterCodeMasterUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeMasterCodeMasterUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeMasterCodeMasterUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
