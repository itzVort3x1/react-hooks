import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
// import Accordian from './components/Accordion';
// import Search from './components/Search';

// const items = [
//     {
//         title: 'what is react?',
//         content: 'React is a fron end javascript frameword'
//     },
//     {
//         title: 'why use react?',
//         content: 'React is the best javascript library'
//     },
//     {
//         title: 'How do you use React?',
//         content: 'You use React by creating components'
//     }
// ];

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'The color Blue',
        value: 'blue'
    }
];

const App = () => {
    

    return (
        <div>
            {/* <Accordian items={items}/> */}
            {/* <Search /> */}
            {/* <Dropdown selected={selected} onSelectedChange={setSelected} options={options}/> */}
            <Translate />
        </div>
    );
};

export default App;