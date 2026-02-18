export interface RegisterUseCaseRequest {
  email: string;
  name: string;
  passwordHash: string;
}

export interface RegisterUseCaseResponse {
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

export interface UsersRepository {
  create(data: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse>
  findByEmail(email: string): Promise<UserRepositoryResponse | null>
  findById(id: string): Promise<UserRepositoryResponse | null>
  searchMany(): Promise<UserRepositoryResponse>
  updatedPassword(id: string): Promise<null>; 
  deleteAccount(id: string): Promise<null>;
}
