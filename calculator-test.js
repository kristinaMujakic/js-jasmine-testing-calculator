
it('should calculate the monthly rate correctly', function () {
  let values = {
    amount: 20000,
    years: 10,
    rate: 3
  };
  expect(calculateMonthlyPayment(values)).toEqual('193.12');
});


it("should return a result with 2 decimal places", function () {
  let values = {
    amount: 20050,
    years: 10,
    rate: 3
  };
  expect(calculateMonthlyPayment(values)).toBe('193.60')
});

it('should return a string'), function () {
  let values = {
    amount: 20000,
    years: 10,
    rate: 3
  };
  expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);
}

