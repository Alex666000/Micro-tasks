import React from 'react';
import './App.css';
import Button from './component/Button';

// Создаем универсальную кнопку:
const App = () => {
    // каждую кнопку обрабатывают свои мозги BLL вся логика тут а не на UI:
    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string,cars: number) => {
        console.log(subscriber, cars)
    }
    const ButtonFoo3 = () => {
        console.log('Button here')
    }

    return (
        <div className={'App'}>
           {/*Логика универсальной кнопки: передаем любые параметры*/}
            <Button name={'MyChanel-1'} callback={ () => {Button1Foo('Im Vasya', 21, 'live in Moscow')} }/>
            <Button name={'MyChanel-2'} callback={ () => {Button2Foo ('Im Ivan', 77)} }/>
            <Button name={'BUTTON'} callback={ButtonFoo3}/>
        </div>
    )
}
export default App

/*
Алгоритм:
/!*- создаем универсальную Компоненту - кнопку - у нее должен быть name (имя) и calback(нажмись) кнопка должна нажиматься в Bll вызываем нашу кнопку с нашим именем и нашими параметрами которые попадают выше в мозги - вся логика тут вверху мы вызываем логику и передаем свои параметры в нее
-*!/
*/


