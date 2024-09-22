# Aplicação de Chat em Tempo Real (MVC)

Este é um projeto de chat em tempo real desenvolvido utilizando a arquitetura MVC (Model-View-Controller) com Node.js, HTML e CSS, além de Socket.IO para comunicação instantânea. O objetivo é treinar e demonstrar como construir uma aplicação de chat simples, acessível por uma única URL.

## Funcionalidades

- **Mensagens em tempo real**: Troca instantânea de mensagens entre usuários conectados via WebSocket (Socket.IO).
- **Interface simples**: Construída com HTML e CSS puro, focando na simplicidade e funcionalidade.
- **Sem autenticação**: Qualquer usuário pode entrar no chat diretamente, sem a necessidade de login.
- **Leve e fácil de entender**: Código otimizado para aprendizado e experimentação.

## Tecnologias utilizadas

- **Backend**: Node.js
- **Frontend**: HTML5 e CSS3
- **Comunicação em tempo real**: Socket.IO para comunicação WebSocket
- **Sem banco de dados**: A comunicação é em tempo real, sem persistência de dados (chat temporário).

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/gaabhenrique/webchat

2. Instale as dependências:
   ```bash
   npm install

3. Inicie o servidor:
   ```bash
   npm run dev

4. Acesse http://localhost:3030 no seu navegador para começar a usar o chat!