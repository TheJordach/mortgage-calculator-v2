import { Injectable } from '@angular/core'
import BigNumber from 'bignumber.js'

@Injectable({
    providedIn: 'root',
})
export class CalculateMortgageService {
    constructor() {}

    /**
     * Calculate the monthly repayment for a repayment mortgage.
     * @param mortgageAmount - The mortgage amount in USD.
     * @param mortgageTerms - The mortgage term in mortgageTerms.
     * @param interestRate - The annual interest rate in percentage.
     * @returns The monthly repayment amount.
     */
    calculateRepayment(
        mortgageAmount: number,
        mortgageTerms: number,
        interestRate: number
    ): string {
        const principalBN = new BigNumber(mortgageAmount)
        const monthlyInterestRate = new BigNumber(interestRate).div(100).div(12)
        const numberOfPayments = new BigNumber(mortgageTerms).times(12)

        const numerator = principalBN
            .times(monthlyInterestRate)
            .times(monthlyInterestRate.plus(1).pow(numberOfPayments))
        const denominator = monthlyInterestRate
            .plus(1)
            .pow(numberOfPayments)
            .minus(1)

        const monthlyRepayment = numerator.div(denominator)
        return monthlyRepayment.toFixed(2)
    }

    /**
     * Calculate the monthly payment for an interest-only mortgage.
     * @param mortgageAmount - The mortgage amount in USD.
     * @param interestRate - The annual interest rate in percentage.
     * @returns The monthly interest payment amount.
     */
    calculateInterestOnly(
        mortgageAmount: number,
        interestRate: number
    ): string {
        const principalBN = new BigNumber(mortgageAmount)
        const monthlyInterestRate = new BigNumber(interestRate).div(100).div(12)
        const monthlyInterestPayment = principalBN.times(monthlyInterestRate)
        return monthlyInterestPayment.toFixed(2)
    }

    /**
     * Calculate the total repayment amount over the loan term.
     * @param monthlyRepayment - The monthly repayment amount.
     * @param years - The mortgage term in years.
     * @returns The total repayment amount.
     */
    calculateTotalRepayment(monthlyRepayment: number, years: number): number {
        const totalPayments = years * 12 // Total number of monthly payments
        return monthlyRepayment * totalPayments
    }
}
