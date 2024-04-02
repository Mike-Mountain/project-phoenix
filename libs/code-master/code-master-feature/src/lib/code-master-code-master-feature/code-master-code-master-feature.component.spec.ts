import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeMasterCodeMasterFeatureComponent } from './code-master-code-master-feature.component';

describe('CodeMasterCodeMasterFeatureComponent', () => {
  let component: CodeMasterCodeMasterFeatureComponent;
  let fixture: ComponentFixture<CodeMasterCodeMasterFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeMasterCodeMasterFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeMasterCodeMasterFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
