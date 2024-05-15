import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    loginFrom: any;
    registerFrom: any;
    horizontalPosition: MatSnackBarHorizontalPosition = 'start';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';
    activeForm: 'login' | 'register' = 'login';
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private snackBar: MatSnackBar
    ) {}
    ngOnInit() {
        this.loginFrom = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
        this.registerFrom = this.fb.group({
            username: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }
    toggleFrom = (formName: 'login' | 'register') => {
        this.activeForm = formName;
    };
    submit_loing = () => {
        if (this.loginFrom.valid) {
            console.log('login from', this.loginFrom.value);
            this.router.navigate(['/budget-planner/dashboard']);
        } else {
            this.snackBar.open('Invalid email and password!', 'Close', {
                duration: 10000,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
            });
        }
    };
    submit_register = () => {
        if (this.registerFrom.valid) {
            console.log('login from', this.registerFrom.value);
            this.router.navigate(['/budget-planner/dashboard']);
        } else {
            this.snackBar.open('Invalid email and password!', 'Close', {
                duration: 10000,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
            });
        }
    };
}
