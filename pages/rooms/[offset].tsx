import GameRoomListTemplate from '../../src/components/templates/gameRoomList/gameRoomList.template';
import React from 'react';
import router from 'next/router';

const RoomsPage: React.FC = () => (
  <GameRoomListTemplate offset={Number(router.query.offset)} />
);

export default RoomsPage;
