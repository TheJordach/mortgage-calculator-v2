import BigNumber from 'bignumber.js'

export class MortgageDto {
  private _mortgageAmount: BigNumber
  private _mortgageTerm: number
  private _interestRate: BigNumber
  private _mortgageType: string
  private _calculatedMortgage: BigNumber

  constructor(
    mortgageAmount: BigNumber = new BigNumber(0),
    mortgageTerm: number = 0,
    interestRate: BigNumber = new BigNumber(0),
    mortgageType: string = '',
    calculatedMortgage: BigNumber = new BigNumber(0)
  ) {
    this._mortgageAmount = mortgageAmount
    this._mortgageTerm = mortgageTerm
    this._interestRate = interestRate
    this._mortgageType = mortgageType
    this._calculatedMortgage = calculatedMortgage
  }

  get mortgageAmount(): BigNumber {
    return this._mortgageAmount
  }

  set mortgageAmount(value: BigNumber) {
    this._mortgageAmount = value
  }

  get mortgageTerm(): number {
    return this._mortgageTerm
  }

  set mortgageTerm(value: number) {
    this._mortgageTerm = value
  }

  get interestRate(): BigNumber {
    return this._interestRate
  }

  set interestRate(value: BigNumber) {
    this._interestRate = value
  }

  get mortgageType(): string {
    return this._mortgageType
  }

  set mortgageType(value: string) {
    this._mortgageType = value
  }

  get calculatedMortgage(): BigNumber {
    return this._calculatedMortgage
  }

  set calculatedMortgage(value: BigNumber) {
    this._calculatedMortgage = value
  }
}
