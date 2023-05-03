// Get time periods when all employees were working

const WORKING_DAY_HOURS = [9, 18];

const getHoursV1 = (periods) => {
  const sortedPeriods = periods.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] === b[1] && a[0] > b[0]) return 1;
    if (a[0] === b[0] && a[1] === b[1]) return 0;
    return -1;
  });

  const result =
    WORKING_DAY_HOURS[0] < sortedPeriods[0][0]
      ? [[WORKING_DAY_HOURS[0], sortedPeriods[0][0]]]
      : [];

  for (let i = 0; i < sortedPeriods.length - 1; i++) {
    const currentPeriodEndHour = sortedPeriods[i][1];
    const nextPeriodStartHour = sortedPeriods[i + 1][0];
    if (currentPeriodEndHour < nextPeriodStartHour)
      result.push([currentPeriodEndHour, nextPeriodStartHour]);
  }

  const lastPeriodsHour = sortedPeriods[sortedPeriods.length - 1][1];
  if (WORKING_DAY_HOURS[1] > lastPeriodsHour)
    result.push([lastPeriodsHour, WORKING_DAY_HOURS[1]]);

  return result;
};

const periods = [
  [10, 11],
  [15, 17],
  [10, 12],
  [14, 16],
];

const resultV1 = getHoursV1(periods);

console.log("Result V1:", resultV1);
