import { Component, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DashboardService } from '../services/dashboard.service';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { GlobalConstants } from '../shared/global-constants';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
	displayedColumns: string[] = ['name'];
	dataSource: any;
	responseMessage: any
	data: any;

	ngAfterViewInit() { }

	constructor(private dashboardService: DashboardService,
		private userService: UserService,
		private ngxService: NgxUiLoaderService,
		private snackbarService: SnackbarService) {
			this.ngxService.start();
			
	}

	tableData() {
		this.userService.getUsers().subscribe((response: any) => {
		  this.dataSource = new MatTableDataSource(response);
		}, (error: any) => {
		  if (error.error?.message) {
			this.responseMessage = error.error?.message;
		  }
		  else {
			this.responseMessage = GlobalConstants.genericError;
		  }
		  this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error)
		})
	  }

	
}
