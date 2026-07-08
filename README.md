# Semi

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2306B6D4.svg?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

SPA de front-end com composição de componentes, layout responsivo e organização por rotas.

## Tecnologias

- React
- JavaScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM

## Funcionalidades

- **Tema Escuro:** Interface com fundo preto, seguindo uma estética moderna e minimalista.
- **Estrutura Baseada em Componentes:** O site foi dividido em componentes reutilizáveis (Header, Hero, Specs, etc.).
- **Layout Responsivo:** Cabeçalho adaptável com menu mobile para uma experiência consistente em diferentes tamanhos de tela.
- **Sistema de Rotas:** Navegação entre a página principal e a página de login sem recarregar a página, utilizando `react-router-dom`.
- **Backgrounds Dinâmicos:** Uso de vídeos em loop como fundo nas seções principais para um maior impacto visual.

## Estrutura de Pastas

```
src/
├── components/     # Componentes reutilizáveis
├── data/           # Dados estáticos (specs, features, navigation)
├── pages/          # Páginas de rotas (Home, Login)
├── assets/         # Imagens e recursos estáticos
├── App.jsx         # Router principal
├── main.jsx        # Entry point
└── index.css       # Estilos globais
```

## Instalação

```bash
git clone https://github.com/caiolucasbittencourt/semi
cd semi
npm install
npm run dev
```

## Scripts Disponíveis

| Script             | Descrição                             |
| ------------------ | ------------------------------------- |
| `npm run dev`      | Inicia o servidor de desenvolvimento  |
| `npm run build`    | Gera build de produção                |
| `npm run preview`  | Visualiza o build localmente          |
| `npm run lint`     | Verifica erros de lint                |
| `npm run lint:fix` | Corrige erros de lint automaticamente |

## Licença

Este projeto está licenciado sob a licença MIT.
