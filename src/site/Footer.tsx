import React from 'react';

type TitleForFooterType = {
    titleForFooter: string
}

export const Footer = (props: TitleForFooterType) => {
    return (
        <>{props.titleForFooter}</>
    );
};

