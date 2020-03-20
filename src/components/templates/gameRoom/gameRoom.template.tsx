import React, { useEffect } from 'react';
import { StyledGameRoom } from './gameRoom.styled';
import useRoomDetail from '../../../store/room/room.hook';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../form.styled';
import useAccount from '../../../store/account/account.hook';
import * as Hangul from 'hangul-js';
import { Animated } from 'react-animated-css';

interface GamePageParamProps {
  roomId: number;
}
interface FormData {
  word: string;
}

const GameRoomPageTemplate: React.FC<GamePageParamProps> = (
  props: GamePageParamProps,
) => {
  const { getRoomState, getRoomParticipatedUsers } = useRoomDetail();
  const { accountState } = useAccount();
  const roomNumber = props.roomId;
  const usersCount = getRoomState.users.length;
  let isSuperUser = false;

  for (let i = 0; i < usersCount; i++) {
    const user = getRoomState.users[i];
    if (user.id === accountState.id) {
      isSuperUser = user.isSuperUser;
      break;
    }
  }

  const { register, handleSubmit, errors, reset } = useForm<FormData>();

  const onWordSubmit = data => {
    console.log(data);
    reset();
  };

  const validateWordComplete = value => {
    const isValidate = Hangul.isCompleteAll(value);
    if (!isValidate) {
      return '완성된 단어를 입력해주세요';
    }
    return true;
  };

  useEffect(() => {
    getRoomParticipatedUsers({ roomNumber });
  }, [getRoomParticipatedUsers, roomNumber]);
  return (
    <>
      <StyledGameRoom>
        <div className="row-container top">
          <div className="column-left words"></div>
          <div className="column-right users">
            {getRoomState.users.map((user, idx) => {
              return (
                <Animated
                  animationIn="rollIn"
                  animationOut="rollOut"
                  isVisible={true}
                  key={idx}
                >
                  <div className="profile-containter">
                    <img
                      className="profile-image"
                      src={user.profileImageUrl}
                      alt="프로필 사진"
                    ></img>
                    <div className="profile-name">{user.name}</div>
                    <div className="profile-level">Lv. {user.level}</div>
                    <div className="profile-is-ready">
                      {user.isReady ? '준비중' : ''}
                    </div>
                  </div>
                </Animated>
              );
            })}
          </div>
        </div>
        <div className="row-container middle">
          <div className="column-left message">
            <form onSubmit={handleSubmit(onWordSubmit)}>
              <input
                type="text"
                name="word"
                ref={register({
                  minLength: {
                    value: 2,
                    message: '2글자 이상의 단어를 입력해주세요',
                  },
                  validate: validateWordComplete,
                })}
              ></input>
              <button type="submit" className={errors.word ? `invalidate` : ''}>
                ▶
              </button>
            </form>
          </div>
          <div className="column-right ready">
            <p>{isSuperUser ? '게임 시작' : '게임 준비'}</p>
          </div>
        </div>
        <div className="row-container bottom countdown">
          {(errors.word && (
            <ErrorMessage className="error">
              {errors.word['message']}
            </ErrorMessage>
          )) || <div className="error"></div>}
          <div className="count">Count Down {getRoomState.gameOverCount}</div>
        </div>
      </StyledGameRoom>
    </>
  );
};

export default GameRoomPageTemplate;
