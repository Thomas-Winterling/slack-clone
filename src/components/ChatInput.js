import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from "@material-ui/core"
import { db } from '../firebase'
import firebase from 'firebase'

function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState('');
    
    const sendMessage = (e) => {
        e.preventDefault();

        if(channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Tom',
            userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Circle-icons-hourglass.svg/512px-Circle-icons-hourglass.svg.png',
        });

        setInput('');  
    }

    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message #ROOM`}/>
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
border-radius: 20px;

> form {
  position: relative;
  display: flex;
  justify-content: center;
}

> form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px soild gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

    
`;
