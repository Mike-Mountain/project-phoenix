import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import {
  HobbiesComponent,
  ProjectCardComponent,
  SkillsComponent,
  WorkHistoryCardComponent
} from '@project-phoenix/resume-ui';
import {
  educationHistory,
  History,
  hobbies,
  resumePersonalDetails,
  SideProject,
  sideProjects,
  Skill,
  skills,
  workHistory
} from '@project-phoenix/resume-data-access';
import { PersonalDetailsComponent, ThemeService } from '@project-phoenix/shared/shared-ui';
import { PersonalDetails, Theme } from '@project-phoenix/shared/shared-data-access';
import { ToolbarService } from '@project-phoenix/shared/shared-util';

@Component({
  selector: 'resume-feature-resume-container',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, WorkHistoryCardComponent, SkillsComponent, HobbiesComponent, ProjectCardComponent, PersonalDetailsComponent],
  templateUrl: './resume-container.component.html',
  styleUrl: './resume-container.component.scss'
})
export class ResumeContainerComponent implements OnInit {
  public personalDetails: PersonalDetails = resumePersonalDetails;
  public workHistory: History[] = workHistory;
  public skills: Skill[] = skills;
  public hobbies: string[] = hobbies;
  public educationHistory: History[] = educationHistory;
  public sideProjects: SideProject[] = sideProjects;

  private toolbarService = inject(ToolbarService);
  private themeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.updateTheme(Theme.DEFAULT);
    this.toolbarService.updateTitle('Curriculum Vitae');
  }
}
