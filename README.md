# 📍 Nearby - Guia de Clubes de Benefícios

O **Nearby** é uma aplicação completa (Fullstack) que utiliza geolocalização para listar mercados e estabelecimentos parceiros próximos ao usuário. A aplicação permite filtrar locais por categorias e visualizar detalhes para o resgate de cupons de benefícios através da leitura de QR Codes.

**Status do Projeto:** Atualizado e Funcional (Janeiro/2026) (Feito primeiramente em Dezembro de 2024)

---
## 💡 Observações Técnicas de Manutenção
Este projeto passou por uma revisão técnica em 2026 para garantir o funcionamento das rotas de API e integração com o banco de dados SQLite via Prisma 5.21.0.

* **Compatibilidade**: Ajustado para rodar perfeitamente no Expo SDK atual.
* **Decisão de API**: Mantive o uso do Provider Nativo de mapas para evitar custos de faturamento (R$ 200,00 de pré-pagamento) exigidos pela plataforma Google Cloud no momento.

---

### 🗺️ Renderização do Mapa e Google Cloud

Durante o desenvolvimento, identifiquei que o **Google Cloud Maps SDK** exige um faturamento mínimo obrigatório (pré-pagamento) de **R$ 200,00** para liberar a visualização das camadas de ruas, conforme comprovado abaixo:

<p align="center">
  <img src="./mobile/aviso_google.png" alt="Aviso de faturamento do Google Cloud mostrando requisito de pré-pagamento de R$ 200,00 para ativar o Google Maps SDK. A interface exibe uma seção obrigatória em vermelho, um aviso em amarelo com ícone de alerta, e informações sobre transferência de dinheiro para o Google. Inclui botão azul Comece gratuitamente e links para mais detalhes sobre formas de pagamento. Tom: informativo e de aviso sobre restrições financeiras." width="600px">
</p>

**Decisão Técnica:** Para garantir a viabilidade do teste sem custos financeiros, optei por manter o **Provider Nativo**. 
- O código de integração está 100% pronto no arquivo `home.tsx`.
- A lógica de Pins (Marcadores) e consumo de dados da API via Axios está validada.
- Ao rodar o projeto, o mapa utilizará o serviço padrão do sistema (iOS/Android) para exibir a geolocalização dos estabelecimentos retornados pelo backend.

## 🛠️ Tecnologias Utilizadas

- **Backend:** Node.js, Express, Prisma (SQLite)
- **Mobile:** React Native, Expo, Axios, React Native Maps
- **Linguagem:** TypeScript

---

## 🚀 Como Executar o Projeto

### 1. Backend
Navegue até a pasta do servidor para configurar o banco de dados:

```bash
cd server

# Instalar dependências
npm install

# Resetar e popular o banco de dados
# Este comando limpa o SQLite e executa o seed.ts (Essencial para evitar erros P2002)
npx prisma migrate reset --force

# Iniciar o servidor
npm run start

cd mobile

# Instalar dependências
npm install

# Iniciar o Expo
npx expo start

