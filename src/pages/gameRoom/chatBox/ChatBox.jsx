import React from 'react';
import Chat from './Chat';

class ChatBox extends React.Component {
  render() {
    return (
      <div>
        {this.props.chats.map((chat) => (
          <Chat chat={chat} key={Math.random()}></Chat>
        ))}
      </div>
    );
  }
}

export default ChatBox;
