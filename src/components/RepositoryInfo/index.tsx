import React from "react";
import { RepoInfoProps } from "../types";

const RepositoryInfo: React.FC<RepoInfoProps> = ({ data }) => {
  return (
    <div className="info">
      <h1>Информация о репозитории</h1>
      <p>
        Полное название: <span>{data.full_name}</span>
      </p>
      <p>Звезд: {data.stargazers_count}</p>
    </div>
  );
};

export default RepositoryInfo;
