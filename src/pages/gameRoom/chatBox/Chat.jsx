import React from 'react';

class Chat extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.chats === nextProps.chats) {
      console.log("1234",this.props.chats);
      console.log(nextProps.chats);
      return false;
    } else return true;
  }
  render() {
    console.log('render', this.props.chat);
    return <div>{this.props.chat}</div>;
  }
}

export default Chat;
