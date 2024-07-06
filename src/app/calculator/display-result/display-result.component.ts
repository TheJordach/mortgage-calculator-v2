import { Component } from '@angular/core'

@Component({
    selector: 'app-display-result',
    templateUrl: './display-result.component.html',
    styleUrl: './display-result.component.scss',
})
export class DisplayResultComponent {
    // Create an Observable that emits value 42
    displayResult = 1
}
