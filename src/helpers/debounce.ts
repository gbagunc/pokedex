export const debounce = (func: (value: string) => void, timeout = 1000) => {
  let timer: NodeJS.Timeout | undefined;

  return (...args: any): void => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
