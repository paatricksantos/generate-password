import { Container } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function Button({children, ...rest}: ButtonProps){

  return (
    <Container {...rest}>
     {children}
    </Container>
    )
}