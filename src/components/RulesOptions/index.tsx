import { Container } from "./styles";

interface RulesOptionsProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  changeRules: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function RulesOptions({ label, value, changeRules, id }: RulesOptionsProps) {
  return (    
    <Container>
      <input
        type="checkbox"
        onChange={changeRules}
        name={label}
        id={id}
        value={value}
      />
      <label htmlFor={id} title={label} />
    </Container>
  );
}