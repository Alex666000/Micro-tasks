import React from 'react';

type TitleNewBodyType = {
    titleForBody: string
}

export const Body = (props: TitleNewBodyType) => {
    return (
        <>{props.titleForBody}</>
    );
};
