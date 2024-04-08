import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";

@Component({
  selector: 'life-tracker-ui-workout',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCard, MatCardContent, MatRadioButton, MatRadioGroup, ReactiveFormsModule],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss',
})
export class WorkoutComponent {
  @Input() form: FormGroup | undefined;

  public updateIntensityVal() {
    if (this.form?.controls['workedOut'].value === false) {
      this.form.controls['workoutIntensity'].patchValue('none');
    }
  }
}
