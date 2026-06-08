# 📋 Guia Rápido — Portfólio Leonardo Sousa

## Estrutura dos arquivos

```
portfolio/
├── index.html    ← estrutura e conteúdo
├── style.css     ← visual e responsividade
├── script.js     ← interatividade e animações
└── GUIA.md       ← este arquivo
```

---

## 🎨 Como alterar as cores

Abra o `style.css` e edite as variáveis no topo (`:root`):

```css
--accent:   #00e5c0;   /* ciano-verde — cor principal de destaque */
--accent-2: #7c5cfc;   /* roxo — cor secundária */
--accent-3: #00b4d8;   /* azul — cor terciária */
```

**Sugestões de paletas alternativas:**
- Azul tech: `--accent: #2979ff;`
- Verde dados: `--accent: #00c853;`
- Roxo analytics: `--accent: #aa00ff;`

---

## ✏️ Como trocar textos

Abra o `index.html` e localize o trecho que deseja editar.

### Título e tagline (Hero)
```html
<!-- Seção #home — procure "hero-title" e "hero-tagline" -->
<h1 class="hero-title">Leonardo<br /><span class="accent">Sousa</span></h1>
<p class="hero-tagline">Transformando experiência operacional em soluções...</p>
```

### Texto "Sobre mim"
```html
<!-- Seção #sobre — procure "sobre-text" -->
<p>Sou Leonardo Sousa...</p>
```

### Contato: e-mail e LinkedIn
```html
<!-- Procure no HTML os comentários "EDITE:" -->
<a href="mailto:SEU@EMAIL.COM">SEU@EMAIL.COM</a>
<a href="https://linkedin.com/in/SEU-LINKEDIN">linkedin.com/in/SEU-LINKEDIN</a>
```

---

## ➕ Como adicionar novos projetos

### 1. No `index.html` — adicione um novo card na seção `#projetos`:

```html
<article class="project-card reveal" tabindex="0">
  <div class="card-header">
    <div class="card-icon">🔢</div>  <!-- emoji do projeto -->
    <div class="card-tags">
      <span>Python</span><span>SQL</span>  <!-- ferramentas usadas -->
    </div>
  </div>
  <h3 class="card-title">Nome do Projeto</h3>
  <p class="card-desc">Descrição breve do projeto...</p>
  <div class="card-case">
    <div class="case-item">
      <strong>Problema</strong>
      <p>Descreva o problema...</p>
    </div>
    <div class="case-item">
      <strong>Solução</strong>
      <p>Descreva a solução...</p>
    </div>
    <div class="case-item">
      <strong>Resultado</strong>
      <p>Descreva o resultado...</p>
    </div>
  </div>
  <!-- Substitua o índice 3 pelo número do seu novo projeto (0, 1, 2, 3...) -->
  <button class="btn btn-card" onclick="openCase(3)">Ver estudo de caso →</button>
</article>
```

### 2. No `script.js` — adicione o estudo de caso completo no array `caseData`:

```javascript
// No final do array caseData, adicione:
{
  icon: '🔢',
  title: 'Nome do Projeto',
  tags: ['Python', 'SQL', 'Pandas'],
  sections: [
    { title: 'Contexto', text: 'Descreva o contexto...' },
    { title: 'Problema', text: 'Descreva o problema...' },
    { title: 'Solução aplicada', text: 'Descreva a solução...' },
    { title: 'Ferramentas e competências', text: 'Liste as ferramentas...' },
    { title: 'Resultado e aprendizado', text: 'Descreva o resultado...' }
  ]
}
```

---

## 🔗 Como inserir links reais

No `index.html`, procure os comentários `<!-- EDITE: -->` e substitua:

```html
<!-- LinkedIn -->
<a href="https://linkedin.com/in/SEU-USUARIO-AQUI" ...>

<!-- GitHub -->
<a href="https://github.com/SEU-USUARIO-AQUI" ...>

<!-- Currículo (link direto para PDF no Google Drive ou similar) -->
<a href="https://drive.google.com/file/d/ID-DO-SEU-PDF/view" ...>

<!-- E-mail -->
<a href="mailto:seu@email.com" ...>
```

---

## 🚀 Como publicar gratuitamente

### Opção 1 — GitHub Pages (recomendado)

1. Crie uma conta em [github.com](https://github.com)
2. Crie um repositório com o nome: `seu-usuario.github.io`
3. Faça upload dos 3 arquivos (`index.html`, `style.css`, `script.js`)
4. Vá em **Settings → Pages → Branch: main → Save**
5. Seu site estará em: `https://seu-usuario.github.io`

### Opção 2 — Netlify (mais fácil, drag & drop)

1. Acesse [netlify.com](https://netlify.com) e crie uma conta gratuita
2. Na dashboard, arraste a pasta com os 3 arquivos para a área de deploy
3. Seu site vai ao ar em segundos com URL aleatória
4. Vá em **Site settings → Domain management** para escolher um domínio personalizado gratuito como `leonardosousa.netlify.app`

---

## 📬 Como ativar o formulário de contato (sem backend)

### Opção A — Formspree (mais simples)

1. Acesse [formspree.io](https://formspree.io) e crie uma conta gratuita
2. Crie um novo formulário e copie o endpoint: `https://formspree.io/f/SEU-ID`
3. No `script.js`, substitua a simulação pelo fetch real:

```javascript
// Substitua o setTimeout por:
fetch('https://formspree.io/f/SEU-ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, assunto, message: msg })
})
.then(res => {
  if (res.ok) {
    formNote.textContent = '✅ Mensagem enviada com sucesso!';
    contactForm.reset();
  }
});
```

### Opção B — EmailJS (envia direto para seu e-mail)

Acesse [emailjs.com](https://emailjs.com) e siga a documentação para integrar com o formulário.

---

## 🔧 Dicas extras

- **Foto de perfil:** substitua o avatar "LS" por uma `<img>` dentro da div `.avatar-inner`
- **Habilidades:** ajuste os valores `data-fill="80"` nas `.skill-fill` (0 a 100)
- **Idioma inglês:** o site usa `lang="pt-BR"` no `<html>` — ideal para SEO em pt-BR
- **Google Analytics:** adicione o script do GA no `<head>` do `index.html`
- **Favicon:** salve um arquivo `favicon.ico` na raiz e adicione `<link rel="icon" href="favicon.ico">` no `<head>`

---

*Portfólio criado para Leonardo Sousa — Sistemas de Informação | Dados | BI | Tecnologia*
