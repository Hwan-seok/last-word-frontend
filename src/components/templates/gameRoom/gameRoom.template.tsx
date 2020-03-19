import React, { useEffect } from 'react';
import { StyledGameRoom } from './gameRoom.styled';
import useRoomDetail from '../../../store/room/room.hook';

interface GamePageParamProps {
  roomId: number;
}

const GameRoomPageTemplate: React.FC<GamePageParamProps> = (
  props: GamePageParamProps,
) => {
  const { getRoomState, getRoomParticipatedUsers } = useRoomDetail();
  const a = getRoomState.gameOverCount;
  const roomNumber = props.roomId;
  useEffect(() => {
    getRoomParticipatedUsers({ roomNumber });
  }, [getRoomParticipatedUsers, roomNumber]);
  return (
    <>
      <StyledGameRoom>
        <div className="row-container top">
          <div className="column-left words"></div>
          <div className="column-right users"></div>
        </div>
        <div className="row-container middle">
          <div className="column-left words"></div>
          <div className="column-right users"></div>
        </div>
        <div className="row-container bottom countdown">{a}</div>
      </StyledGameRoom>
    </>
  );
};

export default GameRoomPageTemplate;
