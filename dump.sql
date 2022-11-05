CREATE DATABASE orange_evolution;

CREATE TABLE
    usuarios (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(60) NOT NULL,
        email VARCHAR(60) UNIQUE NOT NULL,
        senha VARCHAR(100) NOT NULL
    );

CREATE TABLE
    admnistrador (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(60) NOT NULL,
        email VARCHAR(60) UNIQUE NOT NULL,
        senha VARCHAR(100) NOT NULL
    );

CREATE TABLE
    cursos (
        id serial primary key,
        nome VARCHAR(60) NOT NULL
    );

CREATE TABLE
    fullstack (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(250) NOT NULL,
        tipo VARCHAR(60) NOT NULL,
        criador VARCHAR(60) NOT NULL,
        duracao VARCHAR(10),
        url VARCHAR(200) NOT NULL,
        curso_id INTEGER NOT NULL,
        FOREIGN KEY (curso_id) REFERENCES cursos (id)
    );

CREATE TABLE
    ux_ui_designer (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(250) NOT NULL,
        tipo VARCHAR(60) NOT NULL,
        criador VARCHAR(60) NOT NULL,
        duracao VARCHAR(10),
        url VARCHAR(200) NOT NULL,
        curso_id INTEGER NOT NULL,
        FOREIGN KEY (curso_id) REFERENCES cursos (id)
    );

CREATE TABLE
    qa (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(250) NOT NULL,
        tipo VARCHAR(60) NOT NULL,
        criador VARCHAR(60) NOT NULL,
        duracao VARCHAR(10),
        url VARCHAR(200) NOT NULL,
        curso_id INTEGER NOT NULL,
        FOREIGN KEY (curso_id) REFERENCES cursos (id)
    );

CREATE TABLE
    inicio(
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(250) NOT NULL,
        tipo VARCHAR(60) NOT NULL,
        criador VARCHAR(60) NOT NULL,
        duracao VARCHAR(10),
        url VARCHAR(200) NOT NULL,
        curso_id INTEGER NOT NULL,
        FOREIGN KEY (curso_id) REFERENCES cursos (id)
    );

CREATE TABLE
    escolha(
        id SERIAL PRIMARY KEY,
        usuario_id INTEGER NOT NULL,
        curso_id INTEGER NOT NULL,
        FOREIGN KEY (usuario_id) REFERENCES usuarios (id),
        FOREIGN KEY (curso_id) REFERENCES cursos (id)
    );

CREATE TABLE
    status(
        id SERIAL PRIMARY KEY,
        status VARCHAR(30) NOT NULL,
        usuario_id INTEGER NOT NULL,
        curso_id INTEGER NOT NULL,
        aula_id INTEGER NOT NULL,
        FOREIGN KEY(usuario_id) REFERENCES usuarios (id),
        FOREIGN KEY (curso_id) REFERENCES cursos (id)
    );

INSERT INTO cursos(nome)
VALUES ('Full Stack'), ('Ux/Ui Designer'), ('QA (Quality Assurance)'), ('Início');

-- TABLE fullstack

INSERT INTO
    fullstack(
        titulo,
        tipo,
        criador,
        duracao,
        url,
        curso_id
    )
VALUES (
        'Dev Júnior',
        'Vídeo',
        'Orange Juice',
        '00:50:29',
        'https://www.youtube.com/watch?v=qZ4ZKJSmf4k',
        1
    ), (
        'Qual a melhor linguagem de programação? | Com Willian da Silva',
        'Vídeo',
        'Orange Juice',
        '00:51:06',
        'https://www.youtube.com/watch?v=zTMvQD5EtJw',
        1
    ), (
        'Habilidades além do código! | Com Mateus Oliveira',
        'Vídeo',
        'Orange Juice',
        '00:45:01',
        'https://www.youtube.com/watch?v=Mmukepu3yRs',
        1
    ), (
        'Dúvidas sobre carreira',
        'Vídeo',
        'Orange Juice',
        '00:57:54',
        'https://www.youtube.com/watch?v=bZQx1oHMbHg',
        1
    ), (
        'Lógica de programação e algoritmos',
        'Curso',
        'Udemy',
        '02:20:00',
        'https://www.udemy.com/course/logica-de-programacao-e-algoritmos-iniciante/',
        1
    ), (
        'Curso de Lógica de Programação',
        'Vídeo',
        'Curso em Vídeo',
        '07:58:07',
        'https://www.youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV',
        1
    ), (
        'Instalar o Linux no Windows com o WSL',
        'Artigo',
        'Microsoft',
        '00:20:00',
        'https://learn.microsoft.com/pt-br/windows/wsl/install',
        1
    ), (
        'Terminal Linux',
        'Curson',
        'Udemy',
        '00:50:00',
        'https://www.udemy.com/course/terminal-de-comandos-linux/',
        1
    ), (
        'Shell Script: Introdução e Como Automatizar Tarefas',
        'Artigo',
        'Alura',
        '00:15:00',
        'https://www.alura.com.br/artigos/automatizando-tarefas-com-shell-script',
        1
    ), (
        'Versionamento com Git',
        'Vídeo',
        'Orange Juice',
        '01:03:15',
        'https://www.youtube.com/watch?v=9k_lIYuRtg8',
        1
    ), (
        'Git e Github para iniciantes',
        'Curso',
        'Udemy',
        '02:05:00',
        'https://www.udemy.com/course/git-e-github-para-iniciantes/',
        1
    ), (
        'Introdução a Bancos de Dados e Linguagem SQL',
        'Curso',
        'Udemy',
        '01:59:00',
        'https://www.udemy.com/course/introducao-a-bancos-de-dados-e-linguagem-sql/',
        1
    ), (
        'Básico HTML, CSS e Javascript',
        'Curso',
        'Udemy',
        '02:11:00',
        'https://www.udemy.com/course/criando-site-html-css-e-javascript/',
        1
    ), (
        'Introdução à linguagem CSS',
        'Curso',
        'Udemy',
        '01:27:00',
        'https://www.udemy.com/course/introducao-a-linguagem-css/',
        1
    ), (
        'Curso de Sass',
        'Curso',
        'Amanda Vilela',
        '01:45:59',
        'https://www.youtube.com/playlist?list=PL97KElaimHeGRtfkksKwxg6IGVZi_cR7J',
        1
    ), (
        'Curso de HTML, CSS e Bootstrap',
        'Curso',
        'Michelli Brito',
        '01:53:23',
        'https://www.youtube.com/playlist?list=PL8iIphQOyG-Cv3auRYoZtbvzJJrsvdMy-',
        1
    ), (
        'Curso de Less',
        'Curso',
        'Cursa',
        '02:44:60',
        'https://www.cursa.com.br/home/course/curso-de-less/189',
        1
    ), (
        'Descomplicando SPA’s',
        'Artigo',
        'Training Center',
        '00:15:00',
        'https://medium.com/trainingcenter/descomplicando-spas-caa8f57bdbf3',
        1
    ), (
        'Single-page application vs. multiple-page application',
        'Artigo',
        'Neoteric',
        '00:5:00',
        'https://medium.com/orangejuicefc/fundamento-iniciais-da-metodologia-%C3%A1gil-a4f3f0a3f025',
        1
    ), (
        'Curso Javascript + 14 Mini-Projetos',
        'Curso',
        'Udemy',
        '04:35:31',
        'https://www.youtube.com/watch?v=i6Oi-YtXnAU',
        1
    ), (
        'Curso de Java',
        'Curso',
        'Curso em Vídeo',
        '11:36:40',
        'https://www.youtube.com/playlist?list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR',
        1
    ), (
        'HTTP: Desmistificando o protocolo da Web',
        'Artigo',
        'Alura',
        '00:45:00',
        'https://www.alura.com.br/artigos/desmistificando-o-protocolo-http-parte-1',
        1
    ), (
        'O que é uma API?',
        'Artigo',
        'AWS',
        '03:00:00',
        'https://aws.amazon.com/pt/what-is/api/',
        1
    ), (
        'Qual é a diferença entre HTTP e HTTPS?',
        'Artigo',
        'Alura',
        '00:15:00',
        'https://www.alura.com.br/artigos/qual-e-diferenca-entre-http-e-https',
        1
    ), (
        'Métodos de requisição do HTTP',
        'Artigo',
        'Alura',
        '00:10:00',
        'https://www.alura.com.br/artigos/metodos-de-requisicao-do-http',
        1
    );

-- TABLE ux_ui_designer

INSERT INTO
    ux_ui_designer(
        titulo,
        tipo,
        criador,
        duracao,
        url,
        curso_id
    )
VALUES (
        'Design',
        'Vídeo',
        'UX Now',
        '00:06:00',
        'https://www.youtube.com/watch?v=zaFEEvHZgjw&feature=youtu.be',
        2
    ), (
        'UX Design',
        'Vídeo',
        'UX Now',
        '00:06:37',
        'https://www.youtube.com/watch?v=WAi6ixIfdd4&feature=youtu.be',
        2
    ), (
        'UX Design',
        'Vídeo',
        'Ux Now',
        '00:08:17',
        'https://www.youtube.com/watch?v=ii_yO_at8Do&feature=youtu.be',
        2
    ), (
        'UX Design',
        'Artigo',
        'Mergo',
        '00:03:00',
        'https://uxdesign.blog.br/don-norman-e-o-termo-ux-6dffb3f8d218',
        2
    ), (
        'UX Design',
        'Apostila',
        'Alura',
        '00:22:00',
        'https://www.alura.com.br/apostila-ux-usabilidade-mobile-web/experiencia',
        2
    ), (
        'UX Design',
        'Live',
        'Orange Juice',
        '01:17:08',
        'https://www.youtube.com/watch?v=qWbaJuJhdX8&feature=youtu.be',
        2
    ), (
        'UX Design',
        'Live',
        'Grupo FCamara',
        '01:23:16',
        'https://www.youtube.com/watch?v=eWAvEOzL3PI',
        2
    ), (
        'UX Design',
        'Live',
        'Orange Juice',
        '01:12:32',
        'https://www.youtube.com/watch?v=12QnyGevxp8',
        2
    ), (
        'UX Research',
        'Live',
        'Grupo FCamara',
        '01:20:30',
        'https://www.youtube.com/watch?v=v6ojU0Wa50Q',
        2
    ), (
        'UX Research',
        'Apostila',
        'Alura',
        '00:30:00',
        'https://www.alura.com.br/apostila-ux-usabilidade-mobile-web/pesquisa',
        2
    ), (
        'UX Research',
        'Vídeo',
        'UX Now',
        '00:06:00',
        'https://www.youtube.com/watch?v=KnFJAhiClnE',
        2
    ), (
        'Design Thinking',
        'Artigo',
        'Orange Juice',
        '00:04:00',
        'https://medium.com/orangejuicefc/design-thinking-uma-abordagem-para-a-sua-vida-3b93ed78b606',
        2
    ), (
        'Design Thinking',
        'Artigo',
        'Orange Juice',
        '00:04:00',
        'https://medium.com/orangejuicefc/vacinar-conhecendo-design-thinking-na-pr%C3%A1tica-87656e0f6e5e',
        2
    ), (
        'Design Thinking',
        'Live',
        'Grupo FCamara',
        '01:00:59',
        'https://www.youtube.com/watch?v=3s9pWGsU02k',
        2
    ), (
        'Benchmarking',
        'Artigo',
        'G4 Educação',
        '00:22:00',
        'https://g4educacao.com/portal/o-que-e-benchmarking/',
        2
    ), (
        'Persona',
        'Vídeo',
        'UX Now',
        '00:09:17',
        'https://www.youtube.com/watch?v=kdUk7DZS6aQ&feature=youtu.be',
        2
    ), (
        'Persona',
        'Vídeo',
        'UX Now',
        '00:04:50',
        'https://www.youtube.com/watch?v=q_NrzJBS7QI',
        2
    ), (
        'Persona',
        'Apostila',
        'Alura',
        '00:00:30',
        'https://www.alura.com.br/apostila-ux-usabilidade-mobile-web/personas#numero-de-personas',
        2
    ), (
        'Mapa de Empatia',
        'Apostila',
        'Alura',
        '00:020:00',
        'https://www.alura.com.br/apostila-ux-usabilidade-mobile-web/personas#mapa-de-empatia',
        2
    ), (
        'Fluxo de Usuário',
        'Artigo',
        'Ateliware',
        '00:05:00',
        'https://ateliware.com/blog/user-flow',
        2
    ), (
        'Fluxo de Usuário',
        'Artigo',
        'Awari',
        '00:20:00',
        'https://awari.com.br/guia-fluxogramas-ux/?utm_source=blog',
        2
    ), (
        'Jornada do Usuário',
        'Artigo',
        'Aela',
        '00:09:00',
        'https://aelaschool.com/designdeinteracao/jornada-do-usuario-e-sua-importancia/',
        2
    ), (
        'Jornada do Usuário',
        'Vídeo',
        'UX Unicórnio',
        '00:40:43',
        'https://www.youtube.com/watch?v=EiroPM-lL-U',
        2
    ), (
        'Storytelling',
        'Artigo',
        'Orange Juice',
        '00:04:00',
        'https://medium.com/orangejuicefc/storytelling-o-que-s%C3%A3o-como-vivem-e-onde-habitam-d3527a6cf142',
        2
    ), (
        'Arquitetura da Informação',
        'Vídeo',
        'UX Now',
        '00:08:42',
        'https://www.youtube.com/watch?v=jAN1330de-s&feature=youtu.be',
        2
    ), (
        'Arquitetura da Informação',
        'Vídeo',
        'UX Now',
        '00:09:34',
        'https://www.youtube.com/watch?v=vmvSMYaV4oE&feature=youtu.be',
        2
    ), (
        'Heurísticas de Nielsen',
        'Artigo',
        'Aela',
        '00:08:00',
        'https://medium.com/aela/10-heur%C3%ADsticas-de-nielsen-dicas-para-melhorar-a-usabilidade-de-sua-interface-35ef86a7fb41',
        2
    ), (
        'Heurísticas de Nielsen',
        'Apostila',
        'Alura',
        '00:12:00',
        'https://www.alura.com.br/apostila-ux-usabilidade-mobile-web/principios#as-dez-heuristicas-de-nielsen',
        2
    ), (
        'Teste de Usabilidade',
        'Live',
        'Grupo FCamara',
        '01:18:55',
        'https://www.youtube.com/watch?v=VMXF3EDXZT8',
        2
    ), (
        'Teste de Usabilidade',
        'Live',
        'Orange Juice',
        '00:31:00',
        'https://www.youtube.com/watch?v=9Bzd_PfKYLk&feature=youtu.be',
        2
    );

-- TABLE qa

INSERT INTO
    qa(
        titulo,
        tipo,
        criador,
        duracao,
        url,
        curso_id
    )
VALUES (
        'Qualidade além dos bugs',
        'Live',
        'Orange Juice',
        '01:04:11',
        'https://www.youtube.com/watch?v=voE1-yUY-Qg&feature=youtu.be',
        3
    ), (
        'Case Avenue',
        'Podcast',
        'Hipsters',
        '00:43:17',
        'https://www.hipsters.tech/case-avenue-testes-e-qualidade-hipsters-ponto-tech-314/',
        3
    ), (
        'Case Itaú',
        'Podcast',
        'Hipsters',
        '00:40:40',
        'https://www.hipsters.tech/qualidade-e-software-no-itau-hipsters-131/',
        3
    ), (
        'Qualidade de Software',
        'Artigo',
        'DEVMEDIA',
        '00:25:00',
        'https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209',
        3
    ), (
        'Qualidade de Software',
        'Artigo',
        'Linha de Código',
        '00:31:36',
        'http://www.linhadecodigo.com.br/artigo/1712/qualidade-qualidade-de-software-e-garantia-da-qualidade-de-software-sao-as-mesmas-coisas.aspx',
        3
    ), (
        'Qualidade de Software',
        'Artigo',
        'Caroli.org',
        '00:17:03',
        'https://caroli.org/o-que-faz-um-qa/',
        3
    ), (
        'Qualidade de Software',
        'Artigo',
        'Neder',
        '00:03:00',
        'https://medium.com/@_gabrielneder/qual-o-papel-do-software-quality-assurance-qa-no-contexto-%C3%A1gil-707d9bd38dca',
        3
    ), (
        'Testes Funcionais e Não Funcionais',
        'Artigo',
        'DEVMEDIA',
        '00:23:14',
        'https://www.devmedia.com.br/testes-funcionais-de-software/23565',
        3
    ), (
        'Testes Funcionais e Não Funcionais',
        'Vídeo',
        'Assert+',
        '00:11:02',
        'https://www.youtube.com/watch?v=YshnAC19nWk',
        3
    ), (
        'Testes Funcionais e Não Funcionais',
        'Vídeo',
        'Julio de Lima',
        '00:45:08',
        'https://www.youtube.com/watch?v=BMeOV1-senE',
        3
    ), (
        'Benefícios e vantagens de QA e automação de testes',
        'Artigo',
        'Testing Company',
        '00:05:34',
        'https://testingcompany.com.br/blog/descubra-a-importancia-e-os-beneficios-que-a-qualidade-de-software-pode-gerar-para-a-sua-empresa',
        3
    ), (
        'Benefícios e vantagens de QA e automação de testes',
        'Artigo',
        'Geek Hunter',
        '00:09:33',
        'https://blog.geekhunter.com.br/as-maiores-vantagens-de-testes-automatizados/',
        3
    ), (
        'BDD',
        'Curso',
        'Treina Web',
        '08:00:00',
        'https://www.treinaweb.com.br/curso/bdd-testes-guiados-por-comportamento-com-behat-php?gclid=CjwKCAjwx7GYBhB7EiwA0d8oexch12kNK-UuwN_c2mimb2k1_XPVZ4JI5dxp4JI0B06dOM4RSTa8ZRoCRHUQAvD_BwE',
        3
    ), (
        'BDD',
        'Live',
        'EBAC',
        '02:21:08',
        'https://ebaconline.com.br/webinars/workshop-qualidade-2021-09-14-15-16',
        3
    ), (
        'Github',
        'Curso',
        'Udemy',
        '02:05:00',
        'https://www.udemy.com/course/git-e-github-para-iniciantes/',
        3
    ), (
        'Github',
        'Curso',
        'Curso em Vídeo',
        '20:00:00',
        'https://www.cursoemvideo.com/curso/curso-de-git-e-github/',
        3
    ), (
        'Github',
        'Curso',
        'Jornada do DEV',
        '01:42:00',
        'https://jornadadodev.com.br/cursos/curso-basico-de-git?utm_source=facebook&utm_campaign=desenvolvimento_web&utm_medium=grupos&utm_content=curso-basico-de-git',
        3
    ), (
        'Tipos de testes e fases',
        'Artigo',
        'Atlassian',
        '00:11:11',
        'https://www.atlassian.com/br/continuous-delivery/software-testing/types-of-software-testing',
        3
    ), (
        'Tipos de testes e fases',
        'Artigo',
        'Alura',
        '00:10:06',
        'https://www.alura.com.br/artigos/tipos-de-testes-principais-por-que-utiliza-los',
        3
    ), (
        'Tipos de testes e fases',
        'Vídeo',
        'Alura',
        '00:15:33',
        'https://www.youtube.com/watch?v=gVJ1Lap-JYA',
        3
    ), (
        'Bugs',
        'Artigo',
        'DEVMEDIA',
        '00:27:47',
        'https://www.devmedia.com.br/gestao-de-defeitos-ferramentas-open-source-e-melhores-praticas-na-gestao-de-defeitos/8036',
        3
    ), (
        'Bugs',
        'Artigo',
        'DEVMEDIA',
        '00:04:37',
        'https://www.devmedia.com.br/gestao-de-defeitos-no-teste-de-software/21940',
        3
    ), (
        'Bugs',
        'Vídeo',
        'Julio de LIma',
        '00:27:13',
        'https://www.youtube.com/watch?v=3X7HwSEJ4Wc',
        3
    ), (
        'Bugs',
        'Live',
        'Julio de LIma',
        '01:11:24',
        'https://www.youtube.com/watch?v=-D69DAipwl8',
        3
    ), (
        'Automação de Testes',
        'Vídeo',
        'Hipsters',
        '00:45:14',
        'https://www.hipsters.tech/testes-automatizados-hipsters-51/',
        3
    ), (
        'Automação de Testes',
        'Curso',
        'Curso em Vídeo',
        '40:00:00',
        'https://www.cursoemvideo.com/curso/curso-de-algoritmo/',
        3
    ), (
        'Automação de Testes',
        'Curso',
        'Curso em Vídeo',
        '40:00:00',
        'https://www.cursoemvideo.com/curso/curso-de-algoritmo/',
        3
    ), (
        'Automação de Testes',
        'Vídeo',
        'Julio de Lima',
        '00:30:41',
        'https://www.youtube.com/watch?v=VvMh3BGlVdw',
        3
    ), (
        'Automação de Testes',
        'Vídeo',
        'Julio de Lima',
        '00:28:51',
        'https://www.youtube.com/watch?v=B4fantyYPl0',
        3
    ), (
        'Automação de Testes',
        'Playlist',
        'Julio de Lima',
        '07:55:28',
        'https://www.youtube.com/watch?v=VqVQ7vHY32o&list=PLf8x7B3nFTl17WeEVj405tHlstiq1kNBX',
        3
    ), (
        'Automação de Testes',
        'Live',
        'Girls Testing',
        '00:34:07',
        'https://www.youtube.com/watch?v=-xWqeLB0i1M',
        3
    ), (
        'Automação de Testes',
        'Curso',
        'Curso em Vídeo',
        '40:00:00',
        'https://www.cursoemvideo.com/curso/javascript/',
        3
    ), (
        'Automação de Testes',
        'Artigo',
        'Serverest',
        '00:02:00',
        'https://serverest.dev/',
        3
    ), (
        'Automação de Testes',
        'Curso',
        'CAcademy',
        '20:00:00',
        'https://www.qacademy.io/home/course/cypress-discovery/1',
        3
    ), (
        'Automação de Testes',
        'Playlist',
        'Agilizei',
        '03:41:07',
        'https://www.youtube.com/watch?v=wIjtX0CPaw0&list=PLnUo-Rbc3jjztMO4K8b-px4NE-630VNKY',
        3
    ), (
        'Automação de Testes',
        'Live',
        'Iterasys',
        '02:49:50',
        'https://www.youtube.com/watch?v=r-Ju-O_miv0',
        3
    ), (
        'Automação de Testes',
        'Playlist',
        'Teasy Tips',
        '01:06:59',
        'https://www.youtube.com/watch?v=SzwAekL9-l0&list=PLrua1dSU7PC1KBRefR9HJTpU81K1jrcXL',
        3
    ), (
        'Automação de Testes',
        'Curso',
        'Jornada DEV',
        '03:49:18',
        'https://jornadadodev.com.br/cursos/curso-completo-de-javascript?utm_source=facebook&utm_campaign=desenvolvimento_web&utm_medium=grupos&utm_content=curso-completo-de-javascript',
        3
    ), (
        'QA no Backend',
        'Vídeo',
        'Orange Juice',
        '01:16:36',
        'https://www.youtube.com/watch?v=aU8r82PTz-k&feature=youtu.be',
        3
    ), (
        'Banco de Dados',
        'Curso',
        'Udemy',
        '01:59:00',
        'https://www.udemy.com/course/introducao-a-bancos-de-dados-e-linguagem-sql/',
        3
    ), (
        'Banco de Dados',
        'Curso',
        'Udemy',
        '03:57:00',
        'https://www.udemy.com/course/curso-sql-completo-desafios-e-muita-pratica/',
        3
    ), (
        'Banco de Dados',
        'Curso',
        'Udemy',
        '00:33:00',
        'https://www.udemy.com/course/aprenda-sql-basico/',
        3
    ), (
        'Banco de Dados',
        'Curso',
        'Jornada DEV',
        '07:01:00',
        'https://jornadadodev.com.br/cursos/curso-de-mongodb?utm_source=facebook&utm_campaign=desenvolvimento_web&utm_medium=grupos&utm_content=curso-de-mongodb',
        3
    ), (
        'Banco de Dados',
        'Curso',
        'Jornada DEV',
        '08:24:47',
        'https://jornadadodev.com.br/cursos/curso-completo-de-mysql?utm_source=facebook&utm_campaign=desenvolvimento_web&utm_medium=grupos&utm_content=curso-completo-de-mysql',
        3
    );

-- TABLE inicio

INSERT INTO
    inicio(
        titulo,
        tipo,
        criador,
        duracao,
        url,
        curso_id
    )
VALUES (
        'Migração de Carreira',
        'Artigo',
        'Orange Juice',
        '00:06:00',
        'https://medium.com/orangejuicefc/guia-definitivo-de-como-migrar-para-ux-design-5-passos-para-virar-um-ux-1675f71796b4',
        4
    ), (
        'Migração de Carreira',
        'Artigo',
        'Orange Juice',
        '00:05:00',
        'https://medium.com/orangejuicefc/design-thinking-e-carreira-como-migrei-de-psicologia-para-ux-design-cb79e8b47df5',
        4
    ), (
        'Migração de Carreira',
        'Artigo',
        'Orange Juice',
        '00:06:00',
        'https://medium.com/orangejuicefc/de-advogada-a-desenvolvedora-um-relato-sobre-minha-migra%C3%A7%C3%A3o-de-carreira-e-dicas-para-quem-pretende-45ad5df833b5',
        4
    ), (
        'Culture Code',
        'Live',
        'Grupo FCamara',
        '01:22:25',
        'https://www.youtube.com/watch?v=n0KH8dQSrv0',
        4
    ), (
        'Product Owner e Scrum Master',
        'Live',
        'Grupo FCamara',
        '01:13:33',
        'https://www.youtube.com/watch?v=_ku7bY5GtIY',
        4
    ), (
        'Product Owner',
        'Artigo',
        'PM3',
        '00:08:00',
        'https://www.cursospm3.com.br/product-owner-o-que-faz-salario-habilidades/',
        4
    ), (
        'Scrum Master',
        'Artigo',
        'Atlassian',
        '00:06:00',
        'https://www.atlassian.com/br/agile/scrum/scrum-master',
        4
    ), (
        'Scrum Master',
        'Artigo',
        'Scrum Alliance',
        '00:05:00',
        'https://resources.scrumalliance.org/Article/day-life-scrum-master',
        4
    ), (
        'Desenvolvimento',
        'Live',
        'Grupo FCamara',
        '01:25:20',
        'https://www.youtube.com/watch?v=N78-5gHLzbE',
        4
    ), (
        'Desenvolvimento',
        'Artigo',
        'Alura',
        '00:05:00',
        'https://www.alura.com.br/artigos/como-se-tornar-um-desenvolvedor-full-stack-no-proximo-ano',
        4
    ), (
        'UX Design',
        'Artigo',
        'Orange Juice',
        '00:04:00',
        'https://medium.com/orangejuicefc/mas-o-que-%C3%A9-ux-330edd9c6887',
        4
    ), (
        'UX Design',
        'Artigo',
        'Alura',
        '00:05:00',
        'https://www.alura.com.br/artigos/ux-e-ui-conheca-as-semelhancas-e-diferencas-entre-ambos',
        4
    ), (
        'UX Design',
        'Live',
        'Grupo FCamara',
        '01:25:58',
        'https://www.youtube.com/watch?v=_RsYz_iKP4k',
        4
    ), (
        'QA',
        'Artigo',
        'Orange Juice',
        '00:04:00',
        'https://medium.com/orangejuicefc/qual-o-papel-do-qa-em-uma-equipe-8e8147be28dd',
        4
    ), (
        'QA',
        'Live',
        'Grupo FCamara',
        '01:23:10',
        'https://www.youtube.com/watch?v=pP5M7lf6JmQ',
        4
    ), (
        'Stakeholder',
        'Glossário',
        'PM3',
        '00:02:00',
        'https://www.cursospm3.com.br/glossario/stakeholder/',
        4
    ), (
        'Liderança',
        'Live',
        'BTG Pactual',
        '00:56:33',
        'https://www.youtube.com/watch?v=b9A34yUvzEc',
        4
    ), (
        'Metodologia Ágil',
        'Vídeo',
        'Orange Juice',
        '00:57:52',
        'https://www.youtube.com/watch?v=TmTupAe14T4',
        4
    ), (
        'Metodologia Ágil',
        'Artigo',
        'Orange Juice',
        '00:5:00',
        'https://medium.com/orangejuicefc/fundamento-iniciais-da-metodologia-%C3%A1gil-a4f3f0a3f025',
        4
    ), (
        'Metodologia Ágil',
        'Vídeo',
        'Orange Juice',
        '00:07:00',
        'https://medium.com/orangejuicefc/manifesto-%C3%A1gil-a-b%C3%ADblia-das-metodologias-%C3%A1geis-1a4ec9f220a',
        4
    ), (
        'Squads',
        'Artigo',
        'Grupo FCamara',
        '00:06:00',
        'https://blog.fcamara.com.br/squads-o-que-e-e-como-funciona/',
        4
    ), (
        'MVP',
        'Artigo',
        'PM3',
        '00:08:00',
        'https://www.cursospm3.com.br/blog/mvp-o-que-e-e-como-construir-um-produto-minimo-viavel/',
        4
    ), (
        'Soft Skill',
        'Artigo',
        'Alura',
        '00:04:00',
        'https://www.alura.com.br/artigos/soft-skills-o-que-sao-e-os-beneficios-de-desenvolve-las',
        4
    ), (
        'Comunicação',
        'Artigo',
        'Orange Juice',
        '00:03:00',
        'https://medium.com/orangejuicefc/aprimorando-a-comunica%C3%A7%C3%A3o-3933cbc886b4',
        4
    ), (
        'Comunicação',
        'Artigo',
        'Orange Juice',
        '00:04:00',
        'https://medium.com/orangejuicefc/por-que-um-programador-deve-desconstruir-a-ideia-de-que-n%C3%A3o-precisa-lidar-com-pessoas-e-como-9974bcebf4a9',
        4
    ), (
        'Comunicação',
        'Artigo',
        'Orange Juice',
        '00:05:00',
        'https://medium.com/orangejuicefc/ux-design-e-comunica%C3%A7%C3%A3o-b32a44ef7e42',
        4
    ), (
        'Trabalho em equipe',
        'Live',
        'Grupo FCamara',
        '00:59:48',
        'https://www.youtube.com/watch?v=gG0zZoj595U&feature=youtu.be',
        4
    ), (
        'Trabalho em equipe',
        'Artigo',
        'Fernanda de Oliveira',
        '00:05:00',
        'https://www.linkedin.com/pulse/poderosa-uni%C3%A3o-entre-design-de-ux-e-desenvolvimento-de-oliveira/?originalSubdomain=pt',
        4
    ), (
        'LGPD',
        'Live',
        'Orange Juice',
        '01:01:31',
        'https://www.youtube.com/watch?v=KKLDwHyQATA&feature=youtu.be',
        4
    );