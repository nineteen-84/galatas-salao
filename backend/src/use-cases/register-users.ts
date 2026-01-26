import { UsersRepository } from "@/repositories/users-repository";

interface RegisterUsersUseCaseRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
  CPF: string;
  dateBirth: string;
  createdAt: string;
  updateAt: string;
}

interface RegisterUsersUseCaseResponse {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  phone: string;
  CPF: string;
  dateBirth: string;
  createdAt: string;
  updateAt: string;
}

export class RegisterUserUseCase {
  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ 
    name, 
    email,
    password,
    phone,
    CPF,
    dateBirth,
    createdAt,
    updateAt
   }: RegisterUsersUseCaseRequest): Promise<RegisterUsersUseCaseResponse> {
    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    return { user };
  }
   
}

/*
  name VARCHAR(80) NOT NULL,
  email VARCHAR(80) UNIQUE NOT NULL,
  password VARCHAR(260) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  CPF VARCHAR(11) UNIQUE NOT NULL, # CPF deve ter o valor "UNIQUE" em sua construção
  date_birth DATE NOT NULL, # data de nascimento (promoões, etc...)
*/
