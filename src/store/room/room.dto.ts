export interface GetRoomDto {
  roomNumber: number;
}

export interface ParticipatedUsersDto {
  users: Array<ParticipatedUser>;
}

export interface ParticipatedUser {
  id: number;
  name: string;
  level: number;
  profileImageUrl: string;
  isReady: boolean;
  isSuperUser: boolean;
}
