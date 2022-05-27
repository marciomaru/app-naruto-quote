import narutoImg from '../images/naruto.png'
import styled from 'styled-components'
import { Quotes } from '../components/Quotes/Quotes';
import { useState } from 'react';
import { api } from '../lib/api'

export function App() {
  const [quote, setQuote] = useState('');
  const [speaker, setSpeaker] = useState('');

  async function handleUpdate(event) {
    event.preventDefault();

    const response = await api.get('/', {});

    const quoteReceived = response.data.quote;
    const speakerReceived = response.data.speaker;
    setQuote(quoteReceived);
    setSpeaker(speakerReceived);
  }

  return (
    <Content>
      <Quotes quote={quote} speaker={speaker} upDate={handleUpdate} />
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