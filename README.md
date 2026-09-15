# CV Interativo — Diuel Moura

Projeto de CV interativo / portfólio profissional desenvolvido em HTML, CSS e JavaScript puro, preparado para publicação no GitHub Pages.

## Estrutura

```text
cv_interativo_v2/
├── index.html
├── README.md
└── assets/
    ├── profile.jpg
    └── Diuel_Moura_CV.pdf   # adicione seu PDF aqui
```

## Antes de publicar

1. Abra `index.html` e substitua `SEU_EMAIL_AQUI` pelo seu e-mail real.
2. Coloque seu currículo PDF em `assets/Diuel_Moura_CV.pdf`.
3. Se quiser, troque os links dos projetos em andamento pelos repositórios exatos.
4. Depois que o GitHub Pages estiver online, atualize as meta tags Open Graph no `<head>` usando a URL pública final, especialmente `og:image`.

## Publicar no GitHub Pages

1. Crie um repositório, por exemplo `cv-interativo`.
2. Envie `index.html`, `README.md` e a pasta `assets` para a branch `main`.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde a URL pública do GitHub Pages.

## Recursos da versão atual

- Perfil com foto real.
- Layout responsivo para desktop e celular.
- Alternância PT / EN.
- Abas de Carreira, Cases, Projetos e Skills.
- Cases com modal detalhado em formato desafio → atuação → tecnologias → resultado.
- Projetos concluídos e em andamento.
- Links para LinkedIn, GitHub, e-mail e download do CV em PDF.
- Estrutura sem framework e sem etapa de build.
