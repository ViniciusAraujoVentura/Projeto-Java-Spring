# 📝 CRUD Lista de Tarefas (Todo List)

![Java](https://img.shields.io/badge/Java-21-red?logo=java)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-green?logo=springboot)
![Angular](https://img.shields.io/badge/Angular-20-red?logo=angular)
![JavaFX](https://img.shields.io/badge/JavaFX-21-blue?logo=openjdk)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

---

## 📌 Descrição do Projeto
Este projeto consiste em uma aplicação **Full Stack** desenvolvida para gerenciar uma lista de tarefas (**Todo List**).  
A aplicação possui **tema Dark/Light**, rodapé com informações do desenvolvedor e integração entre **Web** e **Desktop**.  

O sistema foi desenvolvido com:
- **Backend:** Spring Boot (Java)
- **Frontend:** Angular  
- **Desktop:** JavaFX consumindo a mesma API REST
- Comunicação via **REST API**

---

## 🚀 Funcionalidades
✔ Criar, listar, editar e remover tarefas  
✔ Alternância de tema **Dark/Light**  
✔ Rodapé com informações do desenvolvedor  
✔ Cliente **JavaFX** integrado à mesma API  

---

## 🛠️ Tecnologias Utilizadas
### Backend
- Java 21
- Lombok
- Spring Boot
- Spring Data JPA
- H2 Database
- Maven

### Frontend
- Angular 20
- TypeScript
- HTML / CSS (com suporte a Dark/Light)

### Desktop
- JavaFX 21
- Apache HttpClient 5
- Jackson

---

## ▶️ Como Executar
```bash
# Clonar o repositório
git clone https://github.com/BrunoMartinsJorge/Projeto-Full-Stack-Linguagem-de-Programacao.git
cd Projeto-Full-Stack-Linguagem-de-Programacao

# ▶️ Backend (Spring Boot)
cd backend
./mvnw spring-boot:run

# ▶️ Frontend (Angular)
cd frontend
npm install
ng serve

# ▶️ Desktop (JavaFX)
cd desktop
mvn javafx:run
