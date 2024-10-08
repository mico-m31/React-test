import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '.';

const heading = React.createElement('h1',null,'Biodata Perusahaan');
console.log(heading);

const listItem1 = React.createElement('li',null,'Nama : Dicoding Indonesia');
const listItem2 = React.createElement('li',null,'Bidang : Education');
const listItem3 = React.createElement('li',null,'Tagline : Decode ideas, Discover Potential.')

const unorderList = React.createElement('ol',null,[listItem1,listItem2,listItem3]);
const container = React.createElement('div',null,[heading,unorderList])

const root = createRoot(document.getElementById('root'));
root.render(container);

export default App;