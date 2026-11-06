# Site Dr. Otávio Viano · Clínica Viano Saúde

Landing page em **React 18 + Vite 5 + Tailwind CSS 3 + Framer Motion**, com botão flutuante de WhatsApp e mensagem automática.

## Rodar localmente
```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera /dist
```

## WhatsApp
O número e a mensagem ficam em `src/config.js`.
⚠️ **Complete o número** (o Instagram mostra só `5566996469...`) ou defina `VITE_WHATSAPP_NUMBER` nas variáveis de ambiente da Vercel.

## Deploy na Vercel
1. Em vercel.com → *Add New Project* → importe este repositório (framework detectado: Vite).
2. Nome do projeto: `dr-otavio-viano` (gera `https://dr-otavio-viano.vercel.app`).
3. Adicione `VITE_WHATSAPP_NUMBER` em *Settings → Environment Variables*.

Se usar outro domínio, atualize `public/robots.txt` e `public/sitemap.xml`.

## Proposta comercial (PDF)
- PDF pronto: `proposta/Proposta-Site-Dr-Otavio-Viano.pdf`
- Para regenerar com outro link: `SITE_URL=https://seu-link.vercel.app node proposta/gerar-pdf.cjs`
- Textos editáveis em `proposta/proposta.html`; prints em `proposta/img/`.
