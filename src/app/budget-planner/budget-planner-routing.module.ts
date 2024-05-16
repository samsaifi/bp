import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { BalanceComponent } from './balance/balance.component';
import { HistoryComponent } from './history/history.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'income',
        component: IncomeComponent,
    },
    {
        path: 'expense',
        component: ExpenseComponent,
    },
    {
        path: 'balance',
        component: BalanceComponent,
    },
    {
        path: 'history',
        component: HistoryComponent,
    },
    {
        path: 'profile',
        component: UserComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BudgetPlannerRoutingModule {}
