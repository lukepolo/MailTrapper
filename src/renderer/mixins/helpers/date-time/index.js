export const now = () => {
  return global.moment();
};

export const parseDate = date => {
  return global.moment(date);
};

export const diff = (date1, date2) => {
  return global.moment(date2).preciseDiff(global.moment(date1));
};
