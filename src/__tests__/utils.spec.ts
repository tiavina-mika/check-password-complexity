// import {describe, expect, test} from '@jest/globals';

import { checkPasswordComplexity } from "../utils";

describe('test score', () => {
  test('abcdefgh is tooWeak', () => {
    expect(checkPasswordComplexity("abcdefgh").value).toBe('tooWeak');
  });

  test('abcdefg8 is weak', () => {
    expect(checkPasswordComplexity("abcdefg8").value).toBe('weak');
  });

  test('abcdefgh9 is medium', () => {
    expect(checkPasswordComplexity("abcdefgh9").value).toBe('medium');
  });

  test('abcdefgh9F= is strong', () => {
    expect(checkPasswordComplexity("abcdefgh9F=").value).toBe('strong');
  });
});

describe('test rules passed', () => {
  test('abcdefgh is lowercase', () => {
    expect(checkPasswordComplexity("abcdefgh").checkedRules).toStrictEqual(['lowercase']);
  });

  test('abcdefg8 is lowercase,number', () => {
    expect(checkPasswordComplexity("abcdefg8").checkedRules).toStrictEqual(['lowercase', 'number']);
  });

  test('abcdefgh9 has no uppercase and special char', () => {
    expect(checkPasswordComplexity("abcdefgh9").checkedRules).toStrictEqual(['minLength', 'lowercase', 'number']);
  });

  test('abcdefgh9F= passed all rules', () => {
    expect(checkPasswordComplexity("abcdefgh9F=").checkedRules).toStrictEqual(['minLength', 'lowercase', 'uppercase', 'number', 'specialCharacter']);
  });
});
