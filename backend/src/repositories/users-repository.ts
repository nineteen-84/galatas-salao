export interface RegisterUsersUseCaseRequest {
  email: string;
  name: string;
  passwordHash: string;
}

export interface RegisterUsersUseCaseResponse {
  id: string;
  email: string;
  name: string;
}

export interface UserRepositoryResponse {
  id: string;
  name: string;
  passwordHash: string;
  email: string;
}

interface UpdatedPasswordUserRequest {
  id: string;
  password: string;
}

export interface UsersRepository {
  create(data: RegisterUsersUseCaseRequest): Promise<RegisterUsersUseCaseResponse>
  findByEmail(email: string): Promise<UserRepositoryResponse | null>
  findById(id: string): Promise<UserRepositoryResponse>
  searchMany(): Promise<UserRepositoryResponse | null>
  updatedPassword(id: string): Promise<null>; 
  deleteAccount(id: string): Promise<null>;
}
