# Consumo de API

## Pré-requisitos

- Extensão Live Server instalada

## Instalação e Configuração

1. **Instalar Dependências**:
 - Execute o seguinte comando para instalar as dependências necessárias:  `npm install`J

2. **Banco de Dados**:
- A estrutura do banco de dados está disponível no arquivo `starwars_structure.sql`. Certifique-se de importar essa estrutura antes de iniciar o aplicativo.

3. **Configuração do Ambiente**:
- Crie um arquivo chamado `.env` na raiz do projeto.
- Para ajudá-lo a configurar seu arquivo `.env`, você pode consultar o exemplo fornecido em `.env.example`.

## Iniciando a Aplicação

Após concluir a instalação e configuração conforme descrito acima, siga os passos abaixo para iniciar a aplicação:

1. **Iniciar o Servidor Local**:
   Para iniciar a aplicação, utilize o seguinte comando:

   npm start

> **Nota**: Embora seja possível personalizar a porta no arquivo .env, recomenda-se manter a configuração padrão na porta 4000.

**Rotas**:
- Listar Personagens: GET /characters
- Listar Planetas: GET /planets
- Listar Naves Espaciais: GET /starships
- Listar Filmes: GET /films
- Buscar Filmes: POST /search_film


