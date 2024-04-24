import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'shared-feature-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  private loadingService = inject(LoadingService);
  public isLoading$: Observable<boolean> = this.loadingService.loading$();
}
