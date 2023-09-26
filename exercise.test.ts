import { describe, test, expect } from "vitest";
import {
  checkPalindrome,
  fetchUserData,
  fibonacciNextNumber,
  findSqrt,
  sortArr,
  stringLength,
  sumArr,
} from "./exercise";

describe("exercise", () => {
  // 1

  test("check 'yonathan' length", () => {
    const exampleStringLength = "yonathan";
    const result = stringLength(exampleStringLength);
    expect(result).toBe(8);
  });

  // 2

  test("check if 'yo Na tH AN ah TAn OY' is palindrome", () => {
    const exampleStringLength = "yo Na tH AN ah TAn OY";
    const result = checkPalindrome(exampleStringLength);
    expect(result).toBe(true);
  });

  // 3

  test("check if [3,4,2] return [2,3,4]", () => {
    const exampleArr = [3, 4, 2];
    const result = sortArr(exampleArr);
    expect(result).toEqual([2, 3, 4]);
  });

  // 4

  test("check if sqrt of 4 is 2", () => {
    const exampleNumber = 4;
    const result = findSqrt(exampleNumber);
    expect(result).toBe(2);
  });

  test("check if sqrt of -3 is 'only positive number'", () => {
    const exampleNumber = -3;
    const result = findSqrt(exampleNumber);
    expect(result).toBe("only positive number");
  });

  // 5

  test("check if reduce of [1,2,3] = 6", () => {
    const exampleArr = [1, 2, 3];
    const result = sumArr(exampleArr);
    expect(result).toBe(6);
  });

  test("check if reduce of [1,2,3,4,5] is gt 9", () => {
    const exampleArr = [1, 2, 3, 4, 5];
    const result = sumArr(exampleArr);
    expect(result).greaterThan(9);
  });
  test("check if arr of [1,2,3,4,5] is include 3", () => {
    const exampleArr = [1, 2, 3, 4, 5];
    expect(exampleArr).include(3);
  });

  // 6

  test("check if user return match", async () => {
    const testID = 1;
    const exceptedUser = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };
    const result = await fetchUserData(testID);
    expect(result).toEqual(exceptedUser);
  });

  test("check if fake id return error", async() => {
    const testID = 1000234240;
    const result = await fetchUserData(testID);
    expect(fetchUserData(testID)).rejects.toThrowError;
  });

  // 7)

  test("check if [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181] next num is 6765", ()=> {
    const testArr = [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181]
    const expectResult = 6765
    const result = fibonacciNextNumber(testArr)
    expect(result).toBe(expectResult)
  })

  test("check if [0,1,1,2,3,5,8,13,21,34,55,86,144,233,377,610,987,1597,2584,4181] next num is false", ()=> {
    const testArr = [0,1,1,2,3,5,8,13,21,34,55,86,144,233,377,610,987,1597,2584,4181]
    const expectResult = false
    const result = fibonacciNextNumber(testArr)
    expect(result).toBe(expectResult)
  })
});
