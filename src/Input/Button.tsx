import React from 'react';

type ButtonProps = {
    name: string
    callback: ()=>void
}
export const Button: React.FC<ButtonProps> = (
    {
        name,
        callback,
    }) => {
    const onClickButtonHandler = () => {
        callback()
    }
    return (
        <button onClick={onClickButtonHandler}>{name}</button>
    );
};

