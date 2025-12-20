# DROP DATABASE db_galatas;
CREATE DATABASE db_galatas;
USE db_galatas;

# Tabela para registrar usuários da plataforma
CREATE TABLE galatas_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    email VARCHAR(80) UNIQUE NOT NULL,
    password VARCHAR(260) NOT NULL,
    role ENUM("user", "admin") NOT NULL,
    status ENUM("active", "inactive") NOT NULL,
    date_creation DATETIME NOT NULL,
    phone VARCHAR(20) NOT NULL,
    CPF VARCHAR(11) UNIQUE NOT NULL, # CPF deve ter o valor "UNIQUE" em sua construção
    date_birth DATE NOT NULL, # data de nascimento (promoões, etc...)
    type_hair VARCHAR(18) NOT NULL, # tipo de cabelo (recomedações, etc...)
    recognition VARCHAR(80), # aonde conheceu a plataforma (descrição/comentário)
    work VARCHAR(24) NOT NULL # especificar com o que o usuário trabalha (bom para ofertas!)
);

# Tabela para registrar planos da plataforma
CREATE TABLE galatas_signature (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(120) NOT NULL, # nome do plano (totalmente personalizavel)
    type VARCHAR(50) NOT NULL, # tipo de plano (mensal, anual, trimestral)
    price DECIMAL(10, 2) NOT NULL, # preço do plano
    benefits VARCHAR(900) NOT NULL, # benefícios que o plano oferece
    duration_days INT NOT NULL # especificar os dias pelo back (banco não manda)
);

# Tabela para registrar os barbeiros disponíveis da plataforma
CREATE TABLE galatas_barbers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    status ENUM('active', 'inactive') NOT NULL, # especificar se o barbeiro está habilitado para operar
    experience_months INT, # meses que o barbeiro já trabalha na área
    bio VARCHAR(255), # disponibilizar um meio de o cliente analisar a biografia do barbeiro
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES galatas_users(id)
);

# Tabela para registrar as categorias relacionadas aos serviços da plataforma
CREATE TABLE galatas_services_category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL, # estabele nome para categoria (corte, barba, etc...)
    status ENUM('active', 'inactive') NOT NULL, # ocultar categoria na plataforma sem precisar deletar
    description VARCHAR(255) # estabelece descrição para a categoria
);

# Tabela para registar os serviços da plataforma relacionando com categoria
CREATE TABLE galatas_services (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL, # estabele o nome do serviço (corte, barba, etc...)
    duration_minutes INT NOT NULL, # estabelece o tempo que leva para realizar o serviço (corte)
    status ENUM('active', 'inactive') NOT NULL, # ocultar serviço na plataforma sem precisar deletar
    description VARCHAR(255), # estabele descrição do serviço (corte, barba, etc... tudo junto, se for o caso)
    price_subscribers DECIMAL(10, 2) NOT NULL, # preço para assinantes (ex.: 30 reais)
    price_not_subscribers DECIMAL(10, 2) NOT NULL, # preço para não assinantes (ex.: 40 reais)
    url_image VARCHAR(50), # imagem para representar o serviço na plataforma
    # signature_id INT NOT NULL, # associa o serviço a um tipo de plano, permitindo o usuário saber em qual plano o serviço está
    # FOREIGN KEY (signature_id) REFERENCES galatas_signature(id),
    category_id INT NOT NULL, # faz referência direta a categoria, compartilhando para o usuário em qual categoria se enquadra o serviço
    FOREIGN KEY (category_id) REFERENCES galatas_services_category(id)
);

# Tabela para registrar preço do serviço por assinatura
CREATE TABLE galatas_service_signatures (
    service_id INT NOT NULL,
    signature_id INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL, # preço específico para esse plano
    PRIMARY KEY (service_id, signature_id),
    FOREIGN KEY (service_id) REFERENCES galatas_services(id),
    FOREIGN KEY (signature_id) REFERENCES galatas_signature(id)
);

# Tabela para registrar usuários que realizaram assinatura na plataforma, e se a mesma está valida
CREATE TABLE galatas_signature_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    status ENUM('active', 'inactive') NOT NULL, # sinaliza se a assinatura está habilitada para o usuário
    users_id INT NOT NULL, # relaciona o usuário com o plano escolhido
    signature_id INT NOT NULL, # relaciona o plano escolhido com o usuário sendo utilizado
    UNIQUE (users_id, signature_id),
    FOREIGN KEY (users_id) REFERENCES galatas_users(id),
    FOREIGN KEY (signature_id) REFERENCES galatas_signature(id)
);

# Tabela para registrar o agendamento do serviço por parte do usuário, escolhendo barbeiro e serviço
CREATE TABLE galatas_scheduling (
    id INT PRIMARY KEY AUTO_INCREMENT,
    status VARCHAR(16) NOT NULL, # "confirm", "pending", "cancel", "completed", "no_show"
    datetime DATETIME NOT NULL,
    users_id INT NOT NULL,
    barber_id INT NOT NULL,
    service_id INT NOT NULL,
    FOREIGN KEY (users_id) REFERENCES galatas_users(id),
    FOREIGN KEY (barber_id) REFERENCES galatas_barbers(id),
    FOREIGN KEY (service_id) REFERENCES galatas_services(id)
);