import React, { useState } from "react";
import axios from "axios";
import { UserData, RepoData } from "./components/types";
import { RepositoryInfo, TypeSelect, UserInfo } from "./components";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState<"user" | "repo">("user");
  const [data, setData] = useState<UserData | RepoData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!value.trim()) {
      setError("Введите имя пользователя GitHub или название репозитория");
      return;
    }
    const apiUrl =
      category === "user"
        ? `https://api.github.com/users/${value}`
        : `https://api.github.com/repos/${value}`;

    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
      setError(null);
    } catch (error) {
      setData(null);
      setError(
        "Не удалось получить данные. Пожалуйста, проверьте ввод и попробуйте снова."
      );
    }
  };

  return (
    <div>
      <h1>Информация о GitHub</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={
            category === "user"
              ? "Введите имя пользователя GitHub"
              : "Введите название репозитория"
          }
        />
        <TypeSelect setCategory={setCategory} category={category} />
        <button type="submit">Поиск</button>
      </form>
      {error && <p>{error}</p>}
      {data &&
        (category === "user" ? (
          <UserInfo data={data as UserData} />
        ) : (
          <RepositoryInfo data={data as RepoData} />
        ))}
    </div>
  );
};

export default App;
