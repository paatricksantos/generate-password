import { useState } from "react";
import { rulesTypes } from "../../types/rules";
import { generator } from "../../utils/password-generator";

interface useHomeProps {
  lengthPasswordInitial?: number;
  passwordInitial?: string;
}

export function useHome({ lengthPasswordInitial = 10, passwordInitial = 'your password...' }: useHomeProps = {}) {
  const [lengthPassword, setLengthPassword] = useState(lengthPasswordInitial);
  const [password, setPassword] = useState(passwordInitial);
  const [rules, setRules] = useState<rulesTypes[]>([]);
  const [strength, setStrength] = useState({
    level: "1",
    slug: "Low!",
  });

  function generatePassword() {
    setPassword(
      generator({
        rules,
        length: lengthPassword,
      })
    );
  }
  
  function changeSlug(level: string) {
    const levelToSlug: Record<string, string> = {
      "2": "Semi Low!",
      "3": "Good!",
      "4": "Very Good!",
    };
    return levelToSlug[level] || "Low!";
  }

  function changeRules(event: React.ChangeEvent<HTMLInputElement>) {
    const ruleName = event.target.value as rulesTypes;
    const ruleChecked = event.target.checked;
  
    const newRules = new Set(rules);
    ruleChecked ? newRules.add(ruleName) : newRules.delete(ruleName);
    setRules(Array.from(newRules));
  
    const newLevel = String(newRules.size + 1);
    setStrength({ level: newLevel, slug: changeSlug(newLevel) });
  }

  function copyPassword() {
    navigator.clipboard.writeText(password);
  }

  return {
    lengthPassword,
    setLengthPassword,
    password,
    rules,
    strength,
    setStrength,
    copyPassword,
    changeRules,
    generatePassword,
  };
}
