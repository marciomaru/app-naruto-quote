import narutoImg from '../images/naruto.png'
import styled from 'styled-components'
import { Quotes } from '../components/Quotes/Quotes';


export function App() {

  function fraseandoNoConsole() {
    console.log('graaaaaaaa');
  }

  return (
    <Content>
      <Quotes quote={'ok'} speaker={'Alguem'} upDate={fraseandoNoConsole} />
      <NarutoImg src={narutoImg} alt="Naruto with a kunai" />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;