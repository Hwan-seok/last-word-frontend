/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { StyledMakeRoom } from './makeRoom.styled';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../form.styled';

const MakeRoomPageTemplate: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <StyledMakeRoom>
      <div className="body-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-input">
            <div className="form-item">
              <label htmlFor="roomName">방 이름</label>
              <input
                type="text"
                id="roomName"
                name="roomName"
                ref={register({
                  required: {
                    value: true,
                    message: '방 이름을 입력해주세요',
                  },
                })}
              ></input>
              {errors.roomName && (
                <ErrorMessage>{errors.roomName['message']}</ErrorMessage>
              )}
            </div>
            <div className="form-item">
              <label htmlFor="roomCapacity">정원</label>
              <select
                id="roomCapacity"
                name="roomCapacity"
                ref={register({ required: true })}
              >
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div className="form-item">
              <label>모드</label>
              일반
              <input
                type="radio"
                name="roomMode"
                value="일반"
                ref={register({
                  required: true,
                })}
                checked
              />
              한방
              <input
                type="radio"
                name="roomMode"
                value="한방"
                ref={register({ required: true })}
              />
              {errors.roomsMode && (
                <ErrorMessage>{errors.roomMode['message']}</ErrorMessage>
              )}
            </div>
          </div>
          <div className="form-submit">
            <input id="form-submit" type="submit" value="방 만들기" />
          </div>
        </form>
      </div>
    </StyledMakeRoom>
  );
};

export default MakeRoomPageTemplate;
