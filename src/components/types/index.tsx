export type UserData = {
  name: string;
  public_repos: number;
};

export type RepoData = {
  full_name: string;
  stargazers_count: number;
};

export type SelectProps = {
  setCategory: React.Dispatch<React.SetStateAction<"user" | "repo">>;
  category: "user" | "repo";
};

export type UserInfoProps = {
  data: UserData;
};

export type RepoInfoProps = {
  data: RepoData;
};
