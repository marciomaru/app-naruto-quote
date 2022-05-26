//import styled from 'styled-components'
import './Quotes.css';
import { Button } from '../Button';
import { string, func } from 'prop-types';

export function Quotes({ quote, speaker, upDate }) {
    return (
        <div className='container' >
            <div className='quote' >{quote}</div>
            <div className='speaker' >- {speaker}</div>
            <Button onClick={upDate} >Quote No Jutsu!</Button>
        </div>
    );
}

Quotes.prototype = {
    quote: string,
    speaker: string,
    upDate: func,
}
// const Quote = styled.p`
//     font-size: 2em;
//     margin: 0;
// `;
// const Speaker = styled(Quote)`
//     text-align: right;
//     margin-bottom: 50px;
// `;