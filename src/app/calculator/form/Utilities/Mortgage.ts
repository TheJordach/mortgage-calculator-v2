export interface Mortgage {
    mortgageAmount: number
    mortgageTerms: number
    interestRate: number
    MortgageType: MortgageType
    monthlyPrepayment: string
    interestOnly: string
}

export enum MortgageType {
    Repayment = 'repayment',
    Interest = 'interest',
}
