import React from 'react';
import GameRoomPageTemplate from '../../src/components/templates/gameRoom/gameRoom.template';
import router from 'next/router';

const GameRoomPage: React.FC = () => {
  return <GameRoomPageTemplate roomId={Number(router.query.roomId)} />;
};

export default GameRoomPage;
