# 🛡️ LICITA SENTINEL — Landing Page Oficial

Landing Page de altíssima conversão para o **Licita Sentinel**, desenvolvida em **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4** e **Prisma ORM**, configurada para conexão direta com o mesmo banco de dados PostgreSQL (Supabase) e pronta para deploy autônomo na Vercel em outra conta.

---

## 🚀 Como Rodar Localmente

1. Abra o terminal na pasta do projeto:
   ```bash
   cd "C:\Users\adam\Documents\Landing pag"
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Gere o cliente do Prisma:
   ```bash
   npx prisma generate
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Acesse no navegador:
   `http://localhost:3000` (ou na porta indicada pelo terminal se a 3000 estiver em uso).

---

## 🌐 Como Fazer o Deploy na Vercel (Nova Conta)

1. Crie um novo repositório no seu GitHub (ex: `licita-sentinel-landing`).
2. Suba o código desta pasta para o repositório:
   ```bash
   git init
   git add .
   git commit -m "feat: landing page licita sentinel"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/licita-sentinel-landing.git
   git push -u origin main
   ```
3. No painel da sua outra conta da **Vercel**:
   - Clique em **"Add New..."** -> **"Project"**.
   - Importe o repositório `licita-sentinel-landing`.
   - Nas **Environment Variables**, adicione:
     - `DATABASE_URL`: A mesma URL do Supabase configurada no app original:
       `postgresql://postgres.semcgemfjoafudkbsgwr:LucasAdam2004%40@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true`
     - `NEXT_PUBLIC_APP_URL`: URL onde seu app principal está hospedado (ex: `https://app.licitasentinel.com.br`).
     - `NEXT_PUBLIC_SITE_URL`: URL deste domínio da landing page (ex: `https://licitasentinel.com.br`).
   - Clique em **Deploy**. O `vercel.json` e o `package.json` já possuem o script de build configurado para executar `prisma generate && next build`.

---

## 🎨 Identidade Visual Corporativa B2B

- **Cores Oficiais**: Dark mode corporativo executivo Navy/Slate profundo (`#0B1120`, `#0F172A`), Azul Corporativo/Precisão (`#2563EB` / `#3B82F6`), Verde Esmeralda WhatsApp (`#10B981`) e detalhes em Slate refinado.
- **Tipografia**: Plus Jakarta Sans e sans-serif moderno corporativo de alta legibilidade, sem fontes mono em interfaces públicas.
- **Foco Comercial**: Proteção jurídica do prazo de 2 horas (Lei 14.133/2021) e alta conversão para empresários e analistas de licitação.
- **Logotipos Oficiais**: Imagens originais em `/public` (`logo-icon.png`, `logo-sentinel.png`, favicons).
- **Planos Oficiais**:
  - **Plano PRO**: R$ 119,90 / mês.
  - **Plano BUSINESS**: R$ 189,90 / mês (destaque "Mais Escolhido").
