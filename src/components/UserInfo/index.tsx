import React from "react";
import { UserInfoProps } from "../types";

const UserInfo: React.FC<UserInfoProps> = ({ data }) => {
  return (
    <div className="info">
      <h1>Информация о пользователе</h1>
      <p>
        Полное имя: <span>{data.name}</span>
      </p>
      <p>Репозиториев: {data.public_repos}</p>
    </div>
  );
};

export default UserInfo;
