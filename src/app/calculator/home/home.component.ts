import { Component } from '@angular/core'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    mortgageResult: string = '0'

    handleMortgageResult(calculatedValue: string) {
        this.mortgageResult = calculatedValue
    }
}
