import React, {ChangeEvent, useState} from 'react';

type FullInputProps = {
    addMessage: (title: string) => void
}
export const FullInput: React.FC<FullInputProps> = (
    {
        addMessage,
    }) => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }

    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle('')

    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+
            </button>
        </div>
    );
};
