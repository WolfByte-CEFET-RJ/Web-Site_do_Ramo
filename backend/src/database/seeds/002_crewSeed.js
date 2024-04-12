/* eslint-disable no-mixed-spaces-and-tabs */
const {v4} = require('uuid');

exports.seed = function(knex) {
  
	return knex('crews').del()
		.then(function () {
      
			return knex('crews').insert([
		    {id: '819d4229-0a65-4748-b2e2-9d93bd6a2134', name: 'WIE', about: 'A equipe de afinidade para mulheres na engenharia, o WIE (Women in Engineering), é uma equipe de desenvolvimento de projetos sociais e ações afirmativas para estudantes e profissionais da área de STEM, sigla que consiste em ciências, tecnologia, engenharia e matemática. Os projetos da equipe de afinidade visam o desenvolvimento técnico e pessoal de seus integrantes assim como disseminação de conhecimento e de impacto social positivo a partir do público afetado pelas ações afirmativas. \
        A equipe tem as seguintes áreas de desenvolvimento: \n- Mídias Sociais: na qual os integrantes desenvolvem todo o processo de pesquisa, escrita, edição de imagem e/ou vídeo e gerenciamento de postagens dentro dos temas trabalhados na equipe como necessidade de diversidade no ambiente acadêmico e profissional;\n- Gestão de Eventos: na qual os integrantes definem, planejam, gerenciam e realizam rodas de conversa, debates, palestras e seminários também dentro de nossas temáticas para o público discente do Cefet/RJ; \
        \n- Produtos: em que os voluntários trabalham na elaboração de e venda de produtos do WIE para geração de renda e financiamento de eventuais projetos e eventos;\n- Projetos: equipe na qual os integrantes buscam um público-alvo específico para auxiliar com um projeto social.', imageURL: 'WIE_crew_avatar.svg'},
        
				{id: '01cad4c0-5872-4c3b-b2de-32a775c7abd4', name: 'Gestão', about: 'Nesta área você vivenciará a experiência completa de gestão, desde o planejamento, execução e controle dos projetos, até a análise de riscos e o controle financeiro. Além de que aprenderá a cuidar do controle e acompanhamento de membros, avaliações internas de desempenho além de ajudar parcialmente na gestão envolvida nos Processos Seletivos Externos da Extensão.\
        É a área em que mais se desenvolve as Soft Skills, que incluem empatia, organização, gestão de tempo, otimização de processos, controle de qualidade, solução de conflitos, etc. Além de trabalhar com Hard Skills fundamentais no mercado de trabalho, tal qual o Excel avançado e uso de metodologias como Scrum. A assessoria trabalha com três áreas:\n- Gestão de Projetos: Garante o funcionamento das equipes por meio de metodologias de acompanhamento de atividades, como Kanban e Scrum. A gestão de projetos é responsável pela ativação dos projetos e seu andamento, trabalhando com otimização de processos.\
        \n- Gestão de Pessoas: Busca o bom funcionamento da equipe e garante que o relacionamento entre os membros seja saudável. Inclui a preparação de Planilha Comum de Horários, para marcar reuniões de forma ágil, e a realização de Reuniões de feedback 360, que garantem a aprendizagem evolutiva na equipe.\n- Gestão de Processos: Responsável pela seleção de candidatos e planejamento do Processo Seletivo Externo, garantindo um recrutamento efetivo de novos membros de forma acolhedora. Além de coordenar o Processo Seletivo Interno, que permite aos membros a atuarem em outras equipes do Ramo Estudantil IEEE CEFET/RJ.\
        \n- Gestão Financeira: Responsável pelo caixa das equipes, vistoria o gasto com os projetos e busca meios para garantir mais dinheiro para as equipes, como bolsas, competições e pesquisas patrocinadas. Trabalha com planilhas de gastos e orçamentos de todas 8 equipes do Ramo Estudantil.', imageURL: 'Gestao_crew_avatar.svg'}, 

				{id: '4647eff2-a8ee-43d1-ac3d-0859c395762b', name: 'Marketing', about: 'Equipe responsável pela manutenção e promoção da imagem do Ramo Estudantil para o público interno e externo, atuando com parceiros e patrocinadores, gerenciamento de redes sociais, criação de produtos e realização de eventos.', imageURL: 'Marketing_crew_avatar.svg'},
        
				{id: 'cf8d9d17-c3cc-459a-8d41-c4d7ff455f9d', name: 'RocketWolf', about: 'O núcleo de Engenharia de Foguetes Experimentais do CEFET/RJ - RocketWolf, tem como principal objetivo o desenvolvimento de seus membros através da pesquisa e a prática de foguetes experimentais tendo em vista a participação em festivais, competições, simpósios e workshops. Além disso, tem como finalidade disseminar na Instituição a cultura aeroespacial.\
        Nossa equipe é dividida em 5 subsistemas para o desenvolvimento e confecção dos foguetes e satélites, são elas:\n- Aerodinâmica: Responsável pelo voo do foguete, calcula a trajetória e constrói os mecanismos de controle.\n- Estruturas: Responsável por todas estruturas de suporte (base de lançamento, base de teste estático) pela fuselagem, montagem do foguete e auxilia as demais áreas no desenvolvimento e fabricação dos seus componentes (motor, mecanismo de ejeção, controle de voo) \
        \n- Recuperação: Tem como missão projetar o melhor meio de recuperação (paraquedas ou streamer, são os mais utilizados) e confeccioná-lo, além de ser responsável também pela ejeção deste. É um subsistema de suma importância visto que o foguete deve estar em condições de ser reutilizado após a sua recuperação.\n- Eletrônica: Subsistema responsável por planejar, construir e programar a eletrônica que será utilizada no foguete, para testar parâmetros do mesmo e na comunicação entre o foguete e o solo, através da base de operações. Esse subsistema é dedicado à telemetria e obtenção de dados para análise. \
        \n- Propulsão: Planeja, modela e constrói o motor e combustível do foguete, que são os elementos que determinarão o impulso e apogeu do foguete logo uma parte fundamental.', imageURL: 'RocketWolf_crew_avatar.svg'},
        
				{id: '3549603f-e0f8-4a27-8bff-59841d4e9151', name: 'SocialWolf', about:'A SocialWolf é a equipe de responsabilidade e impacto social do Ramo Estudantil IEEE CEFET/RJ e visa o desenvolvimento pessoal dos membros e desenvolvimento da população externa impactada por nossos projetos. Atualmente, nossos projetos são voltados para duas vertentes:\n- Projetos Educacionais: \
        Eles têm como objetivo levar tecnologia e inovação a sociedade como um todo e independente da idade.\n- Projetos Técnicos: Buscam encontrar uma solução técnica para algum problema que uma comunidade possa estar sofrendo.\n Além disso, a equipe é dividida em quatro subáreas principais: mecânica, programação, eletrônica e educacional. Assim, ao ingressar na equipe, o membro poderá escolher qual(is) projeto(s) ativo(s) tem interesse e gostaria de participar a partir da subárea escolhida na fase de inscrição.', imageURL: 'SocialWolf_crew_avatar.svg'},
        
				{id: '497be258-fd0a-444a-ba8c-86da33d351e1', name: 'WolfBotz', about: 'A WolfBotz é a equipe de robótica, que conta, atualmente, com 3 categorias destinadas a competição:\n- Seguidor de Linha: A equipe trabalha com robôs autônomos que têm o objetivo de seguir o trajeto de uma pista preta com uma linha branca que marca o caminho. Caso o robô saia da linha branca, se considera a volta inválida, tendo por fim 3 tentativas por robô. Vence o robô que completar a pista o mais rápido o possível.\
        \n- Mini Sumô: A equipe trabalha com um robô totalmente autônomo, com limitações de dimensionamento e peso, sendo eles 10x10cm e 500g de massa. Nesta categoria, o objetivo é empurrar o robô adversário para fora do dohyo (arena de luta), simulando o estilo de luta japonesa. \
        \n- Combate: A equipe trabalha com robôs rádio-controlados para luta. Atualmente possuímos 2 robôs na categoria Beetleweight (máx. 1,36kg) e 1 na categoria Fairyweight (máx. 150g). O objetivo desta categoria é derrotar o oponente, causando a maior capacidade de dano ao adversário, sendo decidido por pane de um dos robôs ou por decisão dos juízes. Cada luta tem o tempo de duração de 2 minutos ou até só um dos robôs for incapacitado de continuar.\n As áreas de atuação nos nossos robôs se subdividem em: \
        \nMecânica: Esta área trabalha com o desenvolvimento de todo o sistema mecânico, desde a modelagem 3D a partir de softwares, até a confecção e montagem propriamente dita dos robôs, estando sujeita a desafios de escolha de materiais, adaptação de design e distribuição de peso e espaço.\nEletrônica: Esta área é responsável pelo desenvolvimento de circuitos com o auxílio de softwares e ferramentas, além da montagem de placas e componentes, soldagem e resolução de adversidades;\
        \nProgramação: Esta área funciona como o cérebro do robô, sendo responsável pelo uso das linguagens de programação para a criação e aplicação de estratégias que permitem a competitividade dos robôs, desenvolvendo códigos eficientes e bem estruturados.', imageURL: 'WolfBotz_crew_avatar.svg'},
        
				{id: 'ed7bc852-f922-495f-9455-04cb5262ddf4', name: 'WolfByte', about: 'A WolfByte é a equipe de programação do Ramo Estudantil IEEE CEFET/RJ. Está atualmente dividida em 4 subequipes; são elas:\
        \n- Inteligência Artificial (IA): A equipe que trabalha desenvolvendo IAs visando sempre resolver algum problema da comunidade. Essa equipe tem a princípio, foco na área (programação), salvo alguns projetos que poderão envolver mecânica e eletrônica como secundária. São responsáveis pela implementação e desenvolvimento de toda a lógica da IA.\
        \n- Web/App: Equipe que trabalha desenvolvendo aplicações/sistemas para Web e dispositivos mobile. Dentre os processos do projeto estão: planejamento, prototipagem e desenvolvimento. A equipe é dividida nas seguintes áreas:\n Backend: Responsável pelo desenvolvimento e planejamento do banco de dados, bem como a validação dos dados e das regras de negócios da aplicação. Além disso, nessa área também são realizadas as tarefas de desenvolvimento operacional, tais quais deploy, encapsulamento, controle de pipeline, etc;\
        \nFrontend: Responsável por criar a parte visual das aplicações e suas interações com o usuário, além de manter uma conexão com o backend, também é responsável por criar os protótipos de tela da aplicação e por prover ao usuário a melhor experiência possível utilizando técnicas de UX e UI.\
        \n- Hardware: É uma equipe voltada para a parte eletrônica da WolfByte, e para a progamação aplicada para os eletrônicos. Trabalhamos para atender demandas diversas, sejam para lazer, necessidades especiais, parcerias, etc. A equipe está dividida em 3 áreas, são elas: \
        \nEletrônica: Encarregada de elaborar o estudo e esquema dos componentes eletrônicos, bem como montar fisicamente a parte eletrônica dos projetos;\nMecânica: Responsável por realizar o design e modelagem dos projetos, além de executar tarefas práticas utilizando ferramentas para contruí-los;\nProgramação: Responsável pela criação, implementação e manutenção dos códigos e programas necessários para o funcionamento dos projetos.\
        \n- Games: Equipe focada no desenvolvimento de jogos, sejam eles para dispositivos mobile ou PC. Essa é a equipe mais antiga da WolfByte e, hoje, é a que tem o maior número de membros. Atualmente está dividida em 2 áreas:\nProgramação: Projeta e implementa os sistemas e a física do jogo, bem como trabalha na otimização do mesmo;\nArte e som: Desenvolve a identidade audiovisual do jogo através de concepts, sprites, modelos 3D, animação e trilha sonora.', imageURL: 'WolfByte_crew_avatar.svg'},
        
				{id: '483b3331-84c5-4b49-be25-980309d632a6', name: 'WolfPower', about: 'A WolfPower é a equipe de sustentabilidade, energia e potência do Ramo Estudantil do CEFET-RJ Maracanã vinculado ao capítulo PES (Power and Energy Society) do IEEE. O objetivo principal da equipe é desenvolver projetos que tratam de temáticas relacionadas ao uso de energias limpas, renováveis e tecnologias beneficiadas por essas vertentes, buscando soluções para a atual situação do uso desenfreado de fontes de energias não renováveis e as consequências geradas.\n \
        A equipe oferece vagas nas áreas de:\n- Eletrônica/Programação: Responsável pelo planejamento do projeto eletrônico, prototipagem, execução e manutenção de toda a estrutura eletrônica, além de desenvolvimento do controle do projeto, pela aplicação da lógica e linguagem de programação para microcontroladores;\n- Mecânica: Trabalha na estrutura do projeto, tanto no desenvolvimento em desenho, quanto na montagem e construção da mecânica estrutural;\n- Divulgação: Responsável pela elaboração de projetos de divulgação relacionados a energias renováveis, sustentabilidade e meio ambiente, além da idealização de visitas técnicas, minicursos, workshops, eventos e palestras sobre o assunto.', imageURL: 'WolfPower_crew_avatar.svg'}
			]);
		});
};
