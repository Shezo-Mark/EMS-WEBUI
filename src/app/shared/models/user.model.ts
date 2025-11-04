export interface UserModel {
  userId: string | null;
  userName: string | null;
  isJobCreator: boolean | false;
  isJobApprover: boolean | false;
  isJobPublisher: boolean | false;
  token:string | null;
}
