import { 
  RegisterUseCaseRequest,
  RegisterUseCaseResponse,
  UserRepositoryResponse,
  UsersRepository 
}
from "../users-repository";

export class PrismaUsersRepository implements UsersRepository {
  deleteAccount(id: string): Promise<null> {
    throw new Error("Method not implemented.");
  }
  create(data: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    throw new Error("Method not implemented.");
  }
  
  findById(id: string): Promise<UserRepositoryResponse> {
    throw new Error("Method not implemented.");
  }
  
  findByEmail(email: string): Promise<UserRepositoryResponse | null> {
    throw new Error("Method not implemented.");
  }

  searchMany(): Promise<UserRepositoryResponse> {
    throw new Error("Method not implemented.");
  }
  
  updatedPassword(): Promise<null> {
    throw new Error("Method not implemented.");
  }

}