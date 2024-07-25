import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CabService } from '../../services/cab.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cab-booking',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cab-booking.component.html',
  styleUrl: './cab-booking.component.css'
})
export class CabBookingComponent {
  bookingForm!: FormGroup;

  constructor(private fb: FormBuilder, private cabService: CabService) {
      this.bookingForm = this.fb.group({
          driverName: ['', Validators.required],
          cabNumber: ['', Validators.required],
          capacity: ['', [Validators.required, Validators.max(6)]],
          location: ['', Validators.required],
          bookingTime: ['', Validators.required],
      });
  }

  ngOnInit(): void {}

  onSubmit(): void {
      if (this.bookingForm.valid) {
          this.cabService.addCab(this.bookingForm.value).subscribe(
              response => {
                  alert('Cab booked successfully');
                  this.bookingForm.reset();
              },
              error => {
                  alert('Failed to book the cab');
              }
          );
      }
  }
}
