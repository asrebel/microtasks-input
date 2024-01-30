import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FullInput} from "./Input/FullInput";
import {Input} from "./Input/Input";
import {Button} from "./Input/Button";

function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'},
        ]
    )

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        const newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="App">
            {/*
        <FullInput addMessage={addMessage}/>
*/}
            <Input
                title={title}
                setTitle={setTitle}/>
            <Button
                name={'+'}
                callback={callBackButtonHandler}
            />
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
