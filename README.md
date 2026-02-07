# GALATAS: DOCUMENTAÇÃO OFICIAL

- Sistema web para gerenciamento de um salão de cabelo masculino.

## Diagrama de Caso de Uso (ER)

![alt text](backend/src/database/ER.png)

## RFs (Requisitos funcionais - funcionalidades)
- - O que deve fazer

### Autenticação e Usuários
- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [] Deve ser possível trocar a senha (recuperação de conta);
- [] Deve ser possível excluir a própria conta;
- [] Deve ser possível obter o perfil de um usuário logado;

- [] Deve ser possível visualizar preços dos serviços;
- [] Deve ser possível escolher o serviço;
- [] Deve ser possível escolher o cabeleireiro;
- [] Deve ser possível realizar o agendamento do serviço (disponibilidade de horários);
- [] Deve ser possível cancelar/reagendar um agendamento;
- [] Deve ser possível realizar pagamento do serviço;
- [] Deve ser possível avaliar o serviço/cabeleireiro;
- [] Deve ser possível o usuário obter seu histórico de compras;

- [] Deve ser possível o cabeleireiro gerenciar sua própria agenda;
- [] Deve ser possível para o administrador transformar um usuário normal em cabeleireiro;
- [] Deve ser possível que o administrador consiga atribuir administração a outro usuário;
- [] Deve ser possível escolher uma assinatura das disponíveis;
- [] Deve ser possível cancelar a assinatura;

## RNFs (Requistos não-funcionais - técnico)

- [] A senha do usuário precisa estar criptografada;
- [] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [] Todas listas de dados precisam estar paginadas com 15 itens por página;
- [] O usuário deve ser identificado por um JWT (JSON Web Token);
- [] Filtros de pesquisas precisam estar cache;
- [] Sistema deve enviar notificações (SMS/email) de confirmação;
- [] Sistema deve enviar lembretes do agendamento;
- [] Integração com sistema de pagamento;

## RNs (Regras de Negócio - verficações)
- Pode fazer, mas seguindo uma condição

- [] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [] O usuário deve receber em seu email o link de recuperação da conta (troca de senha);

- [] O usuário pode escolher o tipo de serviço que irá utilizar: tipo: corte, barba, etc...
- [] O usuário de poder agendar o serviço estabelecendo a data específica no mês e o horário;
- [] O serviço, em geral, possuí duranção máxima de 45 minutos;
- [] Antecedência mínima para agendamento (ex: 2h antes);
- [] O horário de funcionamento: Segunda a Sábado, 6h às 19h"
- [] Os agendamentos devem respeitar o horário de funcionamento;
- [] Se o usuário não comparecer e o cabeleireiro reportar na plataforma, o mesmo ficará marcado em uma lista de espera, se tiver feito o pagamento, caso o contrário, o agendamento será cancelado liberando a agenda do cabeleireiro;

- [] Não deve ser possível ter mais que uma assinatura;
- [] O modelo de assinatura é mensal: plano "normal" e "premium";
- [] A assinatura "normal" garante 4 cortes no mês (não acumulativo);
- [] A assinatura "premium" garante 4 cortes + prioridade na fila;

## Prioridade de Desenvolvimento:
- MVP: Cadastro → Agendamento → Pagamento
- V2: Notificações → Avaliações → Reagendamento
- V3: Assinaturas
- V4: Análises → Relatórios