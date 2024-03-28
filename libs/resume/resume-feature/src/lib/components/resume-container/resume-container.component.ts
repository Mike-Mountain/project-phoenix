import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import {
  HobbiesComponent,
  ProjectCardComponent,
  SkillsComponent,
  WorkHistoryCardComponent
} from '@project-mike/resume/resume-ui';
import {
  educationHistory,
  History,
  hobbies, resumePersonalDetails, SideProject,
  sideProjects,
  Skill,
  skills,
  workHistory
} from '@project-mike/resume/resume-data-access';
import { PersonalDetailsComponent } from '@project-mike/shared/shared-ui';
import { PersonalDetails } from '@project-mike/shared/shared-data-access';
import { ToolbarService } from '@project-mike/shared/shared-util';

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

  ngOnInit(): void {
    this.toolbarService.updateTitle('Curriculum Vitae');
  }
}
