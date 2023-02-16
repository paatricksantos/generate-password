import { IoMdCopy } from "react-icons/io";
import { Container } from "./styles";

interface DisplayPasswordProps {
  password: string;
  copyPassword: () => void;
}

export function DisplayPassword({password, copyPassword} : DisplayPasswordProps) {

  return (
    <Container>
    <span>{password}</span>
    <button>
      <IoMdCopy onClick={copyPassword} strokeWidth={8} size={22} />
    </button>
  </Container>
  );
}