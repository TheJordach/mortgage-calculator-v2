import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-display-result',
    templateUrl: './display-result.component.html',
    styleUrl: './display-result.component.scss',
})
export class DisplayResultComponent {
    // Create an Observable that emits value 42
    @Input() displayResult = 1797.74
    @Input() displayMortgageResult = '0.0'
}
