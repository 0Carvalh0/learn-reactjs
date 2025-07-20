# Projeto: Catálogo de Filmes (MovieList)

## Este projeto precisa conter

- React com componentes funcionais

- Props (envio de dados entre componentes)

- useState, useEffect, etc.

- Consumo de API (The Movie DB ou OMDb API)

- Listas dinâmicas com .map()

- Filtros (busca, gênero, nota mínima)

- Componentes reutilizáveis

## Estrutura

``` bash
src/
├── components/
│   ├── SearchBar.tsx
│   ├── MovieCard.tsx
│   ├── MovieList.tsx
│   ├── FilterSelect.tsx
├── App.tsx
```

## Funcionalidades

| Funcionalidade                      | Treina...                      |
| ----------------------------------- | ------------------------------ |
| Buscar filmes por nome              | `useState`, `useEffect`, props |
| Exibir cards com pôster e descrição | Props, `.map()`                |
| Filtro por nota ou gênero           | Select controlado, estado      |
| Paginação (opcional)                | `useState` + efeitos           |
| Detalhes ao clicar no filme (extra) | React Router / estado local    |
