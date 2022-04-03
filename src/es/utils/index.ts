export const $ = (selector, node = document) => node.querySelector(selector);
export const $$ = (selector, node = document) => node.querySelectorAll(selector);

export const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const isNumberInRange = (value: number, min: number, max: number) =>
  value >= min && value <= max;

export const isStringLengthInRange = (value: string, min: number, max: number) =>
  value.length >= min && value.length <= max;

export const isCorrectNumberUnit = (value: number, unit: number) => value % unit === 0;

export const getInnerInputValues = ($target) => {
  const $$inputs = Array.from($$('input', $target));
  return $$inputs.reduce((previous, inputElement) => {
    previous[inputElement.name] = inputElement.type === 'number' ? Number(inputElement.value) : inputElement.value;
    return previous;
  }, {});
};

export const clearInnerInputValues = ($target) => {
  const $$inputs = Array.from($$('input', $target));
  $$inputs.forEach($input => ($input.value = ''));
};

export const showSnackBar = (message: string) => {
  const $snackBar = $('.snackbar');
  $snackBar.innerText = message;
  $snackBar.classList.toggle('show');
  setTimeout(() => {
    $snackBar.classList.toggle('show');
  }, 3000);
};
