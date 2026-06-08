/* =============================================
   LEONARDO SOUSA — PORTFOLIO SCRIPT
   ============================================= */

/* === 1. TEMA ESCURO / CLARO === */
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Carrega tema salvo (ou padrão: escuro)
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
body.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = body.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
});

/* === 2. NAV SCROLL EFFECT === */
const nav = document.getElementById('nav');

function updateNav() {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* === 3. MENU MOBILE === */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  // Previne scroll do body enquanto menu está aberto
  body.style.overflow = isOpen ? 'hidden' : '';
});

// Fecha o menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  });
});

/* === 4. REVEAL ON SCROLL === */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay para grupos de elementos
        const siblings = Array.from(entry.target.parentElement?.querySelectorAll('.reveal') || []);
        const index = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${Math.min(index * 0.08, 0.4)}s`;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* === 5. ANIMAÇÃO DAS SKILL BARS === */
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.skill-fill');
        fills.forEach(fill => {
          const pct = fill.getAttribute('data-fill') || '0';
          // Pequeno delay para garantir que a animação seja visível
          setTimeout(() => {
            fill.style.width = pct + '%';
          }, 200);
        });
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('.skill-group').forEach(group => skillObserver.observe(group));

/* === 6. BACK TO TOP === */
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backTop.removeAttribute('hidden');
  } else {
    backTop.setAttribute('hidden', '');
  }
}, { passive: true });

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* === 7. MODAL — ESTUDOS DE CASO === */
const caseData = [
  {
    icon: '📦',
    title: 'Dashboard Operacional de Logística',
    tags: ['Power BI', 'SQL', 'Excel', 'KPIs', 'ETL'],
    sections: [
      {
        title: 'Contexto',
        text: 'Durante atuação na Total Express, percebi que a equipe operacional não tinha visibilidade centralizada sobre os principais indicadores de desempenho. Cada dado estava em uma fonte diferente — planilhas, sistemas e relatórios manuais.'
      },
      {
        title: 'Problema',
        text: 'Ausência de visibilidade centralizada sobre indicadores de desempenho operacional. Gestores tomavam decisões sem dados consolidados, o que levava a atrasos na identificação de gargalos e retrabalho constante.'
      },
      {
        title: 'Solução aplicada',
        text: 'Estruturação de base de dados consolidada via SQL, tratamento e padronização das informações com Python/Excel, e criação de dashboard interativo no Power BI com filtros por região, período, operador e tipo de ocorrência.'
      },
      {
        title: 'Ferramentas e competências',
        text: 'Power BI (DAX, visualizações), SQL (queries de extração e tratamento), Excel (ETL básico), análise de KPIs operacionais como SLA, volume por rota, taxa de entrega e produtividade.'
      },
      {
        title: 'Resultado e aprendizado',
        text: 'Redução do tempo de análise operacional de horas para minutos. Identificação proativa de gargalos de rota e melhoria no acompanhamento do SLA. Principal aprendizado: a clareza visual dos dados muda completamente a qualidade da decisão operacional.'
      }
    ]
  },
  {
    icon: '🐍',
    title: 'Automação de Relatórios com Python',
    tags: ['Python', 'Pandas', 'Automação', 'ETL', 'Dados'],
    sections: [
      {
        title: 'Contexto',
        text: 'Processo semanal de consolidação de dados operacionais exigia trabalho manual intenso: baixar arquivos, copiar dados, formatar colunas, verificar inconsistências. Um processo repetitivo, lento e propenso a erros.'
      },
      {
        title: 'Problema',
        text: 'O tratamento manual de planilhas consumia horas semanais da equipe, havia alto risco de erros humanos na consolidação e a padronização dos dados era inconsistente entre arquivos.'
      },
      {
        title: 'Solução aplicada',
        text: 'Desenvolvimento de pipeline em Python utilizando Pandas para leitura automática de múltiplos arquivos CSV/Excel, limpeza e padronização de colunas, validação de dados nulos/duplicados e exportação automatizada do relatório consolidado final.'
      },
      {
        title: 'Ferramentas e competências',
        text: 'Python (Pandas, os, glob), manipulação de DataFrames, limpeza e validação de dados, exportação para Excel com openpyxl, lógica de automação de fluxos de dados (ETL básico).'
      },
      {
        title: 'Resultado e aprendizado',
        text: 'Eliminação do retrabalho manual e redução de 90% no tempo de geração dos relatórios. Maior confiabilidade e consistência dos dados. Aprendi que automação de processos repetitivos é um dos maiores ganhos que dados podem trazer para operações.'
      }
    ]
  },
  {
    icon: '🗄️',
    title: 'Análise e Mapeamento de Banco de Dados',
    tags: ['SQL', 'BD Relacional', 'ETL', 'Documentação', 'Governança'],
    sections: [
      {
        title: 'Contexto',
        text: 'Durante atuação na Moriá Formatura como Administrador de Banco de Dados, me deparei com um banco relacional em produção sem documentação adequada, com inconsistências de dados acumuladas e dificuldade de manutenção por qualquer membro da equipe que não fosse o criador original.'
      },
      {
        title: 'Problema',
        text: 'Banco de dados sem documentação formal, tabelas com inconsistências e dados duplicados, ausência de padrão de nomenclatura e dificuldade crítica de manutenção e onboarding de novos membros técnicos.'
      },
      {
        title: 'Solução aplicada',
        text: 'Realização de auditoria completa das tabelas e relacionamentos via SQL, normalização de dados inconsistentes, criação de dicionário de dados (nome, tipo, descrição, regras), otimização de queries críticas e documentação dos processos de manutenção.'
      },
      {
        title: 'Ferramentas e competências',
        text: 'SQL (queries de auditoria, UPDATE, normalização), banco de dados relacional, documentação técnica de dados, análise de integridade referencial, governança básica de dados e dicionário de dados.'
      },
      {
        title: 'Resultado e aprendizado',
        text: 'Melhoria na integridade e confiabilidade dos dados, redução de incidentes sistêmicos causados por inconsistências e documentação clara para manutenção futura. Aprendi que dados bem documentados e governados são a base de qualquer operação tecnológica confiável.'
      }
    ]
  }
];

const modal = document.getElementById('caseModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openCase(index) {
  const data = caseData[index];
  if (!data) return;

  const tagsHTML = data.tags.map(t => `<span>${t}</span>`).join('');
  const sectionsHTML = data.sections.map(s => `
    <div class="modal-section">
      <h3>${s.title}</h3>
      <p>${s.text}</p>
    </div>
  `).join('');

  modalBody.innerHTML = `
    <div class="modal-icon">${data.icon}</div>
    <h2 id="modalTitle">${data.title}</h2>
    <div class="modal-tags">${tagsHTML}</div>
    ${sectionsHTML}
  `;

  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeCase() {
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeCase);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeCase();
});

// Fecha com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
    closeCase();
  }
});

// Expõe globalmente para uso no HTML
window.openCase = openCase;

/* === 8. FORMULÁRIO DE CONTATO === */
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name    = contactForm.name.value.trim();
  const email   = contactForm.email.value.trim();
  const assunto = contactForm.assunto.value.trim();
  const msg     = contactForm.mensagem.value.trim();

  // Validação básica
  if (!name || !email || !assunto || !msg) {
    formNote.textContent = '⚠️ Por favor, preencha todos os campos.';
    formNote.style.color = '#ff6b6b';
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formNote.textContent = '⚠️ Insira um e-mail válido.';
    formNote.style.color = '#ff6b6b';
    return;
  }

  // Simulação de envio (substitua por sua integração real: Formspree, EmailJS etc.)
  const submitBtn = contactForm.querySelector('[type="submit"]');
  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;

  setTimeout(() => {
    formNote.textContent = '✅ Mensagem enviada! Entrarei em contato em breve.';
    formNote.style.color = 'var(--accent)';
    contactForm.reset();
    submitBtn.textContent = 'Enviar mensagem →';
    submitBtn.disabled = false;
  }, 1200);
});

/* === 9. ACTIVE NAV LINK (highlight da seção visível) === */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.style.color = 'var(--accent)';
          }
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(sec => sectionObserver.observe(sec));

/* === FIM DO SCRIPT === */
