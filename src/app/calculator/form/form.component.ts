import { Component } from '@angular/core'

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
})
export class FormComponent {
    constructor() {}

    clearForm() {
        console.log('please write logic to clear form')
    }
}
