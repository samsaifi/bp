import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
    history = [
        { date: '2024-05-01', des: 'Salary', amount: '3000', type: 1 },
        { date: '2024-05-02', des: 'Rent', amount: '1200', type: 0 },
        { date: '2024-05-03', des: 'Groceries', amount: '130', type: 0 },
    ];
    sources = [
        { date: '2024-05-01', des: 'Salary', amount: '3000', type: 1 },
        { date: '2024-05-02', des: 'Freelance', amount: '1500', type: 1 },
        { date: '2024-05-03', des: 'Investments', amount: '150', type: 1 },
    ];
    expense = [
        { date: '2024-05-01', des: 'Rent', amount: '1200', type: 1 },
        { date: '2024-05-02', des: 'Groceries', amount: '400', type: 1 },
        { date: '2024-05-03', des: 'Utilities', amount: '200', type: 1 },
        { date: '2024-05-03', des: 'Entertainment', amount: '300', type: 1 },
        { date: '2024-05-03', des: 'Others', amount: '400', type: 1 },
    ];

    constructor(private router: Router) {
        this.totalIncome();
    }
    totalIncome() {
        return this.sources.reduce((sum, source) => {
            return sum + Number(source.amount);
        }, 0);
    }
    totalExpense() {
        return this.expense.reduce((sum, expense) => {
            return sum + Number(expense.amount);
        }, 0);
    }
    balance() {
        return this.totalIncome() - this.totalExpense();
    }
    goToIncomePage() {
        return this.router.navigate(['budget-planner/income/']);
    }
    goToExpensesPage() {
        return this.router.navigate(['budget-planner/expense/']);
    }
    goTobalancePage() {
        return this.router.navigate(['budget-planner/balance/']);
    }
}
