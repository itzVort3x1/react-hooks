import React from 'react';
// import Accordian from './components/Accordion';
import Search from './components/Search';

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

const App = () => {
    return (
        <div>
            {/* <Accordian items={items}/> */}
            <Search />
        </div>
    );
};

export default App;