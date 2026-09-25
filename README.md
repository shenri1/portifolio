# shmc-porti

Portfólio pessoal de Silas Cerqueira, construído com [Astro](https://astro.build), React, Tailwind CSS e shadcn.

## Stack

- **[Astro](https://astro.build)** — geração estática das páginas
- **[React](https://react.dev)** — ilhas interativas (theme toggle, smooth scroll)
- **[Tailwind CSS v4](https://tailwindcss.com)** + **[shadcn](https://ui.shadcn.com)** — estilização e componentes de UI
- **[Lenis](https://lenis.darkroom.engineering)** — smooth scroll, incluindo navegação por âncoras
- **[MDX](https://mdxjs.com)** + Content Collections — conteúdo dos projetos do portfólio
- **[Phosphor Icons](https://phosphoricons.com)** — ícones
- **TypeScript**

## Pré-requisitos

- [Bun](https://bun.sh) instalado

## Como rodar

```sh
bun install
```

Este projeto usa o servidor de dev do Astro em modo background:

```sh
bun run astro dev --background   # inicia em http://localhost:4321
bun run astro dev status         # verifica se está rodando
bun run astro dev logs           # acompanha os logs
bun run astro dev stop           # encerra o servidor
```

Outros comandos:

| Comando | Ação |
| :-- | :-- |
| `bun run build` | Gera o build de produção em `./dist/` |
| `bun run preview` | Faz preview do build de produção localmente |
| `bun run astro check` | Roda a checagem de tipos do Astro |

## Estrutura do projeto

```text
src/
├── components/
│   ├── layout/       # Navbar, Footer, smooth scroll (Lenis)
│   ├── motion/        # Reveal — animação de entrada ao rolar a página
│   ├── sections/       # Hero, Sobre, Skills, Projetos, Timeline
│   ├── theme/          # Toggle de tema claro/escuro
│   └── ui/             # Componentes shadcn (button, card, dialog)
├── content/
│   └── projects/       # Projetos do portfólio, em MDX
├── layouts/
│   └── Layout.astro    # Layout base (head, tema, smooth scroll)
├── pages/
│   ├── index.astro     # Página inicial
│   └── projetos/[id].astro  # Página de detalhe de cada projeto
└── styles/
    └── global.css       # Tokens de tema (Tailwind + shadcn)
```

## Adicionando um projeto

Crie um novo arquivo `.mdx` em `src/content/projects/`, seguindo o schema definido em [`src/content.config.ts`](src/content.config.ts):

```yaml
---
title: "Nome do projeto"
description: "Resumo curto do que o projeto resolve."
date: 2024-01-15
tags: ["Java", "Spring Boot"]
---

Conteúdo em Markdown/MDX aqui.
```

O card aparece automaticamente na seção de projetos da home, ordenado por data.

## Tema

O tema claro/escuro é persistido em `localStorage` e aplicado via classe `.dark` na tag `<html>`. A troca é animada (~0.65s) através da classe utilitária `.theme-transitioning`, definida em [`src/styles/global.css`](src/styles/global.css).
