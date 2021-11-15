import React from 'react'
import styled from 'styled-components'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';

function Chat() {
    const roomId = useSelector(selectRoomId);
    console.log(roomId)

    return (
        <ChatContainer>
            <>
                <Header>
                    <HeaderLeft>
                        <h4><strong>#Room-name</strong></h4>
                        <StarOutlineIcon />
                    </HeaderLeft>
                    <HeaderRight>
                        <p>
                            <InfoOutlinedIcon />
                            Details
                        </p>

                    </HeaderRight>
                </Header>

                <ChatMessages>

                </ChatMessages>

                <ChatInput 
                    channelId={roomId}
                />
            </>
        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

    > h4 > .MultiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
`;

const HeaderRight = styled.div`

    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MultiSvgIcon-root {
        margin-right: 10px !important;
        font-size: 16px;
    }
`;

const ChatMessages = styled.div`
`;