const obras = [
    {
        id: 1,
        titulo: "A Outra Face",
        descricao: "A Outra Face, de Sidney Sheldon, é um thriller psicológico que explora a complexidade das relações humanas e os dilemas morais em tempos de guerra e preconceito. A trama gira em torno do Dr. Judd Stevens, um psiquiatra renomado cuja vida vira de cabeça para baixo quando dois de seus pacientes são brutalmente assassinados. Suspeito de estar envolvido nos crimes, Judd precisa usar toda sua habilidade e conhecimento para provar sua inocência, enquanto tenta desvendar quem está por trás dos assassinatos. Sheldon cria uma narrativa cheia de suspense e reviravoltas inesperadas, mantendo o leitor em constante estado de alerta. Através dos olhos de Judd, somos levados a questionar a verdadeira natureza do bem e do mal, e a entender como o passado pode influenciar nossas ações presentes. O livro também explora temas como traição, vingança e redenção, oferecendo uma visão intrigante da psique humana. Com personagens complexos e uma trama bem amarrada, 'A Outra Face' é um exemplo brilhante da habilidade de Sheldon em criar histórias envolventes e emocionantes.",
        ano: 1970,
        imagem: "imgs/A outra face.jpg"
    },
    {
        id: 2,
        titulo: "O Outro Lado da Meia Noite",
        descricao: "Prepare-se para uma jornada emocionante e cheia de reviravoltas com O Outro Lado da Meia-noite, um dos livros mais aclamados do mestre do suspense Sidney Sheldon. Nesta história envolvente, você será transportado para um mundo de glamour, mistério e paixão, onde nada é o que parece. A Trama gira em torno de Catherine Douglas, uma jovem e talentosa atriz que está prestes a alcançar o estrelato em Hollywood. No entanto, seu mundo vira de cabeça para baixo quando ela se envolve em um acidente de carro que a deixa com o rosto desfigurado. Desesperada para recuperar sua beleza, Catherine recorre a um cirurgião plástico que lhe dá uma nova face, mas a um preço alto.",
        ano: 1973,
        imagem: "imgs/O outro lado da meia noite.jpg"
    },
    {
        id: 3,
        titulo: "Um Estranho no Espelho",
        descricao: "Em 'Um Estranho no Espelho', Sidney Sheldon nos leva a uma jornada fascinante através da vida de Dr. Judd Stevens, um renomado psiquiatra cuja carreira brilhante é abalada por uma série de eventos trágicos. A história começa com o assassinato de dois de seus pacientes, o que coloca Judd sob suspeita. Determinado a provar sua inocência, ele embarca em uma investigação que o leva a confrontar segredos sombrios do passado e a enfrentar perigos inesperados. Com uma narrativa cheia de suspense e reviravoltas, Sheldon explora temas profundos como a natureza do bem e do mal, a complexidade das relações humanas e os dilemas morais enfrentados em tempos de crise. 'Um Estranho no Espelho' é uma leitura envolvente que mantém o leitor na ponta da cadeira até a última página.",
        ano: 1976,
        imagem: "imgs/Um estranho no espelho.jpg"
    },
    {
        id: 4,
        titulo: "A Herdeira",
        descricao: "Em 'A Herdeira', Sidney Sheldon nos apresenta a história de Tracy Whitney, uma jovem mulher cuja vida é virada de cabeça para baixo quando seu noivo a abandona e ela é injustamente presa por um crime que não cometeu. Determinada a se vingar daqueles que a traíram, Tracy usa sua inteligência e habilidades para se reinventar como uma mestre do disfarce e do engano. A trama se desenrola em um cenário de luxo e intriga, onde Tracy enfrenta desafios perigosos enquanto busca justiça e redenção. Com reviravoltas surpreendentes e personagens complexos, 'A Herdeira' é uma leitura emocionante que explora temas de amor, traição e a luta pela sobrevivência em um mundo implacável.",
        ano: 1977,
        imagem: "imgs/A herdeira.jpg"
    },
    {
        id: 5,
        titulo: "A Ira dos Anjos",
        descricao: "Em 'A Ira dos Anjos', Sidney Sheldon nos leva a uma jornada emocionante através da vida de Jennifer Parker, uma jovem advogada ambiciosa que sonha em conquistar o sucesso profissional. No entanto, sua vida muda drasticamente quando ela se envolve em um caso complexo que a coloca contra poderosos inimigos. À medida que Jennifer luta para provar sua inocência e proteger aqueles que ama, ela descobre segredos sombrios e traições inesperadas. Com uma narrativa cheia de suspense, reviravoltas e personagens cativantes, 'A Ira dos Anjos' é uma leitura envolvente que explora temas de justiça, coragem e redenção.",
        ano: 1982,
        imagem: "imgs/A ira dos anjos.jpg"
    },    
    {
        id: 6,
        titulo: "O Reverso da Medalha",
        descricao: "Em 'O Reverso da Medalha', Sidney Sheldon nos apresenta a história de David Kenyon, um jovem e talentoso advogado que vê sua vida mudar drasticamente quando é acusado de um crime que não cometeu. Determinado a provar sua inocência, David embarca em uma jornada perigosa que o leva a confrontar poderosos inimigos e desvendar segredos sombrios. Com uma narrativa cheia de suspense, reviravoltas e personagens complexos, 'O Reverso da Medalha' é uma leitura envolvente que explora temas de justiça, coragem e redenção.",
        ano: 1982,
        imagem: "imgs/O reverso da medalha.jpg"
    },
    {
        id: 7,
        titulo: "Se Houver Amanhã",
        descricao: "Em 'Se Houver Amanhã', Sidney Sheldon nos leva a uma jornada emocionante através da vida de Tracy Whitney, uma jovem mulher cuja vida é virada de cabeça para baixo quando seu noivo a abandona e ela é injustamente presa por um crime que não cometeu. Determinada a se vingar daqueles que a traíram, Tracy usa sua inteligência e habilidades para se reinventar como uma mestre do disfarce e do engano. A trama se desenrola em um cenário de luxo e intriga, onde Tracy enfrenta desafios perigosos enquanto busca justiça e redenção. Com reviravoltas surpreendentes e personagens complexos, 'Se Houver Amanhã' é uma leitura emocionante que explora temas de amor, traição e a luta pela sobrevivência em um mundo implacável.",
        ano: 1985,
        imagem: "imgs/Se houver amanha.jpg"
    },
    {
        id: 8,
        titulo: "As Areias do Tempo",
        descricao: "Em 'As Areias do Tempo', Sidney Sheldon nos apresenta a história de David Kenyon, um jovem e talentoso advogado que vê sua vida mudar drasticamente quando é acusado de um crime que não cometeu. Determinado a provar sua inocência, David embarca em uma jornada perigosa que o leva a confrontar poderosos inimigos e desvendar segredos sombrios. Com uma narrativa cheia de suspense, reviravoltas e personagens complexos, 'As Areias do Tempo' é uma leitura envolvente que explora temas de justiça, coragem e redenção.",
        ano: 1988,
        imagem: "imgs/As areias do tempo.jpg"
    },
    {
        id: 9,
        titulo: "Lembranças da Meia-Noite",
        descricao: "Em 'Lembranças da Meia-Noite', Sidney Sheldon nos leva a uma jornada emocionante através da vida de Jennifer Parker, uma jovem advogada ambiciosa que sonha em conquistar o sucesso profissional. No entanto, sua vida muda drasticamente quando ela se envolve em um caso complexo que a coloca contra poderosos inimigos. À medida que Jennifer luta para provar sua inocência e proteger aqueles que ama, ela descobre segredos sombrios e traições inesperadas. Com uma narrativa cheia de suspense, reviravoltas e personagens cativantes, 'Lembranças da Meia-Noite' é uma leitura envolvente que explora temas de justiça, coragem e redenção.",
        ano: 1990,
        imagem: "imgs/lembranças da meia noite.jpg"
    },
    {
        id: 10,
        titulo: "Juízo Final",
        descricao: "Em 'Juízo Final', Sidney Sheldon nos apresenta a história de David Kenyon, um jovem e talentoso advogado que vê sua vida mudar drasticamente quando é acusado de um crime que não cometeu. Determinado a provar sua inocência, David embarca em uma jornada perigosa que o leva a confrontar poderosos inimigos e desvendar segredos sombrios. Com uma narrativa cheia de suspense, reviravoltas e personagens complexos, 'Juízo Final' é uma leitura envolvente que explora temas de justiça, coragem e redenção.",
        ano: 1991,
        imagem: "imgs/Juizo final.jpg"
    },
    {
        id: 11,
        titulo: "Escrito nas Estrelas",
        descricao: "Em 'Escrito nas Estrelas', Sidney Sheldon nos leva a uma jornada emocionante através da vida de Tracy Whitney, uma jovem mulher cuja vida é virada de cabeça para baixo quando seu noivo a abandona e ela é injustamente presa por um crime que não cometeu. Determinada a se vingar daqueles que a traíram, Tracy usa sua inteligência e habilidades para se reinventar como uma mestre do disfarce e do engano. A trama se desenrola em um cenário de luxo e intriga, onde Tracy enfrenta desafios perigosos enquanto busca justiça e redenção. Com reviravoltas surpreendentes e personagens complexos, 'Escrito nas Estrelas' é uma leitura emocionante que explora temas de amor, traição e a luta pela sobrevivência em um mundo implacável.",
        ano: 1992,
        imagem: "imgs/Escrito nas estrelas.jpg"
    },
    {
        id: 12,
        titulo: "Nada Dura para Sempre",
        descricao: "Em 'Nada Dura para Sempre', Sidney Sheldon nos apresenta a história de David Kenyon, um jovem e talentoso advogado que vê sua vida mudar drasticamente quando é acusado de um crime que não cometeu. Determinado a provar sua inocência, David embarca em uma jornada perigosa que o leva a confrontar poderosos inimigos e desvendar segredos sombrios. Com uma narrativa cheia de suspense, reviravoltas e personagens complexos, 'Nada Dura para Sempre' é uma leitura envolvente que explora temas de justiça, coragem e redenção.",
        ano: 1994,
        imagem: "imgs/Nada dura para sempre.jpg"
    },
    {
        id: 13,
        titulo: "Manhâ, Tarde e Noite",
        descricao: "Em 'Manhã, Tarde e Noite', Sidney Sheldon nos leva a uma jornada emocionante através da vida de Jennifer Parker, uma jovem advogada ambiciosa que sonha em conquistar o sucesso profissional. No entanto, sua vida muda drasticamente quando ela se envolve em um caso complexo que a coloca contra poderosos inimigos. À medida que Jennifer luta para provar sua inocência e proteger aqueles que ama, ela descobre segredos sombrios e traições inesperadas. Com uma narrativa cheia de suspense, reviravoltas e personagens cativantes, 'Manhã, Tarde e Noite' é uma leitura envolvente que explora temas de justiça, coragem e redenção.",
        ano: 1995,
        imagem: "imgs/Manha tarde e noite.jpg"
    },
    {
        id: 14,
        titulo: "O Plano Perfeito",
        descricao: "Em 'O Plano Perfeito', Sidney Sheldon nos apresenta a história de David Kenyon, um jovem e talentoso advogado que vê sua vida mudar drasticamente quando é acusado de um crime que não cometeu. Determinado a provar sua inocência, David embarca em uma jornada perigosa que o leva a confrontar poderosos inimigos e desvendar segredos sombrios. Com uma narrativa cheia de suspense, reviravoltas e personagens complexos, 'O Plano Perfeito' é uma leitura envolvente que explora temas de justiça, coragem e redenção.",
        ano: 1997,
        imagem: "imgs/O plano perfeito.jpg"
    },
    {
        id: 15,
        titulo: "Conte-me Seus Sonhos",
        descricao: "Em 'Conte-me Seus Sonhos', Sidney Sheldon nos leva a uma jornada emocionante através da vida de Tracy Whitney, uma jovem mulher cuja vida é virada de cabeça para baixo quando seu noivo a abandona e ela é injustamente presa por um crime que não cometeu. Determinada a se vingar daqueles que a traíram, Tracy usa sua inteligência e habilidades para se reinventar como uma mestre do disfarce e do engano. A trama se desenrola em um cenário de luxo e intriga, onde Tracy enfrenta desafios perigosos enquanto busca justiça e redenção. Com reviravoltas surpreendentes e personagens complexos, 'Conte-me Seus Sonhos' é uma leitura emocionante que explora temas de amor, traição e a luta pela sobrevivência em um mundo implacável.",
        ano: 1998,
        imagem: "imgs/conte-me seus sonhos.jpg"
    },
    {
        id: 16,
        titulo: "O Céu Está Caindo",
        descricao: "Em 'O Céu Está Caindo', Sidney Sheldon nos apresenta a história de David Kenyon, um jovem e talentoso advogado que vê sua vida mudar drasticamente quando é acusado de um crime que não cometeu. Determinado a provar sua inocência, David embarca em uma jornada perigosa que o leva a confrontar poderosos inimigos e desvendar segredos sombrios. Com uma narrativa cheia de suspense, reviravoltas e personagens complexos, 'O Céu Está Caindo' é uma leitura envolvente que explora temas de justiça, coragem e redenção.",
        ano: 2000,
        imagem: "imgs/O ceu esta caindo.jpg"
    },
    {
        id: 17,
        titulo: "Quem tem Medo do Escuro",
        descricao: "Em 'Quem tem Medo do Escuro', Sidney Sheldon nos leva a uma jornada emocionante através da vida de Jennifer Parker, uma jovem advogada ambiciosa que sonha em conquistar o sucesso profissional. No entanto, sua vida muda drasticamente quando ela se envolve em um caso complexo que a coloca contra poderosos inimigos. À medida que Jennifer luta para provar sua inocência e proteger aqueles que ama, ela descobre segredos sombrios e traições inesperadas. Com uma narrativa cheia de suspense, reviravoltas e personagens cativantes, 'Quem tem Medo do Escuro' é uma leitura envolvente que explora temas de justiça, coragem e redenção.",
        ano: 2004,
        imagem: "imgs/quem tem medo de escuro.jpg"
    },
    {
        id: 18,
        titulo: "O Outro Lado de Mim",
        descricao: "Em 'O Outro Lado de Mim', Sidney Sheldon nos apresenta a história de David Kenyon, um jovem e talentoso advogado que vê sua vida mudar drasticamente quando é acusado de um crime que não cometeu. Determinado a provar sua inocência, David embarca em uma jornada perigosa que o leva a confrontar poderosos inimigos e desvendar segredos sombrios. Com uma narrativa cheia de suspense, reviravoltas e personagens complexos, 'O Outro Lado de Mim' é uma leitura envolvente que explora temas de justiça, coragem e redenção.",
        ano: 2005,
        imagem: "imgs/O outro lado de mim.jpg"
    },
    {
        id: 19,
        titulo: "A Senhora do Jogo",
        descricao: "Em 'A Senhora do Jogo', Sidney Sheldon nos leva a uma jornada emocionante através da vida de Tracy Whitney, uma jovem mulher cuja vida é virada de cabeça para baixo quando seu noivo a abandona e ela é injustamente presa por um crime que não cometeu. Determinada a se vingar daqueles que a traíram, Tracy usa sua inteligência e habilidades para se reinventar como uma mestre do disfarce e do engano. A trama se desenrola em um cenário de luxo e intriga, onde Tracy enfrenta desafios perigosos enquanto busca justiça e redenção. Com reviravoltas surpreendentes e personagens complexos, 'A Senhora do Jogo' é uma leitura emocionante que explora temas de amor, traição e a luta pela sobrevivência em um mundo implacável.",
        ano: 2009,
        imagem: "imgs/A senhora do jogo.jpg"
    }
]

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('obras-container');

    if (!container) {
        console.error("Elemento #obras-container não encontrado no HTML.");
        return;
    }

    obras.forEach(obra => {
        const item = document.createElement('div');
        item.classList.add('obra-item');
        item.setAttribute('data-id', obra.id);

        item.innerHTML = `
            <img src="${obra.imagem}" alt="${obra.titulo}" />
            <h3>${obra.titulo}</h3>
            <p><strong>Ano:</strong> ${obra.ano}</p>
        `;

        item.addEventListener('click', () => {
            window.location.href = `detalhes.html?id=${obra.id}`;
        });

        container.appendChild(item);
    });
});