
export function getTimeInTimeZone(timeZone) {
  try {
    const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const time = new Intl.DateTimeFormat('en-US', options).format(new Date());
    return time;
  } catch (error) {
    console.error('Invalid timezone:', timeZone, error);
    return 'Invalid Timezone'; // Fallback in case of errors
  }
}
