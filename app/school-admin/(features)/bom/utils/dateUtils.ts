export const formatDate = () => new Date().toLocaleDateString();

export const formatTime = () => new Date().toLocaleTimeString();

export const formatDateTime = () => `${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`;

export const formatDateCustom = (date: Date, options?: Intl.DateTimeFormatOptions) => {
  return date.toLocaleDateString(undefined, options);
};

export const formatTimeCustom = (date: Date, options?: Intl.DateTimeFormatOptions) => {
  return date.toLocaleTimeString(undefined, options);
};

export const DATE_FORMATS = {
  date: formatDate,
  time: formatTime,
  dateTime: formatDateTime
};

