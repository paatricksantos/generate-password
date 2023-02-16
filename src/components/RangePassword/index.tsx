import { Container } from "./style";

interface RangePasswordProps {
  label: string;
  length: number;
  changeLength: (length: number) => void;
  min?: number;
  max?: number;
}

export function RangePassword({label, length, changeLength, min = 10, max=28 }: RangePasswordProps) {
  return (
    <Container >
    <div>
      <p>{label}</p>
      <span>{length}</span>
    </div>
    <input
      type="range"
      value={length}
      onChange={(e) => changeLength(Number(e.target.value))}
      min={min}
      max={max}
    />
  </Container>
  );
}