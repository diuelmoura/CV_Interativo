// 1. Conteúdo do currículo. Edite os textos e listas aqui.
// pt contém português e en contém inglês; ui guarda os textos dos botões e títulos.
const content = {
  pt: {
    ui: {
      topNote: 'CV Interativo · Portfólio profissional',
      availability: 'Aberto a oportunidades', experienceLine: '4+ anos em P&D de Tecnologia',
      aboutEyebrow: 'Sobre mim', aboutTitle: 'Tecnologia com curiosidade, método e visão de produto.',
      bio: 'Sou desenvolvedor e analista de sistemas com experiência em P&D, desenvolvimento de software e investigação técnica no ecossistema Android e telecom. Gosto de transformar problemas complexos em soluções claras, confiáveis e bem documentadas — sempre aprendendo e compartilhando o que descubro.',
      linkedinBtn: 'LinkedIn', emailBtn: 'E-mail', downloadBtn: 'Baixar CV (PDF)',
      githubProjectsBtn: 'Ver meus projetos no GitHub',
      yearsStat: 'anos em tecnologia', teamsStat: 'times de P&D', casesStat: 'cases em destaque',
      tabCareer: 'Carreira', tabCases: 'Cases', tabProjects: 'Projetos', tabSkills: 'Skills',
      careerTitle: 'Trajetória profissional', careerSubtitle: 'Uma visão rápida da minha formação e das frentes em que atuei.',
      casesTitle: 'Cases reais', casesSubtitle: 'Situações profissionais resumidas em desafio, atuação, tecnologias e resultado.',
      projectsTitle: 'Projetos', projectsSubtitle: 'Projetos concluídos e iniciativas em evolução para demonstrar prática e aprendizado contínuo.',
      skillsTitle: 'Skills & ferramentas', skillsSubtitle: 'Sem porcentagens artificiais: apenas tecnologias e áreas que fazem parte da minha experiência ou prática.',
      skillsNote: 'A profundidade varia por contexto de projeto; em entrevistas, posso detalhar onde e como utilizei cada tecnologia.',
      footerText: 'Obrigado pela visita. Este site também faz parte do meu portfólio.',
      closeBtn: 'Fechar',
      viewCase: 'Ver case',
      viewCode: 'Ver código',
      githubProfile: 'Ver GitHub',
      problem: 'Desafio', action: 'Minha atuação', tech: 'Tecnologias / ferramentas', result: 'Resultado'
    },
    // Trajetória profissional: ano, título, descrição e tecnologias.
    career: [
      {
        year:'2020',
        title:'Bacharelado em Sistemas de Informação',
        desc:'Formação acadêmica que consolidou fundamentos de desenvolvimento de software, análise de sistemas e tecnologia.',
        tags:['Sistemas de Informação','Software','Análise de Sistemas']
      },
      {
        year:'2022–2024',
        title:'Application Team — P&D',
        desc:'Atuação em investigação de issues, reprodução de problemas, análise de logs e desenvolvimento de uma interface que emulava um dispositivo para apoiar cenários sem aparelho físico disponível.',
        tags:['Angular','Node.js','JavaScript','Java / Spring Boot','Android','ADB','Logcat']
      },
      {
        year:'2022–2026',
        title:'Protocol Team — Conectividade / Telecom',
        desc:'Atuação com homologação de novas funcionalidades de telefonia, Trials com operadoras da América Latina, análise de requisitos, validação de protocolos, propagation checklist e suporte a releases de software.',
        tags:['Android','Telecom','IMS','VoLTE','VoWiFi','APN','Logs','Software Release']
      }
    ],
    // Cases: o resumo aparece no card; os demais campos aparecem na janela de detalhes.
    cases: [
      {
        icon:'🔎',
        status:'Application Team',
        title:'Android Issue Investigation',
        summary:'Reprodução de bugs, coleta de evidências e análise técnica para localizar a origem do problema.',
        problem:'Recebíamos ocorrências vindas da fábrica ou de usuários e precisávamos reproduzir o cenário e descobrir em qual camada estava a falha.',
        action:'Eu reproduzia o problema, coletava e analisava CP Crash e Logcat, verificava se a origem estava na aplicação, no framework Android ou no chipset e, quando necessário, direcionava a investigação para o fornecedor responsável.',
        tech:'Android Studio, ADB, Logcat, análise de logs e investigação de runtime.',
        result:'A issue era encaminhada com evidências técnicas mais claras, reduzindo ambiguidades na investigação e permitindo o direcionamento correto para a camada responsável.'
      },
      {
        icon:'⚙️',
        status:'Application Team',
        title:'Setup Wizard Automation',
        summary:'Automação de fluxo pós-boot com sincronização do estado real do Android.',
        problem:'Após o boot, o serviço settings do Android ainda podia não estar disponível. Escrever flags cedo demais causava falha silenciosa na automação do Setup Wizard.',
        action:'Investiguei o comportamento do dispositivo após reset e implementei polling/sleep para aguardar o serviço ficar disponível antes de continuar a execução.',
        tech:'ADB, Android, shell/script, observação de estado em runtime e sincronização com o ciclo de vida do sistema.',
        result:'A automação passou a respeitar o momento correto do sistema, tornando o fluxo de Setup Wizard mais confiável e reproduzível.'
      },
      {
        icon:'📡',
        status:'Protocol Team',
        title:'Telecom Trials & Validation',
        summary:'Condução de Trials e homologação de novas funcionalidades junto a operadoras da América Latina.',
        problem:'Antes da disponibilização ao mercado, novas funcionalidades de telefonia precisavam ser validadas conforme requisitos técnicos de cada operadora.',
        action:'A partir do kickoff e do documento MOSAIC, eu analisava requisitos, identificava dispositivos compatíveis, preparava o plano/caderno de testes, acompanhava a execução com a operadora e analisava os logs gerados.',
        tech:'Chamadas, SMS, IMS, VoLTE, VoWiFi, throughput, download, APN, cobertura, mobilidade e análise de logs/protocolos.',
        result:'O processo apoiava a homologação técnica das features e a formalização das etapas até a conclusão do Trial.'
      },
      {
        icon:'🚀',
        status:'Protocol Team',
        title:'Feature Propagation & Software Release',
        summary:'Validação da propagação de funcionalidades entre diferentes modelos de smartphones.',
        problem:'Após a aprovação de uma feature, era necessário garantir que as alterações fossem incorporadas e replicadas corretamente entre variantes de dispositivos.',
        action:'Analisei requisitos, validei implementação no código-fonte, executei o Propagation Checklist e identifiquei inconsistências antes da liberação.',
        tech:'Análise de requisitos, código-fonte, checklist de propagação, validação de software, release e atualização de OS Version.',
        result:'As alterações eram preparadas para distribuição de forma consistente por meio de nova Software Release ou atualização de sistema.'
      }
    ],
    // Projetos: url é o destino do link; linkType escolhe o texto do botão.
    projects: [
      {
        icon:'❌⭕', status:'Finalizado', title:'Jogo da Velha',
        desc:'Projeto concluído e publicado no GitHub como parte do meu portfólio de desenvolvimento.',
        tags:['Projeto pessoal','GitHub'],
        url:'https://github.com/diuelmoura/Jogo_da_Velha', image:'assets/jogo_da_velha.jpg', imageFit:'contain', linkType:'code'
      },
      {
        icon:'🧑‍💻', status:'Em evolução', title:'CV Interativo',
        desc:'A própria página que você está visitando: um currículo web responsivo, bilíngue e pensado para compartilhamento direto pelo LinkedIn e GitHub Pages.',
        tags:['HTML','CSS','JavaScript','Responsive','GitHub Pages'],
        url:'https://github.com/diuelmoura/CV_interativo', image:'assets/linkedin-preview-v3.png', linkType:'code'
      },
      {
        icon:'🧠', status:'Em andamento', title:'Desafios de lógica e Live Coding',
        desc:'Coleção em evolução de exercícios de algoritmos e estruturas de dados para prática de entrevistas técnicas.',
        tags:['Java','Algorithms','Big-O','GitHub'],
        url:'https://github.com/diuelmoura/Desafios_Live_Code', image:'assets/desafios_de_logica.jpg', linkType:'code'
      }
    ],
    // Habilidades organizadas por grupo.
    skills: [
      {group:'Desenvolvimento', items:['JavaScript','Angular','Node.js','Java','C','C++','HTML','CSS']},
      {group:'Android & Debug', items:['Android Studio','ADB','Logcat','CP Crash','Runtime Investigation']},
      {group:'Backend & Integração', items:['Spring Boot','REST APIs','Git','GitHub','CI/CD']},
      {group:'Telecom & Produto', items:['IMS','VoLTE','VoWiFi','APN','Trials','Test Plans','Software Release']},
      {group:'Forma de trabalho', items:['Scrum','Kanban','Code Review','Análise de Requisitos','Testes','Documentação']}
    ]
  },

  // Versão em inglês: mantém as mesmas chaves da versão em português.
  en: {
    ui: {
      topNote: 'Interactive CV · Professional Portfolio',
      availability: 'Available for opportunities', experienceLine: '4+ years in Technology R&D',
      aboutEyebrow: 'About me', aboutTitle: 'Technology with curiosity, method, and product thinking.',
      bio: 'I am a software developer and systems analyst with experience in R&D, software development, and technical investigation across Android and telecom. I enjoy turning complex problems into clear, reliable, well-documented solutions — while continuously learning and sharing what I discover.',
      linkedinBtn: 'LinkedIn', emailBtn: 'Email', downloadBtn: 'Download CV (PDF)',
      githubProjectsBtn: 'View my GitHub projects',
      yearsStat: 'years in technology', teamsStat: 'R&D teams', casesStat: 'featured cases',
      tabCareer: 'Career', tabCases: 'Cases', tabProjects: 'Projects', tabSkills: 'Skills',
      careerTitle: 'Professional journey', careerSubtitle: 'A quick view of my education and the areas where I have worked.',
      casesTitle: 'Real-world cases', casesSubtitle: 'Professional situations summarized by challenge, contribution, tools, and outcome.',
      projectsTitle: 'Projects', projectsSubtitle: 'Completed projects and ongoing initiatives that demonstrate hands-on practice and continuous learning.',
      skillsTitle: 'Skills & tools', skillsSubtitle: 'No artificial percentages: only technologies and areas that are part of my experience or hands-on practice.',
      skillsNote: 'Depth varies by project context; during interviews I can explain where and how I used each technology.',
      footerText: 'Thanks for visiting. This website is also part of my portfolio.',
      closeBtn: 'Close',
      viewCase: 'View case',
      viewCode: 'View code',
      githubProfile: 'View GitHub',
      problem: 'Challenge', action: 'My contribution', tech: 'Technologies / tools', result: 'Outcome'
    },
    career: [
      {
        year:'2022',
        title:'B.Sc. in Information Systems',
        desc:'Academic background that strengthened my foundations in software development, systems analysis, and technology.',
        tags:['Information Systems','Software','Systems Analysis']
      },
      {
        year:'2022–2024',
        title:'Application Team — R&D',
        desc:'Worked on issue investigation, problem reproduction, log analysis, and development of an interface that emulated a device to support scenarios when a physical handset was unavailable.',
        tags:['Angular','Node.js','JavaScript','Java / Spring Boot','Android','ADB','Logcat']
      },
      {
        year:'2022–2026',
        title:'Protocol Team — Connectivity / Telecom',
        desc:'Worked with homologation of new telecom features, operator Trials across Latin America, requirements analysis, protocol validation, propagation checklists, and software release support.',
        tags:['Android','Telecom','IMS','VoLTE','VoWiFi','APN','Logs','Software Release']
      }
    ],
    cases: [
      {
        icon:'🔎', status:'Application Team', title:'Android Issue Investigation',
        summary:'Bug reproduction, evidence collection, and technical analysis to identify the origin of issues.',
        problem:'We received issues reported by the factory or users and needed to reproduce the scenario and determine which layer was responsible for the failure.',
        action:'I reproduced the issue, collected and analyzed CP Crash and Logcat data, checked whether the source was the application, Android framework, or chipset, and escalated to the responsible vendor when necessary.',
        tech:'Android Studio, ADB, Logcat, log analysis, and runtime investigation.',
        result:'Issues were routed with clearer technical evidence, reducing ambiguity and helping direct the investigation to the correct layer.'
      },
      {
        icon:'⚙️', status:'Application Team', title:'Setup Wizard Automation',
        summary:'Post-boot flow automation synchronized with the real Android runtime state.',
        problem:'Right after boot, the Android settings service might not yet be available. Writing flags too early caused silent failures in the Setup Wizard automation.',
        action:'I investigated the device state after reset and implemented polling/sleep logic to wait until the service became available before proceeding.',
        tech:'ADB, Android, shell/script, runtime state observation, and system lifecycle synchronization.',
        result:'The automation started respecting the correct system timing, making the Setup Wizard flow more reliable and reproducible.'
      },
      {
        icon:'📡', status:'Protocol Team', title:'Telecom Trials & Validation',
        summary:'Trials and homologation of new telecom capabilities with Latin American operators.',
        problem:'Before market release, new telecom features had to be validated against the technical requirements of each operator.',
        action:'Starting from the kickoff and MOSAIC document, I analyzed requirements, identified compatible devices, prepared the test plan, followed execution with the operator, and reviewed the generated logs.',
        tech:'Voice calls, SMS, IMS, VoLTE, VoWiFi, throughput, downloads, APN, coverage, mobility, and protocol/log analysis.',
        result:'The process supported technical homologation of features and formal completion of each Trial stage.'
      },
      {
        icon:'🚀', status:'Protocol Team', title:'Feature Propagation & Software Release',
        summary:'Validation of feature propagation across different smartphone models and variants.',
        problem:'After a feature was approved, changes had to be incorporated and correctly replicated across multiple device variants.',
        action:'I analyzed requirements, validated source-code implementation, executed the Propagation Checklist, and identified inconsistencies before release.',
        tech:'Requirements analysis, source code, propagation checklist, software validation, release, and OS version updates.',
        result:'Changes were prepared for consistent distribution through a new Software Release or operating system update.'
      }
    ],
    projects: [
      {
        icon:'❌⭕', status:'Completed', title:'Tic-Tac-Toe',
        desc:'Completed project published on GitHub as part of my development portfolio.',
        tags:['Personal project','GitHub'],
        url:'https://github.com/diuelmoura/Jogo_da_Velha', image:'assets/jogo_da_velha.jpg', imageFit:'contain', linkType:'code'
      },
      {
        icon:'🧑‍💻', status:'Evolving', title:'Interactive CV',
        desc:'The page you are visiting: a responsive, bilingual web CV designed for direct sharing through LinkedIn and GitHub Pages.',
        tags:['HTML','CSS','JavaScript','Responsive','GitHub Pages'],
        url:'https://github.com/diuelmoura/CV_interativo', image:'assets/tela_1.jpg', linkType:'code'
      },
      {
        icon:'🧠', status:'In progress', title:'Logic & Live Coding Challenges',
        desc:'An evolving collection of algorithms and data-structure exercises for technical interview practice.',
        tags:['Java','Algorithms','Big-O','GitHub'],
        url:'https://github.com/diuelmoura/Desafios_Live_Code', image:'https://opengraph.githubassets.com/1/diuelmoura/Desafios_Live_Code', linkType:'code'
      }
    ],
    skills: [
      {group:'Development', items:['JavaScript','Angular','Node.js','Java','C','C++','HTML','CSS']},
      {group:'Android & Debug', items:['Android Studio','ADB','Logcat','CP Crash','Runtime Investigation']},
      {group:'Backend & Integration', items:['Spring Boot','REST APIs','Git','GitHub','CI/CD']},
      {group:'Telecom & Product', items:['IMS','VoLTE','VoWiFi','APN','Trials','Test Plans','Software Release']},
      {group:'Ways of working', items:['Scrum','Kanban','Code Review','Requirements Analysis','Testing','Documentation']}
    ]
  }
};

// 2. Estado da página: o idioma inicial é português.
let currentLang = 'pt';

// Guarda referências aos elementos do HTML usados para trocar abas e abrir a janela de detalhes.
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const overlay = document.getElementById('modalOverlay');
const modalStatus = document.getElementById('modalStatus');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

// 3. Tradução: procura elementos com data-i18n e usa a chave para encontrar o texto em ui.
function applyTranslations(){
  const ui = content[currentLang].ui;
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (ui[key]) el.textContent = ui[key];
  });
  document.title = currentLang === 'pt'
    ? 'Diuel Moura — CV Interativo'
    : 'Diuel Moura — Interactive CV';
}

// 4. Monta a linha do tempo. map transforma cada registro em HTML; join junta os trechos.
// Os dados usados em innerHTML são os textos definidos neste arquivo.
function renderCareer(){
  const wrap = document.getElementById('careerTimeline');
  wrap.innerHTML = content[currentLang].career.map(item => `
    <article class="timeline-item">
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="timeline-year">${item.year}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <div class="mini-tags">${item.tags.map(tag => `<span class="mini-tag">${tag}</span>`).join('')}</div>
    </article>
  `).join('');
}

// Monta os cards de cases. data-case-index guarda a posição do case na lista.
function renderCases(){
  const ui = content[currentLang].ui;
  const wrap = document.getElementById('caseGrid');
  wrap.innerHTML = content[currentLang].cases.map((item,index) => `
    <button class="card-button" type="button" data-case-index="${index}">
      <div class="visual">
        <span class="icon" aria-hidden="true">${item.icon}</span>
        <span class="visual-label">${ui.viewCase}</span>
      </div>
      <div class="card-body">
        <span class="status">${item.status}</span>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
      </div>
    </button>
  `).join('');

  // Liga o clique aos cards depois de criá-los; isso também ocorre ao trocar o idioma.
  wrap.querySelectorAll('[data-case-index]').forEach(btn => {
    btn.addEventListener('click', () => openCase(Number(btn.dataset.caseIndex)));
  });
}

// Monta os projetos e escolhe o texto do link de acordo com linkType.
function renderProjects(){
  const ui = content[currentLang].ui;
  const wrap = document.getElementById('projectGrid');
  wrap.innerHTML = content[currentLang].projects.map(item => {
    const linkText = item.linkType === 'code' ? ui.viewCode : ui.githubProfile;
    return `
      <article class="project-card">
        <div class="visual project-visual${item.imageFit === 'contain' ? ' project-visual--contain' : ''}">
          <img src="${item.image}" alt="Prévia do projeto ${item.title}" loading="lazy">
          <span class="icon" aria-hidden="true">${item.icon}</span>
          <span class="visual-label">${item.status}</span>
        </div>
        <div class="card-body">
          <span class="status">${item.status}</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <div class="mini-tags">${item.tags.map(tag => `<span class="mini-tag">${tag}</span>`).join('')}</div>
          <div class="project-actions">
            <a class="project-link" href="${item.url}" target="_blank" rel="noreferrer">${linkText} ↗</a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Monta cada grupo de habilidades e suas etiquetas.
function renderSkills(){
  const wrap = document.getElementById('skillGroups');
  wrap.innerHTML = content[currentLang].skills.map(group => `
    <section class="skill-group">
      <h3>${group.group}</h3>
      <div class="skill-list">${group.items.map(item => `<span class="skill-chip">${item}</span>`).join('')}</div>
    </section>
  `).join('');
}

// 5. Preenche e abre a janela do case escolhido. O foco vai para o botão Fechar.
function openCase(index){
  const ui = content[currentLang].ui;
  const item = content[currentLang].cases[index];
  modalStatus.textContent = item.status;
  modalTitle.textContent = item.title;
  modalBody.innerHTML = `
    <div class="case-block"><h4>${ui.problem}</h4><p>${item.problem}</p></div>
    <div class="case-block"><h4>${ui.action}</h4><p>${item.action}</p></div>
    <div class="case-block"><h4>${ui.tech}</h4><p>${item.tech}</p></div>
    <div class="case-block"><h4>${ui.result}</h4><p>${item.result}</p></div>
  `;
  overlay.classList.add('open');
  modalClose.focus();
}

// Remove a classe open; o CSS volta a ocultar a janela.
function closeModal() {
  overlay.classList.remove('open');
}

// Atualiza todos os textos e listas usando o idioma atual.
function renderAll(){
  applyTranslations();
  renderCareer();
  renderCases();
  renderProjects();
  renderSkills();
}

// 6. Eventos: ao escolher um idioma, atualiza o botão ativo e renderiza o conteúdo novamente.
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b === btn));
    renderAll();
  });
});

// Ao clicar em uma aba, oculta o painel anterior e exibe o painel correspondente.
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('panel-' + tab.dataset.tab).classList.add('active');
  });
});

// Fecha a janela pelo botão, pelo clique fora dela ou pela tecla Escape.
modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', event => {
  if (event.target === overlay) {
    closeModal();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// 7. Inicialização: preenche a página assim que este arquivo é carregado.
renderAll();
