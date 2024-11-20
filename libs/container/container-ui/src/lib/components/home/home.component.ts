import { AfterViewInit, Component, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { PersonalDetailsComponent, ThemeService } from '@project-phoenix/shared/shared-ui';
import { homeDetails, PersonalDetails, Theme } from '@project-phoenix/shared/shared-data-access';
import { ToolbarService } from '@project-phoenix/shared/shared-util';
import { interval } from 'rxjs';
import { MatAnchor, MatButton } from '@angular/material/button';
import { hobbies, sideProjects } from '@project-phoenix/resume-data-access';
import { HobbiesComponent, ProjectCardComponent } from '@project-phoenix/resume-ui';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'container-ui-home',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, PersonalDetailsComponent, MatButton, HobbiesComponent, ProjectCardComponent, MatAnchor, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('slider') private slider: ElementRef | undefined;

  public personalDetails: PersonalDetails = homeDetails;
  public titles = this.personalDetails.title;
  private topValue = 0;
  private currentIndex = 0;

  protected readonly sideProjects = sideProjects;

  private toolbarService = inject(ToolbarService);
  private themeService = inject(ThemeService);
  private renderer = inject(Renderer2);

  ngOnInit() {
    this.themeService.updateTheme(Theme.DEFAULT);
    this.toolbarService.updateTitle('Home');
  }

  ngAfterViewInit() {
    this.runTitlesLoop();
  }

  runTitlesLoop() {
    const primaryTitle = this.slider?.nativeElement.children[0];
    this.renderer.addClass(primaryTitle, 'title-main');
    interval(2000).subscribe(() => {
      if (this.currentIndex < this.titles.length -1) {
        this.currentIndex += 1;
        this.topValue -= 1.75;
      } else {
        // Reset the array
        this.currentIndex = 0;
        this.topValue = 0;
      }

      const previousTitle = this.slider?.nativeElement.children[this.currentIndex === 0 ? 7 : this.currentIndex - 1];
      this.renderer.removeClass(previousTitle, 'title-main');
      const primaryTitle = this.slider?.nativeElement.children[this.currentIndex];
      this.renderer.addClass(primaryTitle, 'title-main');
      this.renderer.setStyle(this.slider?.nativeElement, 'top', `${this.topValue}rem`)
    });
  }

  public scrollTo(projects: HTMLDivElement) {
    projects.scrollIntoView({behavior: 'smooth'});
  }
}
