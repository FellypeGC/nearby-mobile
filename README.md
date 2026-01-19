# 📍 Nearby - Guia de Clubes de Benefícios

O **Nearby** é uma aplicação que utiliza geolocalização para listar mercados e estabelecimentos próximos ao usuário, permitindo o resgate de cupons de benefícios através da leitura de QR Codes.

---

## 🛠️ Tecnologias Utilizadas

- **Backend:** Node.js, Express, Prisma (SQLite)
- **Mobile:** React Native, Expo, Axios, React Native Maps
- **Linguagem:** TypeScript

---

## 🚀 Como Executar o Projeto

### 1. Backend
Navegue até a pasta `server` e siga os passos:

```bash
# Instalar dependências
npm install

# Resetar o banco de dados e aplicar migrações (Prisma 5.21.0)
npx prisma migrate reset --force

# Iniciar o servidor
npm run start


## 2. Mobile

# Instalar dependências
npm install

# Iniciar o Expo
npx expo start -c

---