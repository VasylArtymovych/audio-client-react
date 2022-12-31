export const useTimeConvertor = () => {
  const addLeadingZero = (value: number) => {
    return String(value).padStart(2, '0');
  };

  const convertSec = (duration: number) => {
    const min = ~~(duration / 60);
    const sec = ~~(duration % 60);
    // Remaining minutes
    const minutes = addLeadingZero(min);
    // Remaining seconds
    const seconds = addLeadingZero(sec);
    return { minutes, seconds };
  };

  return { convertSec };
};
