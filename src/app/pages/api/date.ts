import type { NextApiRequest, NextApiResponse } from "next";

type DateResponse = Array<string>;

function getRandomDates(
  startDate: Date,
  endDate: Date,
  numDates: number
): Array<Date> {
  const dates: Set<string> = new Set();

  while (dates.size < numDates) {
    const randomTime =
      startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime());
    const randomDate = new Date(randomTime).toLocaleDateString();
    dates.add(randomDate);
  }

  return Array.from(dates).map((date) => new Date(date));
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DateResponse>
) {
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  const randomDates = getRandomDates(today, nextWeek, 5);

  const dateStringArray: Array<string> = randomDates.map((date) =>
    date.toLocaleDateString()
  );

  res.status(200).json(dateStringArray);
}
