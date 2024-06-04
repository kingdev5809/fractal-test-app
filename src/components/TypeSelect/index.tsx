import React from "react";
import { SelectProps } from "../types";

const TypeSelect: React.FC<SelectProps> = ({ setCategory, category }) => {
  return (
    <div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value as "user" | "repo")}
      >
        <option value="user">Пользователь</option>
        <option value="repo">Репозиторий</option>
      </select>
    </div>
  );
};

export default TypeSelect;
