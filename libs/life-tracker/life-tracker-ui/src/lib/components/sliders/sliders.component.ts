import { Component, Input } from '@angular/core';
import { FormArray, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsPipe } from '@project-phoenix/shared/shared-util';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatLabel } from '@angular/material/form-field';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';

@Component({
  selector: 'life-tracker-ui-sliders',
  standalone: true,
  imports: [
    AsPipe,
    FormsModule,
    MatCard,
    MatCardContent,
    MatLabel,
    MatSlider,
    MatSliderThumb,
    ReactiveFormsModule
  ],
  templateUrl: './sliders.component.html',
  styleUrl: './sliders.component.scss'
})
export class SlidersComponent {
  @Input() sliders: FormArray<FormGroup> | undefined;
  protected readonly FormGroup = FormGroup;
}
