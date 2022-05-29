import React from 'react';

type ButtonType = {
    name: string
    callback: () => void
}

const Button:React.FC<ButtonType> = (props) => {
    const onClickHandler = () => {
        // ЧТОБЫ КНОПКА МОГЛА НАЖИМАТЬСЯ:
        props.callback()
    }

    return (
        // НАЗВАНИЕ КНОПКИ и клик на ее "хендлер". Кнопка не знает ни про "Ивана" ни про "Васю" она просто "нажималка", вся логика в BLL в мозгах:
        <button onClick={onClickHandler}>{props.name}</button>
    )
        ;
};

export default Button;