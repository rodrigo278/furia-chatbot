// Mock data for the FURIA Fan Chat application

// Player data
const playerData = {
    'fallen': {
      nome: 'Gabriel "FalleN" Toledo',
      idade: 33,
      funcao: 'Capitão / AWPer',  
      rating: 1.20,
      kd: 1.25,
      hs: '50.2%',
      mapas: 'Dust2 e Nuke',
      info: 'Conhecido por sua capacidade de ensinar e inspirar outros jogadores',
      foto: './images/fallen.jpg' // Caminho para a imagem do jogador
    },
    'kscerato': {
      nome: 'Kaike "KSCERATO" Cerato',
      idade: 26,
      funcao: 'Rifler',
      rating: 1.25,
      kd: 1.31,
      hs: '54.8%',
      mapas: 'Inferno, Ancient',
      info: 'Um dos jogadores mais consistentes do cenário, conhecido pelo alto impacto',
      foto: './images/kscerato.jpg' // Caminho para a imagem do jogador
    },
    'yuurih': {
      nome: 'Yuri "yuurih" Santos',
      idade: 25,
      funcao: 'Rifler / Support',
      rating: 1.22,
      kd: 1.24,
      hs: '55.1%',
      mapas: 'Vertigo, Inferno',
      info: 'Jogador versátil com incrível aim e game sense',
      foto: './images/yuurih.jpg' // Caminho para a imagem do jogador
    },
    'molodoy': {
      nome: 'Danil "molodoy" Golubenko',
      idade: 20,
      funcao: 'AWPer',
      rating: 1.26,
      kd: 1.30,
      hs: '57.5%',
      mapas: 'Mirage, Nuke',
      info: 'Jovem talento que vem se destacando com grandes performances',
      foto: './images/molodoy.jpg' // Caminho para a imagem do jogador
    },
    'yekindar': {
      nome: 'Mareks "YEKINDAR" Gaļinskis',
      idade: 25,
      funcao: 'stand-in',
      rating: 1.19,
      kd: 1.18,
      hs: '41.2%',
      mapas: 'Mirage, Ancient',
      info: 'Conhecido por sua agressividade e habilidade como entry-fragger',
      foto: './images/yekindar.jpg' // Caminho para a imagem do jogador
    },
    
};

// Upcoming matches data
const upcomingMatches = [
  { opponent: 'Natus Vincere', tournament: 'BLAST Premier', date: '03/05/2025', time: '15:00', logo: '⚡' },
  { opponent: 'G2 Esports', tournament: 'ESL Pro League', date: '10/05/2025', time: '13:30', logo: '🌊' },
  { opponent: 'Cloud9', tournament: 'IEM Cologne', date: '15/05/2025', time: '11:00', logo: '☁️' }
];

// Fan chat messages
const fanChatMessages = [
  { user: 'Marcelo_CS', avatar: '👨‍💻', message: 'QUE CLUTCH DO KSCERATO!!', time: '14:32' },
  { user: 'FuriaFan22', avatar: '👩‍🦱', message: '🔥🔥🔥 Estamos jogando muito hoje!', time: '14:33' },
  { user: 'AnaCS', avatar: '👩', message: 'alguém viu aquele wallbang??', time: '14:35' },
  { user: 'BrasilCS', avatar: '🧔', message: 'estamos dominando o CT side, vamo que vamo!', time: '14:36' },
  { user: 'GameLover', avatar: '🎮', message: 'FalleN está jogando demais hoje, melhor capitão!', time: '14:37' }
];

// Bot responses for the assistant chat
const botResponses = {
  'oi': 'Olá, torcedor da FURIA! Como posso ajudar você hoje?',
  'olá': 'Olá, torcedor da FURIA! Como posso ajudar você hoje?',
  'eae': 'E aí! Pronto para acompanhar mais um jogo da FURIA?',
  'jogos': 'Temos os seguintes jogos agendados:\n- FURIA vs Na\'Vi (03/05)\n- FURIA vs G2 (10/05)\n- FURIA vs Cloud9 (15/05)',
  'horário': 'O próximo jogo será contra Na\'Vi dia 03/05 às 15:00',
  'quem': 'O atual roster da FURIA é: FalleN (capitão), KSCERATO, yuurih, molodoy e yekindar',
  'titulo': 'A FURIA conquistou:\n- IEM Rio 2023\n- BLAST Premier Fall 2023\n- ESL Pro League Season 19',
  'ingresso': 'Ingressos para o próximo Major estarão disponíveis em breve na loja oficial!',
  'loja': 'Visite nossa loja oficial em shop.furiagg.com e use o cupom FANCHAT para 10% de desconto!',
  'redes': 'Siga a FURIA nas redes:\n> <a href="https://twitter.com/FURIA" target="_blank">X</a>\n> <a href="https://www.instagram.com/furiagg/" target="_blank">Instagram</a>\n> <a href="https://www.tiktok.com/@furia" target="_blank">Tiktok</a>',
  'discord': 'Entre no Discord oficial: <a href="https://discord.gg/furiagg" target="_blank">discord.gg/furiagg</a>',
  'coach': 'O atual técnico da FURIA é guerri (Nicholas Nogueira)',
  'manager': 'O atual manager é gorillaz (André Gomes)',
  'ranking': 'A FURIA está atualmente na 4ª posição do ranking mundial HLTV',
  'major': 'A FURIA se classificou para o próximo Major que acontecerá em junho em Estocolmo',
  'fan club': 'Para participar do clube de fãs oficial, acesse: furia.gg/fanclub',
  'ajuda': 'Posso te ajudar com:\n- Informações sobre jogadores\n- Próximos jogos\n- Estatísticas do time\n- Resultados recentes\n- Conquistas\n- Loja oficial\n- Clube de fãs'
};

// Initial match status
let matchStatus = 'AGORA: FURIA vs Liquid | IEM Cologne | Mapa 2 - Inferno [13-11]';

// Possible score updates
const possibleScores = ['13-11', '14-11', '14-12', '15-12', '16-12'];