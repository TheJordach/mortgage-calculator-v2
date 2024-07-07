import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        console.log('form component init')
    }

    clearForm(form: NgForm) {
        form.resetForm()
        console.log('clear form')
    }

    calculateRepayment(form: NgForm) {
        if (form.valid && form.value['mortgageType'] !== 'mortgageType') {
            console.log('calculate repayment pressed')
            console.log(form.value, form.valid)
        } else {
            console.log('invalid form')
        }
    }

    formatValues() {
        console.log('format values')
    }
}
