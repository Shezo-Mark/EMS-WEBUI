import { UserModel } from "./user.model";

export interface LoginResultModel {
  token: string | null;
  user: UserModel | null;
}
