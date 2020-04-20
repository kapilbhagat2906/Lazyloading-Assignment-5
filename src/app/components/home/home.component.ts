import { Component, OnInit } from '@angular/core';
import { AssignmentType } from 'src/app/models/assignment.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  assignments: Array<AssignmentType>;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { data : Array<AssignmentType> }) => {
      this.assignments = data.data;
    })
  }

}
