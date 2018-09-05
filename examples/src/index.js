import React from 'react';
import { render} from 'react-dom';
import Button from '../../src';

const App = () => (
    <Button text="Hello!" onClick={() => console.log('button is clicked')}/>
);

render(<App />, document.getElementById("root"));