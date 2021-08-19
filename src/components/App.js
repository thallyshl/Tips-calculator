import React, {useState} from 'react';
import styled from 'styled-components';
import '../App.css';

const Title = styled.h1 `
  color: black;
  padding: 10px;
`
const Paragraph = styled.p `
  font-size: 1.5rem;
  color: black;
  padding: 10px;
`
const Input = styled.input `
  width: 150px;
  text-align: center;
  padding: 0.5rem
  padding: 5px;
  margin: 10px;
`
const ParagraphResult = styled(Paragraph) `
  font-size: 2rem;
`
const Button = styled.button `
  padding: 0.5rem;
  color: black;
  padding: 5px;
  margin: 10px;

`



function App() {

  const [valorConta, setValorConta] = useState ();
    const changeValorConta = (e) => {
        setValorConta (Number(e.target.value));
    }
    if (valorConta < 0) {
        alert ('Valor não pode ser negativo!');
        setValorConta ('');
    }

    const [valorPorcentagem, setValorPorcentagem] = useState ('')
    const changePorcentagem = (e) => {
        setValorPorcentagem (Number(e.target.value))
    }

    const [valorFinal, setValorFinal] = useState ('')
    const changeValorFinal = () => {
        setValorFinal (valorConta * (valorPorcentagem/100))
    }

  return (
    <>
      <div className='main'>
        <div className = 'main-in'>
            <Title>Calculadora de gorjeta!</Title>
            <Paragraph>Quanto deu a conta:</Paragraph>
            <Input type='number' placeholder='Valor da conta' value={valorConta} onChange={changeValorConta}></Input>
            <Paragraph>Quanto é a porcentagem:</Paragraph>
            <Input type='number' placeholder='Valor %' value={valorPorcentagem} onChange={changePorcentagem}></Input>

            {valorFinal > 0 &&
              <ParagraphResult>O valor da gorjeta será: R$ {valorFinal.toFixed(2)}</ParagraphResult>
            }
            {valorFinal === 0 &&
              <ParagraphResult>Não tem gorjeta, obrigado!</ParagraphResult>
            }
            <hr/>
            <Button onClick = {changeValorFinal}>Calcular</Button>
        </div>
      </div>
  </>
  );
}

export default App;
