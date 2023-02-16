import { IoMdArrowForward } from 'react-icons/io';
import { Button } from '../../components/Button';
import { DisplayPassword } from '../../components/DisplayPassword';
import { RangePassword } from '../../components/RangePassword';
import { RulesOptions } from '../../components/RulesOptions';
import { StrengthPassword } from '../../components/StrengthPassword';

import {
  Container,
  ControlsContainer,
  Wrapper,
} from './styles';
import { useHome } from './useHome';

export function Home() {
  const {
    password,
    lengthPassword,
    copyPassword,
    setLengthPassword,
    changeRules,
    strength,
    generatePassword
  } = useHome()

  return (
    <Wrapper>
      <Container>
        <h1>Password Generator</h1>

        <DisplayPassword password={password} copyPassword={copyPassword}  />

        <ControlsContainer>
          <RangePassword label='Character Length' changeLength={setLengthPassword} length={lengthPassword} />

          <RulesOptions value="hasCapitalLetters" id="uppercase" label='Include Uppercase Letters' changeRules={changeRules}  />

          <RulesOptions value="hasNumbers" id="numbers" label='Include numbers' changeRules={changeRules}  />

          <RulesOptions value="hasSpecialCharacters" id="symbols" label='Include symbols' changeRules={changeRules}  />


          <StrengthPassword strength={strength} />

          <Button onClick={generatePassword}>
            Generate <IoMdArrowForward size={16} />
          </Button>
        </ControlsContainer>
      </Container>
    </Wrapper>
  );
}
