function useOpen({ hoursFrom, hoursTo, timezone } = {}) {
  if (!(hoursFrom && hoursTo && timezone)) {
    return { hasHoursInfo: false, isOpen: false };
  }

  const d = new Intl.DateTimeFormat(['en-EN'], { timeZone: timezone, hour12: false, weekday: 'short' }).format(
    new Date(),
  );
  const h = parseInt(
    new Intl.DateTimeFormat(['en-EN'], { timeZone: timezone, hour12: false, hour: 'numeric' }).format(new Date()),
    10,
  );

  const isWeekend = ['Sun', 'Sat'].includes(d);
  const isOpen = h >= parseInt(hoursFrom, 10) && h < parseInt(hoursTo, 10);

  return { hasHoursInfo: true, isOpen: Boolean(!isWeekend && isOpen) };
}

export default useOpen;
