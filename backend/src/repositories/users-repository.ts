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

interface UserRepositoryRequest {
  id: string;
  name: string;
  passwordHash: string;
  email: string;
}

export interface UsersRepository {
  create(data: RegisterUsersUseCaseRequest): Promise<RegisterUsersUseCaseResponse>
  findByEmail(email: string): Promise<UserRepositoryRequest | null>
}
