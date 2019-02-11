import { Injectable } from '@angular/core';

@Injectable()
export class StringUtility {
  constructor() { }

  public generateRandom(length: number = 11) {
    const defaultCount = 11;
    const paddingLeft = 2;
    length = length || defaultCount;
    const count = length / defaultCount;
    if (count === 0) {
      return Math.random().toString(36).substring(paddingLeft, paddingLeft + length);
    }
    const randoms = Array(count + 1).fill(0).map(() =>
      Math.random().toString(36).substring(paddingLeft)
    );
    return randoms.join('').substring(0, length);
  }
}
