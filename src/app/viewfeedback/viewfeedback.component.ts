import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrl: './viewfeedback.component.css'
})
export class ViewfeedbackComponent {
  feedbacks: any[] = []; // Array to hold feedbacks
  filteredFeedbacks: any[] = []; // Array to hold filtered feedbacks
  selectedFilter: string = 'all'; // Default filter value

  constructor(private http: HttpClient) {
    // Make GET request to fetch feedbacks from API
    this.http.get<any[]>('https://localhost:7209/api/Feedback',{withCredentials:true}).subscribe(
      (response) => {
        // Store fetched feedbacks
        this.feedbacks = response;

        // Set filter to 'all' when feedbacks are loaded
        this.filterFeedbacks('all');
      },
      (error) => {
        console.error('Error fetching feedbacks:', error);
      }
    );
  }

  // Function to filter feedbacks based on selected filter
  filterFeedbacks(filterType: string): void {
    if (filterType === 'all') {
      // If filter is set to 'all', return all feedbacks
      this.filteredFeedbacks = this.feedbacks;
    } else {
      // Otherwise, filter feedbacks based on selected filter type
      this.filteredFeedbacks = this.feedbacks.filter(feedback => feedback.feedBackType === filterType);
    }
  }
}
