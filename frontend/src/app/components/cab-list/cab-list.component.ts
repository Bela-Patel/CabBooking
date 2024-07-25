import { Component, OnInit } from '@angular/core';
import { CabService } from '../../services/cab.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cab-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cab-list.component.html',
  styleUrl: './cab-list.component.css'
})
export class CabListComponent implements OnInit {
  cabs: any[] = [];

  constructor(private cabService: CabService) {}

  ngOnInit(): void {
      this.cabService.getCabs().subscribe(data => {
          this.cabs = data;
      });
  }

  bookCab(id: string): void {
      this.cabService.bookCab(id).subscribe(() => {
          this.ngOnInit();
      });
  }

  freeCab(id: string): void {
      this.cabService.freeCab(id).subscribe(() => {
          this.ngOnInit();
      });
  }
}
