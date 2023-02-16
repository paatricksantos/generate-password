import { rulesTypes } from "../types/rules";

const NUMBERS = '0123456789';
const CAPITAL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER_LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const SPECIAL_CHARACTERS = '!"@#$%&*()_+=-{}[]´^~/;.,<>?:';


const passwordHasNumbers = (str: string) => /[\d]/.test(str);
const passwordHasLowerLetters = (str: string) => /[a-z]/.test(str);
const passwordHasCapitalLetters = (str: string) => /[A-Z]/.test(str);
const passwordHasSpecialCharacters = (str: string) =>
  /[!"@#$%&*\(\)_+=-{}\[\]´\^~\/;\.,<>?:]/.test(str);

const rulesConfiguration = {
  hasNumbers: [NUMBERS, passwordHasNumbers],
  hasLowerLetters: [LOWER_LETTERS, passwordHasLowerLetters],
  hasCapitalLetters: [CAPITAL_LETTERS, passwordHasCapitalLetters],
  hasSpecialCharacters: [SPECIAL_CHARACTERS, passwordHasSpecialCharacters],
};
const IterateArray = (limit: number) => Array.from(Array(limit));

const GetRuleConfiguration = (index: rulesTypes) => {
  return rulesConfiguration[index] || [];
};

const RulesConfigurationKeys = Object.keys(rulesConfiguration);

const RemoveInvalidRules = (rules: rulesTypes[]) =>
  rules.filter((rule) => RulesConfigurationKeys.includes(rule));

// LowerLetter default
const buildAvailableRules = (rules: rulesTypes[]) => {
  const build = rules || [];
  return RemoveInvalidRules([...build, 'hasLowerLetters']);
};

const buildAvailableChars = (rules: rulesTypes[]) => {
  return rules.reduce((accumulator, currentRule) => {
    const [currentCharacters] = GetRuleConfiguration(currentRule);
    return accumulator + currentCharacters;
  }, LOWER_LETTERS);
};

const valid = (rules: rulesTypes[], password: string) => {
  return rules.every((currentRule) => {
    const [_, fn] = GetRuleConfiguration(currentRule);
    return typeof fn === 'function' ? fn(password) : fn;
  });
};

interface generateParams {
  rules: rulesTypes[];
  length: number;
}

const generatePassword = (
  availableRules: rulesTypes[],
  characters: string,
  length: number
): string => {
  const password: string = IterateArray(length).reduce((accumulator, _) => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return accumulator + characters[randomIndex];
  }, '');

  return valid(availableRules, password)
    ? password
    : generatePassword(availableRules, characters, length);
};

const generator = ({ rules, length }: generateParams) => {
  const availableRules = buildAvailableRules(rules);
  const characters = buildAvailableChars(availableRules);
  return generatePassword(availableRules, characters, length);
};
export { rulesConfiguration, IterateArray, generator };
