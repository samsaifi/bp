import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
    selector: 'app-income',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './income.component.html',
    styleUrl: './income.component.css',
})
export class IncomeComponent {
    incomeForm: any;
    selectedMonth: string = '';
    edditableForm: boolean = false;
    horizontalPosition: MatSnackBarHorizontalPosition = 'start';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private snackBar: MatSnackBar
    ) {}
    ngOnInit(): void {
        this.incomeForm = this.fb.group({
            source: ['', Validators.required],
            amount: ['', Validators.required],
            month: ['', Validators.required],
            year: ['', Validators.required],
        });
    }
    toggleEdditableForm() {
        this.edditableForm =
            this.selectedMonth == '' ? this.edditableForm : !this.edditableForm;
    }

    onChangeMonth(event: any) {
        this.selectedMonth = event.target.value;
        this.getFirlteredIncome();
        this.toggleEdditableForm();
    }
    onSubmit() {
        if (this.incomeForm.valid) {
            console.log('Form submitted', this.incomeForm.value.amount);

            // this.router.navigate(['/budget-planner/dashboard']);
        } else {
            this.snackBar.open('Invalid data!', 'Close', {
                duration: 1000,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
            });
        }
    }
    getFirlteredIncome() {}
}
