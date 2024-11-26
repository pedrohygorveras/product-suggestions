# Backend do Recomendador de Ferramentas de Marketing

O backend da aplicação de Recomendação de Ferramentas de Marketing é um servidor simulado implementado utilizando **JSON Server**. Ele fornece os dados dos produtos e lida com as requisições feitas pelo frontend.

## 📋 Requisitos

- Node.js v18.3 ou superior
- npm (Node Package Manager) ou Yarn

## 🚀 Instalação

Siga os passos abaixo para configurar e rodar o backend:

1. Navegue até o diretório `backend/`:

   ```bash
   cd backend
   ```

2. Instale as dependências necessárias:

   ```bash
   npm install
   ```

## ▶️ Executando o Backend

Para iniciar o servidor backend, execute o comando abaixo:

```bash
npm run start
```

Por padrão, o backend estará disponível em [http://localhost:3009](http://localhost:3009).

## 📜 Scripts Disponíveis

| Comando         | Descrição                                  |
| --------------- | ------------------------------------------ |
| `npm run start` | Inicia o backend utilizando o JSON Server. |

## 📂 Simulando o Banco de Dados

- O backend utiliza um arquivo `db.json` para simular um banco de dados.
- Você pode modificar o arquivo `db.json` para adicionar ou atualizar os dados dos produtos de acordo com as necessidades da aplicação.

### Estrutura do Arquivo `db.json`

O arquivo `db.json` contém todos os dados que serão utilizados para responder às requisições da API. Para adicionar novos produtos ou modificar os existentes, basta editar este arquivo. Um exemplo básico da estrutura do arquivo:

```json
{
  "products": [
    {
      "id": 1,
      "thumbnail": "https://...",
      "link": "https://...",
      "category_title": "Ferramentas de Marketing",
      "category_url": "https://...",
      "title": "Reescrita de Conteúdo com IA"
    },
    {
      "id": 2,
      "thumbnail": "https://...",
      "link": "https://...",
      "category_title": "Ferramentas de Marketing",
      "category_url": "https://...",
      "title": "Gerador de Pautas para Blog"
    }
  ]
}
```

## 💻 Tecnologias Utilizadas

- **JSON Server**: Ferramenta que permite criar rapidamente uma API REST fake para prototipação e testes de desenvolvimento.
- **Node.js**: Plataforma JavaScript que possibilita a execução do código no lado do servidor.

## ⚠️ Notas

- **Banco de Dados Simulado**: O backend é apenas uma simulação usando JSON Server. Não há persistência real dos dados. Toda vez que o servidor é reiniciado, ele volta ao estado do arquivo `db.json`.
