import { StyledGameRoomListPage } from './gameRoomList.styled';
import React, { useEffect } from 'react';
import useRooms from '../../../store/rooms/rooms.hook';
import Link from 'next/link';
import ActivateLink from '../../../utils/links/activateLink';

interface GameRoomListProps {
  offset: number;
}

const GameRoomListTemplate: React.FC<GameRoomListProps> = ({
  offset,
}: GameRoomListProps) => {
  const { roomsState, getRoomList, getRoomsCount } = useRooms();
  const currentPage = offset;
  const { maxPage } = roomsState;
  useEffect(() => {
    getRoomList(currentPage, roomsState.limit);
    getRoomsCount();
  }, [currentPage, getRoomList, getRoomsCount, roomsState.limit]);
  return (
    <>
      <StyledGameRoomListPage>
        <Link href="/rooms/create">
          <a className="create-room">방 만들기</a>
        </Link>
        <div className="room-list-header">
          <div className="room-number">#</div>
          <div className="room-name">방 이름</div>
          <div className="room-capacity">인원</div>
          <div className="room-mode">모드</div>
          <div className="room-status">상태</div>
        </div>
        <hr></hr>
        <div className="room-list-body">
          {roomsState.roomList.map(room => {
            return (
              <Link
                key={room.roomNumber}
                href="/room/[roomId]"
                as={`/room/${room.roomNumber}`}
              >
                <li className="room-list-body-line" key={room.roomNumber}>
                  <div className="room-number">{room.roomNumber}</div>
                  <div className="room-name">{room.roomName}</div>
                  <div className="room-capacity">
                    {room.participatedUserCount}/{room.maxUserCount}
                  </div>
                  <div className="room-mode">{room.gameMode}</div>
                  <div className="room-status">{room.roomStatus}</div>
                </li>
              </Link>
            );
          })}
        </div>
        <div className="pagination">
          {currentPage !== 1 ? (
            <>
              <Link href={'/rooms/[offset]'} as="/rooms/1">
                <a className="pagination-start">{'<< 처음'}</a>
              </Link>
              <Link href={`/rooms/[offset]`} as={`/rooms/${currentPage - 1}`}>
                <a className="pagination-before">{'< 이전'}</a>
              </Link>
            </>
          ) : null}
          {[
            ...Array(maxPage)
              .fill(undefined)
              .map((_, idx) => {
                const offsetPage = idx + 1;

                return (
                  <ActivateLink
                    key={offsetPage}
                    href={`/rooms/[offset]`}
                    as={`/rooms/${offsetPage}`}
                  >
                    <a className="page">{offsetPage}</a>
                  </ActivateLink>
                );
              }),
          ]}
          {currentPage !== maxPage ? (
            <>
              <Link href={`/rooms/[offset]`} as={`/rooms/${currentPage + 1}`}>
                <a className="pagination-after">{'다음 >'}</a>
              </Link>
              <Link href={`/rooms/[offset]`} as={`/rooms/${maxPage}`}>
                <a className="pagination-end">{'끝 >>'}</a>
              </Link>
            </>
          ) : null}
        </div>
      </StyledGameRoomListPage>
    </>
  );
};

export default GameRoomListTemplate;
