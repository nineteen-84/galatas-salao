import { 
  RegisterUsersUseCaseRequest, 
  RegisterUsersUseCaseResponse, 
  UserRepositoryRequest,
  UsersRepository }
from "../users-repository";

export class PrismaUsersRepository implements UsersRepository {
  create(data: RegisterUsersUseCaseRequest): Promise<RegisterUsersUseCaseResponse> {
    throw new Error("Method not implemented.");
  }

  findByEmail(email: string): Promise<UserRepositoryRequest | null> {
    throw new Error("Method not implemented.");
  }

  searchMany(): Promise<UserRepositoryRequest | null> {
    throw new Error("Method not implemented.");
  }

}