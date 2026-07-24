# 🪁 Batata Pipas — Site Institucional

Site moderno, responsivo e com aparência premium para a loja **Batata Pipas**,
construído com **Next.js 14 (App Router)**, **TypeScript**, **TailwindCSS**,
**Framer Motion** e **Lucide React**.

---

## ✨ Funcionalidades

- Hero com fundo animado de "céu" (estrelas + pipas flutuantes)
- Navbar fixa com efeito blur ao rolar
- Catálogo de produtos com filtro por categoria e pedido direto via WhatsApp
- Seção de categorias com ícones
- Sobre, Galeria (com lightbox), Depoimentos (carrossel automático)
- Diferenciais, Números da empresa (contadores animados), Como Comprar
- FAQ em accordion, Contato com mapa incorporado
- Botão flutuante de WhatsApp
- Animações de scroll reveal em todas as seções (Framer Motion)
- SEO: metadados, Open Graph, `sitemap.xml` e `robots.txt` automáticos
- 100% responsivo (mobile, tablet, desktop) e com foco em acessibilidade

---

## 🚀 Rodando localmente

Pré-requisitos: [Node.js 18+](https://nodejs.org) instalado.

```bash
# instalar dependências
npm install

# copiar variáveis de ambiente
cp .env.example .env.local

# rodar em modo desenvolvimento
npm run dev
```

Acesse `http://localhost:3000`.

---

## ⚙️ Configuração rápida

Edite o arquivo `.env.local` (criado a partir de `.env.example`):

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999   # DDI + DDD + número, só dígitos
NEXT_PUBLIC_INSTAGRAM_USER=batatapipas
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/batatapipas
NEXT_PUBLIC_SITE_URL=https://batatapipas.com.br
```

Todo o conteúdo do site (produtos, categorias, depoimentos, perguntas
frequentes, números, endereço e horário de funcionamento) está centralizado
em **`lib/data.ts`** — edite esse arquivo para substituir por dados reais.
Os componentes não precisam ser tocados para trocar textos, preços ou itens.

Para trocar imagens (produtos, galeria, depoimentos), veja o guia em
`public/images/README.md`.

---

## 📁 Estrutura do projeto

```
app/                 # Rotas (App Router), layout raiz, SEO
components/          # Componentes reutilizáveis de cada seção
lib/data.ts          # Conteúdo do site (produtos, categorias, FAQ, etc.)
lib/utils.ts         # Funções utilitárias (formatação de preço, classes)
public/images/       # Imagens do site, organizadas por seção
```

O projeto foi estruturado para expansão futura: `lib/data.ts` pode ser
facilmente substituído por chamadas a uma API/CMS (painel administrativo,
catálogo dinâmico, sistema de pedidos) sem alterar a camada visual.

---

## ☁️ Publicando no GitHub

```bash
git init
git add .
git commit -m "Site Batata Pipas"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/batata-pipas.git
git push -u origin main
```

---

## ▲ Deploy na Vercel

1. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório do GitHub.
2. O framework **Next.js** é detectado automaticamente — não é necessário
   configurar build command nem output directory.
3. Em **Environment Variables**, adicione as mesmas variáveis do `.env.example`:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_INSTAGRAM_USER`
   - `NEXT_PUBLIC_FACEBOOK_URL`
   - `NEXT_PUBLIC_SITE_URL`
4. Clique em **Deploy**.

---

## 🛠️ Tecnologias

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

---

Feito para a **Batata Pipas** — as melhores pipas do Brasil. 🪁
