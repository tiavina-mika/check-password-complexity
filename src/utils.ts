import { CheckOption, CheckOptionResult, CheckPasswordOptions, ScoreOption } from './types.d';

const scoreOptions: ScoreOption[] = [
  {
    score: 1,
    name: "tooWeak",
  },
  {
    score: 2,
    name: "weak",
  },
  {
    score: 3,
    name: "medium",
  },
  {
    score: 4,
    name: "medium",
  },
  {
    score: 5,
    name: "strong",
  },
];

export const checkPasswordComplexity = (
  password: string,
  options?: CheckPasswordOptions
): CheckOptionResult => {
  const minLength = options?.minLength || 8;
  const allowedSpecialChar = options?.allowedSpecialChar || "!@#$%^&*(),.?\":{}|<>\\[\\]\\\\/`~;'_+=-";

  const rules: CheckOption[] = [
    // password length
    {
      id: 1,
      passed: password.length > minLength,
      name: "minLength",
    },
    // password has lowercase
    {
      id: 2,
      passed: /[a-z]/.test(password),
      name: "lowercase",
    },
    // password has uppercase
    {
      id: 3,
      passed: /[A-Z]/.test(password),
      name: "uppercase",
    },
    // password has number
    {
      id: 4,
      passed: /\d/.test(password),
      name: "number",
    },
  ];

  // password has special character
  if (allowedSpecialChar) {
    rules.push({
      id: 5,
      passed: new RegExp(`[${allowedSpecialChar}]`).test(password),
      name: "specialCharacter",
    });
  }

  const checkedRules: CheckOption["name"][] = [];

  rules.forEach((check: CheckOption) => {
    if (check.passed) {
      checkedRules.push(check.name);
    }
  });

  const finalScore: number = checkedRules.length;
  const strength: ScoreOption | undefined = scoreOptions.find(
    (option: ScoreOption): boolean => option.score === finalScore
  );

  return {
    checkedRules,
    value: strength?.name || scoreOptions[0].name,
    length: password.length,
    score: strength?.score || scoreOptions[0].score,
  };
};
