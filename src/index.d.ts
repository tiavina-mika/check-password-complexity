export type CheckOption = {
  id: number;
  passed: boolean;
  name: "minLength" | "lowercase" | "uppercase" | "number" | "specialCharacter";
};
export type Strength = "tooWeak" | "weak" | "medium" | "strong" | "veryStrong";

export type ScoreOption = {
  score: 1 | 2 | 3 | 4 | 5;
  name: Strength;
};

export type CheckOptionResult = {
  checkedRules: CheckOption["name"][];
  value: ScoreOption["name"];
  length: number;
};

export type Options = {
  minLength?: number;
  allowedSpecialChar?: string;
};