# CV Interativo — Diuel Moura

Currículo interativo e portfólio profissional desenvolvido em HTML, CSS e JavaScript puro, com versões em português e inglês e estrutura preparada para publicação no GitHub Pages.

## Recursos

- Layout responsivo para desktop e celular, com foto de perfil e imagens de fundo.
- Alternância entre português e inglês (PT / EN).
- Apresentação profissional, seção Sobre mim e indicação de disponibilidade.
- Abas de Carreira, Cases, Projetos e Skills.
- Cases com janela de detalhes: desafio, atuação, tecnologias e resultado.
- Cards de projetos com thumbnail, ícone, status, tecnologias e link para o GitHub.
- Links para LinkedIn, GitHub, e-mail e download do currículo em PDF.
- Metadados Open Graph e Twitter Card para prévias ao compartilhar o site.
- Sem framework, instalação de dependências ou etapa de build.

## Estrutura de pastas

```text
CV_Interativo_V2/
├── index.html                        # Estrutura da página e metadados
├── README.md                         # Documentação do projeto
├── css/
│   └── style.css                     # Layout, cores e responsividade
├── js/
│   └── script.js                     # Conteúdo PT/EN e interações
└── assets/
    ├── CV_Diuel_Moura_Atualizado.pdf  # Currículo para download
    ├── foto_de_perfil.jpg            # Foto exibida no perfil
    ├── jogo_da_velha.jpg             # Thumbnail do Jogo da Velha
    ├── desafios_de_logica.jpg        # Thumbnail de desafios (PT)
    ├── linkedin-preview-v3.png       # Prévia social e thumbnail do CV (PT)
    ├── tela_1.jpg                    # Thumbnail do CV (EN)
    ├── plano_de_fundo_v3.jpg         # Fundo da página
    ├── plano_de_fundo_v2.jpg         # Fundo da apresentação (.hero)
    ├── plano_de_fundo.png
    ├── plano_de_fundo_v1.jpg
    ├── plano_de_fundo_v2.png
    ├── capa_perfil.png
    └── capa_perfil_v1.png
```

As imagens sem descrição estão disponíveis em `assets`, mas não são referenciadas atualmente pelo HTML, CSS ou JavaScript. O arquivo local `debug.log` não faz parte dos arquivos necessários ao site.

## Como visualizar localmente

Abra `index.html` no navegador. Não é necessário instalar dependências ou compilar o projeto.

As fontes do Google Fonts e a thumbnail dos desafios na versão em inglês, carregada pelo serviço Open Graph do GitHub, dependem de acesso à internet.

## Onde editar

| Conteúdo | Arquivo / local |
| --- | --- |
| Estrutura da página, contatos e link do PDF | `index.html` |
| Título, descrição, URL pública e prévias de compartilhamento | `<head>` de `index.html` |
| Textos e dados em português e inglês | `content.pt` e `content.en` em `js/script.js` |
| Trajetória, cases, projetos e habilidades | Listas `career`, `cases`, `projects` e `skills` de cada idioma |
| HTML dos cards de projetos | Função `renderProjects()` em `js/script.js` |
| Cores, espaçamentos, fontes e adaptação para celular | `css/style.css` |
| Foto, thumbnails, fundos e currículo | Pasta `assets/` |

### Projetos e thumbnails

Edite a lista `projects` nos dois idiomas em `js/script.js`. Cada projeto define `icon`, `status`, `title`, `desc`, `tags`, `url`, `image` e `linkType`. O valor `linkType: 'code'` faz o link usar o texto de acesso ao código.

- `image` indica o caminho da thumbnail, como `assets/jogo_da_velha.jpg`.
- `imageFit: 'contain'` exibe a imagem inteira com margem interna, como no Jogo da Velha. Sem essa opção, a imagem preenche a área com `object-fit: cover`, podendo sofrer cortes.
- Em `css/style.css`, `.project-visual .icon` controla a posição e a aparência dos ícones. `right` define a distância da borda direita e `bottom` define a distância da base da thumbnail.
- `.project-visual .visual-label` controla o status sobre a imagem; `.status` estiliza o status no corpo do card.

### Currículo em PDF

O botão **Baixar CV (PDF)** aponta para `assets/CV_Diuel_Moura_Atualizado.pdf`. Para atualizar o currículo, substitua esse arquivo. Se mudar o nome, atualize também o `href` do botão em `index.html`.

## Publicação no GitHub Pages

O repositório configurado é `diuelmoura/CV_interativo`, e a URL pública indicada nos metadados é `https://diuelmoura.github.io/CV_interativo/`.

1. Envie `index.html`, `README.md` e as pastas `css/`, `js/` e `assets/` ao repositório, preservando os nomes e caminhos.
2. Configure o GitHub Pages para servir a raiz da branch que contém esses arquivos.
3. Se a URL pública mudar, atualize `canonical`, `og:url`, `og:image`, `og:image:secure_url` e `twitter:image` no `<head>` de `index.html`.
4. Se substituir `assets/linkedin-preview-v3.png` por uma imagem de outro tamanho ou formato, atualize também `og:image:width`, `og:image:height` e `og:image:type`.
5. Após publicar, confira as abas, os idiomas, as thumbnails, os links dos projetos e o download do PDF.
