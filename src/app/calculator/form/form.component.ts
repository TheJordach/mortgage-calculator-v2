import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { NgForm } from '@angular/forms'
import { CalculateMortgageService } from '../services/calculate-mortgage.service'
import { MortgageType } from './Utilities/Mortgage'

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
    @Output() calculatedMortgage: EventEmitter<string> =
        new EventEmitter<string>()
    constructor(private mortgageService: CalculateMortgageService) {}

    ngOnInit(): void {
        console.log('form component init')
    }

    clearForm(form: NgForm) {
        form.resetForm()
        console.log('clear form')
    }

    calculateRepayment(form: NgForm): void {
        if (form.valid && form.value['mortgageType'] !== 'mortgageType') {
            console.log('calculate repayment pressed')
            console.log(form.value, form.valid)

            const { mortgageAmount, mortgageTerm, interestRate, mortgageType } =
                form.value

            if (mortgageAmount > 0 && mortgageTerm > 0 && interestRate > 0) {
                switch (mortgageType) {
                    case MortgageType.Repayment:
                        this.calculatedMortgage.emit(
                            this.mortgageService.calculateRepayment(
                                mortgageAmount,
                                mortgageTerm,
                                interestRate
                            )
                        )
                        break
                    case MortgageType.Interest:
                        this.calculatedMortgage.emit(
                            this.mortgageService.calculateInterestOnly(
                                mortgageAmount,
                                interestRate
                            )
                        )
                        break
                    default:
                        console.log('Invalid mortgage type')
                        break
                }
            } else {
                console.log('Invalid input values')
            }
        } else {
            console.log('Invalid form')
        }
    }
    formatValues() {
        console.log('format values')
    }
}
