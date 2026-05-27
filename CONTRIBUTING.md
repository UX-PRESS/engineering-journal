# 🤝 Contributing Guide

> Guia oficial para desenvolvimento e colaboração no Engineering Journal.

---

# 🎯 Objetivo

Este projeto funciona como uma publication técnica colaborativa focada em:

- engenharia,
- operações,
- infraestrutura,
- segurança,
- troubleshooting,
- arquitetura,
- research,
- incident response.

Toda contribuição deve manter:
- qualidade técnica,
- organização,
- clareza,
- padronização.

---

# 🏗️ Stack

| Tecnologia | Uso |
|---|---|
| Next.js | Framework principal |
| TypeScript | Tipagem |
| TailwindCSS | Styling |
| shadcn/ui | Design system |
| MDX | Artigos técnicos |
| React | UI |
| Lucide | Ícones |

---

# 📦 Clonando o Projeto

## Clone

```bash
git clone git@github.com:UX-PRESS/engineering-journal.git
```

---

## Entrar no projeto

```bash
cd engineering-journal
```

---

# 📥 Instalação

## Instalar dependências

```bash
npm install
```

---

# 🚀 Rodando o Projeto

## Ambiente local

```bash
npm run dev
```

Aplicação disponível em:

```text
http://localhost:3000
```

---

# 🧪 Scripts Disponíveis

## Desenvolvimento

```bash
npm run dev
```

---

## Build

```bash
npm run build
```

---

## Lint

```bash
npm run lint
```

---

# 🌿 Git Flow

## Branches

| Branch | Objetivo |
|---|---|
| main | Produção |
| develop | Integração |
| feature/* | Novas funcionalidades |
| fix/* | Correções |
| docs/* | Documentação |
| refactor/* | Refatorações |

---

# 🔄 Workflow de Desenvolvimento

# 1. Atualizar develop

```bash
git checkout develop
git pull origin develop
```

---

# 2. Criar feature branch

```bash
git checkout -b feature/nome-da-feature
```

Exemplo:

```bash
git checkout -b feature/homepage
```

---

# 3. Desenvolver

Rodar:

```bash
npm run dev
```

---

# 4. Validar antes do commit

```bash
npm run lint
npm run build
```

---

# 5. Commit

## Padrão

```bash
type: descrição
```

---

## Exemplos

### Feature

```bash
feat: create homepage hero section
```

---

### Fix

```bash
fix: resolve mobile navigation overflow
```

---

### Docs

```bash
docs: update contribution workflow
```

---

### Refactor

```bash
refactor: simplify article renderer
```

---

### Content

```bash
content: publish project zero-sheet article
```

---

# 6. Push

```bash
git push -u origin feature/nome-da-feature
```

---

# 7. Pull Request

Abrir PR para:

```text
develop
```

---

# 📂 Estrutura do Projeto

```text
src/
│
├── app/
├── components/
│
├── content/
│   ├── incidents/
│   ├── engineering/
│   ├── security/
│   ├── labs/
│   ├── research/
│   └── post-mortems/
│
├── contributors/
├── hooks/
├── lib/
├── styles/
├── types/
└── utils/
```

---

# 🧠 Organização de Conteúdo

# Engineering

Projetos:
- arquitetura,
- produto,
- AWS,
- automação,
- engenharia de sistemas.

---

# Security

Conteúdo relacionado:
- offensive security,
- hardening,
- labs,
- threat analysis,
- observability.

---

# Incidents

Casos reais:
- troubleshooting,
- outages,
- análise operacional,
- post-mortems.

---

# Labs

Homelab:
- Docker,
- Kubernetes,
- pfSense,
- observabilidade,
- automação.

---

# 📚 Padrão de Artigos

## Estrutura Base

```md
---
title:
description:
date:
author:
tags:
category:
---

# Context

# Problem

# Investigation

# Resolution

# Lessons Learned
```

---

# 🎨 UI/UX Guidelines

## Design Principles

- minimalista,
- técnico,
- operacional,
- clean,
- dark-first,
- typography-focused.

---

# Não fazer

❌ visual genérico SaaS  
❌ excesso de gradientes  
❌ componentes exagerados  
❌ poluição visual  

---

# Fazer

✅ foco em leitura  
✅ contraste alto  
✅ hierarchy clara  
✅ spacing consistente  
✅ typography forte  

---

# 🔐 Security Rules

Nunca publicar:

- credenciais,
- tokens,
- IPs reais,
- informações internas,
- dados sensíveis,
- acessos privados.

---

# 📖 Documentação Obrigatória

Todos os colaboradores devem ler:

- README.md
- PROJECT_ROADMAP.md
- PIPELINE.md
- CONTRIBUTING.md

---

# 🏁 Objetivo do Projeto

Construir:
- uma publication técnica moderna,
- um hub colaborativo de engenharia,
- um acervo de troubleshooting real,
- uma plataforma viva de conhecimento operacional.

---

# 🧠 Filosofia

O conteúdo deve nascer de:
- experiência real,
- operação real,
- engenharia aplicada,
- troubleshooting real,
- research prática.

Não de conteúdo genérico reciclado.