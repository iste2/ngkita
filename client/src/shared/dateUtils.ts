export function allDaysBetween(startDate: Date, endDate: Date): Date[] {
  const days: Date[] = [];
  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    days.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return days;
}

export function earliestDate(dates: Date[]): Date {
  return dates.reduce(
    (earliest, date) => (date < earliest ? date : earliest),
    dates[0],
  );
}

export function latestDate(dates: Date[]): Date {
  return dates.reduce(
    (latest, date) => (date > latest ? date : latest),
    dates[0],
  );
}

export function dateRangeOverlaps(
  a_start: Date,
  a_end: Date,
  b_start: Date,
  b_end: Date,
) {
  if (a_start < b_start && b_start < a_end) return true; // b starts in a
  if (a_start < b_end && b_end < a_end) return true; // b ends in a
  if (b_start < a_start && a_end < b_end) return true; // a in b
  return false;
}
