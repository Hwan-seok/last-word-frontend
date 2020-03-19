export interface GetRoomDto {
  roomNumber: number;
}

export interface ParticipatedUsersDto {
  users: Array<ParticipatedUser>;
}

export interface ParticipatedUser {
  name: string;
  level: number;
  profileImageUrl: string;
  isReady: boolean;
  isSuperUser: boolean;
}
