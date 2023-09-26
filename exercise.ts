import axios from "axios";

// 1)

export const stringLength = (str: string): number => {
  return str.length;
};

// 2)

export const checkPalindrome = (str: string): boolean => {
  const lowerString = str.toLowerCase();
  const strWithoutSpaces = lowerString.replace(/\s+/g, "");
  console.log(strWithoutSpaces);

  const len = strWithoutSpaces.length;
  const isPalindrome = true;
  for (let i = 0; i < len / 2; i++) {
    if (strWithoutSpaces[i] !== strWithoutSpaces[len - i - 1]) return false;
  }
  return isPalindrome;
};

// checkPalindrome("yo Na tH AN ah TAn OY");

// 3)

export const sortArr = (arr: number[]): number[] => {
  const sortedArr = arr.sort((a, b) => {
    return a - b;
  });

  return sortedArr;
};

// console.log(sortArr([3, 4, 2]));

// 4)

export const findSqrt = (num: number): number | string => {
  return num < 0 ? "only positive number" : Math.sqrt(num);
};

// console.log(findSqrt(-2));

// 5)

export const sumArr = (arr: number[]): number => {
  const total = arr.reduce((total, curr) => total + curr, 0);
  return total;
};

// console.log(sumArr([1,2,3]));

// 6

const url = `https://jsonplaceholder.typicode.com/users/`;

export const fetchUserData = async (userId: number): Promise<any> => {
  try {
    const resp = await axios.get(url + userId);
    const data = resp.data;
    return data;
  } catch (error) {
    return error;
  }
};

// 7)

export const fibonacciNextNumber = (arr: number[]) => {
  if (arr.length < 3) return false;
  if (arr[0] != 0 || arr[1] != 1) return false;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] != (arr[i - 1] + arr[i - 2])) return false;
  }
  return (arr[arr.length - 1] + arr[arr.length - 2]);
};

console.log(fibonacciNextNumber([0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181]));

