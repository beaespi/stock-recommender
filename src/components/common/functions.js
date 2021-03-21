export const stockPriceGenerator = () => {
  return Math.floor(Math.random() * 100) + 1
}

export const socialMediaCountGenerator = () => {
  return Math.floor(Math.random() * 42)
}

export const recommendationAlgorithm = (price, socials) => {
  if (price > 60 && socials > 30) {
    return 'sell';
  } else if ((price >= 30 && price <= 60) && (socials >= 10 && socials <= 30) ) {
    return 'hold';
  } else {
    return 'buy';
  }
}

export const intl = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  minimumFractionDigits: 2
})

export const getMinDate = (minDate) => {
  const today = new Date();
  today.setDate(today.getDate() - minDate);

  return today;
};

export const getDatesBetween = (startDate, endDate) => {
  const dates = [];
  let currentDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate()
  );
  while (currentDate <= endDate) {
    dates.push(currentDate.toString());

    currentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 1,
    );
  }
  return dates;
};

export const getFormattedDate = (unformatted) => {
  const date = new Date(unformatted);
  return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
};
