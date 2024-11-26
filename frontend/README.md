# Frontend do Recomendador de Ferramentas de Marketing

O frontend da aplicação de Recomendação de Ferramentas de Marketing foi desenvolvido em **React.js** e estilizado com **Tailwind CSS** e **Daisy UI**. Essa interface permite que os usuários insiram suas preferências e recebam recomendações de produtos personalizados.

## 📋 Requisitos

- Node.js v18.3 ou superior
- npm (Node Package Manager) ou Yarn

## 🚀 Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento do frontend:

1. Navegue até o diretório `frontend/`:

   ```bash
   cd frontend
   ```

2. Instale as dependências necessárias:

   ```bash
   npm install
   ```

3. Para construir o projeto para produção:

   ```bash
   npm run build
   ```

## ▶️ Executando a Aplicação

Para iniciar o frontend no modo de desenvolvimento, execute o seguinte comando:

```bash
npm run dev
```

Por padrão, o frontend estará disponível em [http://localhost:3003](http://localhost:3003).

## 📜 Scripts Disponíveis

Abaixo estão os principais comandos disponíveis para gerenciar o frontend da aplicação:

| Comando           | Descrição                                                       |
| ----------------- | --------------------------------------------------------------- |
| `npm run dev`     | Executa o frontend no modo de desenvolvimento.                  |
| `npm run build`   | Constrói o projeto para produção, otimizando os arquivos.       |
| `npm run lint`    | Executa o ESLint para verificar e corrigir problemas no código. |
| `npm run test`    | Executa os testes unitários usando o Jest.                      |
| `npm run preview` | Serve a aplicação já construída para pré-visualização.          |

## 🧪 Rodando os Testes

Para garantir a qualidade do código, todos os testes unitários foram implementados. Para rodar os testes:

1. No diretório `frontend`, execute:

   ```bash
   npm run test
   ```

Isso executará o **Jest**, que é responsável por verificar se todas as funcionalidades estão funcionando corretamente.

## 💻 Tecnologias Utilizadas

- **React.js**: Biblioteca JavaScript para construção da interface do usuário.
- **Tailwind CSS**: Framework de CSS para estilização rápida e eficiente.
- **Daisy UI**: Extensão do Tailwind CSS que facilita a criação de componentes de UI com estilos prontos.
- **Jest**: Ferramenta para testes unitários, garantindo a qualidade e a robustez do código.
- **ESLint**: Ferramenta para garantir a qualidade e consistência do código.
