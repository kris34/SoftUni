function depositCalculator(input) {
  let depositedAmount = Number(input[0]);
  let depositTerm = Number(input[1]);
  let yearlyInterestRate = Number(input[2]);

  let oneYearInterest = depositedAmount * (yearlyInterestRate / 100);
  let oneMonthInterest = oneYearInterest / 12;
  let totalInterestAmount = depositedAmount + oneMonthInterest * depositTerm;
  console.log(totalInterestAmount);
}

depositCalculator(["200 ", "3 ", "5.7 "]);
