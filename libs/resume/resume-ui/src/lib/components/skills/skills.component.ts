import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChip} from "@angular/material/chips";

@Component({
  selector: 'resume-ui-skills',
  standalone: true,
  imports: [CommonModule, MatChip],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {

  @Input() skills: any[] = [];
  public frontendSkills: any[] = [];
  public backendSkills: any[] = [];
  public miscSkills: any[] = [];

  ngOnInit() {
    this.frontendSkills = this.skills.filter(skill => skill.type === 'Frontend');
    this.backendSkills = this.skills.filter(skill => skill.type === 'Backend');
    this.miscSkills = this.skills.filter(skill => skill.type === 'Misc');
  }
}
