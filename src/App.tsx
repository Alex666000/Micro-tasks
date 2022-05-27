import React from 'react';
import './App.css';
import {NewComponent} from './site/NewComponent';

const App = () => {
/* 1)    const students = [
        {id: 23, name: 'Alex', age: 34},
        {id: 5, name: 'Mireh', age: 78},
        {id: 666, name: 'Nut', age: 66},
        {id: 777, name: 'Nut', age: 66},
    ]*/

    // 2):
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (
        <>
            <NewComponent cars={topCars}/>
        </>
    );
};

export default App;
