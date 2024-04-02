import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeMasterCodeMasterDataAccessComponent } from './code-master-code-master-data-access.component';

describe('CodeMasterCodeMasterDataAccessComponent', () => {
  let component: CodeMasterCodeMasterDataAccessComponent;
  let fixture: ComponentFixture<CodeMasterCodeMasterDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeMasterCodeMasterDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeMasterCodeMasterDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
