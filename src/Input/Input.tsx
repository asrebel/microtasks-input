import React, {ChangeEvent} from 'react';

type InputProps = {
    title: string
    setTitle: (title: string)=>void
}

export const Input: React.FC<InputProps> = (
    {
        title,
        setTitle,
    }) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
        <input value={title} onChange={onChangeInputHandler}/>
    );
};

