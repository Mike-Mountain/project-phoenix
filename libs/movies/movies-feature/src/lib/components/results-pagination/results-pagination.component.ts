import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'movies-feature-results-pagination',
  standalone: true,
  imports: [CommonModule, MatPaginator, MatRipple],
  templateUrl: './results-pagination.component.html',
  styleUrl: './results-pagination.component.scss'
})
export class ResultsPaginationComponent implements OnInit {
  @Input() public totalPages: number | undefined = 0;
  @Output() public newPage = new EventEmitter<number>();

  public pages: number[] = [1, 2, 3];
  private currentPage = 1;

  public get page(): number | undefined {
    return Number(this.currentPage);
  }

  @Input()
  public set page(value: number | undefined) {
    if (value) {
      this.currentPage = Number(value);
    }
  }

  ngOnInit() {
    if (this.page) {
      this.page = Number(this.page);
      this.pages = [
        this.page,
        this.page + 1,
        this.page + 2
      ];
    }
  }

  public updatePage(type: 'next' | 'previous' | 'first' | 'last' | 'number', page?: number): void {
    if (this.totalPages) {
      switch (type) {
        case 'next':
          if (this.page === this.pages[2] && this.page < this.getFinalPage(this.totalPages)) {
            this.pages = this.pages.map(item => item += 1);
          }
          if (this.page && this.page < this.getFinalPage(this.totalPages)) {
            this.page += 1;
          }
          break;
        case 'previous':
          if (this.page && this.page > 1) {
            if (this.page === this.pages[0]) {
              this.pages = this.pages.map(item => item -= 1);
            }
            this.page -= 1;
          }
          break;
        case 'first':
          this.page = 1;
          this.pages = [this.page, this.page + 1, this.page + 2];
          break;
        case 'last':
          this.page = this.getFinalPage(this.totalPages);
          this.pages = [this.page, 0, 0];
          break;
        case 'number':
          if (page) {
            this.page = page;
          }
          break;
      }
      this.newPage.emit(this.page);
    }
  }

  private getFinalPage(totalPages: number): number {
    return Math.ceil(totalPages / 10);
  }

}
