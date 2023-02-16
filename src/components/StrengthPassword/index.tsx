import { Container } from "./styles";

interface StrengthPassword {
  strength: {
    level: string;
    slug: string;
  }
}

export function StrengthPassword({strength}: StrengthPassword) {
  return (
    <Container strengthLevel={strength.level}>
    <h3>Strength</h3>

    <div>
      <p>{strength.slug}</p>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </Container>
  )
}