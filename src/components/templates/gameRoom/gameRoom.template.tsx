import React from 'react';
import { StyledGameRoom } from './gameRoom.styled';

interface GamePageParamProps {
  roomId: number;
}

const GameRoomPageTemplate: React.FC<GamePageParamProps> = (
  props: GamePageParamProps,
) => {
  return (
    <>
      <StyledGameRoom>{props.roomId}</StyledGameRoom>
    </>
  );
};

export default GameRoomPageTemplate;
