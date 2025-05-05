// View rendering functions

// Render the main hub view
function renderMainView() {
  const container = document.createElement('div');
  container.className = 'flex flex-col h-full';
  
  // Header
  const header = document.createElement('div');
  header.className = 'header';
  header.innerHTML = `
    <div class="flex items-center justify-center">
      <p class="header-title"> <img src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" alt="" style="width: 24px; height: 24px; margin-right: 8px;"> FURIA</p>
    </div>
    <p class="header-subtitle">Seu hub completo da FURIA Esports</p>
  `;
  container.appendChild(header);
  
  // Status bar with match info
  const statusBar = document.createElement('div');
  statusBar.className = 'status-bar';
  statusBar.innerHTML = `<img src="https://media0.giphy.com/media/McsDYx2ihXzztTFMap/giphy.gif?cid=6c09b952e0gguqjjee9fjj32hjac92xdn4amqhoftj3x5838&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" style="width: 15px; height: 15px; margin-right: 8px;"> ${matchStatus}`;
  container.appendChild(statusBar);
  
  // Main content with navigation buttons
  const content = document.createElement('div');
  content.className = 'content';
  
  // Chat assistant button
  const chatButton = document.createElement('button');
  chatButton.className = 'menu-button menu-button-primary';
  chatButton.innerHTML = `
    <i class="menu-button-icon" data-lucide="message-circle"></i>
    <div class="menu-button-content">
      <span class="menu-button-title">Chat com Assistente FURIA</span>
      <span class="menu-button-subtitle">Tire dúvidas e receba informações</span>
    </div>
    <i data-lucide="chevron-right"></i>
  `;
  chatButton.addEventListener('click', () => {
    setView('chat');
  });
  content.appendChild(chatButton);
  
  // Fan chat button
  const fanChatButton = document.createElement('button');
  fanChatButton.className = 'menu-button menu-button-secondary';
  fanChatButton.innerHTML = `
    <i class="menu-button-icon" data-lucide="users"></i>
    <div class="menu-button-content">
      <span class="menu-button-title">Chat da Torcida</span>
      <span class="menu-button-subtitle">Converse com outros fãs durante os jogos</span>
    </div>
    <i data-lucide="chevron-right"></i>
  `;
  fanChatButton.addEventListener('click', () => {
    setView('fan-chat');
  });
  content.appendChild(fanChatButton);
  
  // Players button
  const playersButton = document.createElement('button');
  playersButton.className = 'menu-button menu-button-secondary';
  playersButton.innerHTML = `
    <i class="menu-button-icon" data-lucide="user"></i>
    <div class="menu-button-content">
      <span class="menu-button-title">Jogadores</span>
      <span class="menu-button-subtitle">Perfis e estatísticas do elenco</span>
    </div>
    <i data-lucide="chevron-right"></i>
  `;
  playersButton.addEventListener('click', () => {
    setView('players');
  });
  content.appendChild(playersButton);
  
  // Schedule button
  const scheduleButton = document.createElement('button');
  scheduleButton.className = 'menu-button menu-button-secondary';
  scheduleButton.innerHTML = `
    <i class="menu-button-icon" data-lucide="calendar"></i>
    <div class="menu-button-content">
      <span class="menu-button-title">Calendário de Jogos</span>
      <span class="menu-button-subtitle">Próximas partidas e resultados</span>
    </div>
    <i data-lucide="chevron-right"></i>
    ${app.notifications > 0 ? `<span class="notification-badge">${app.notifications}</span>` : ''}
  `;
  scheduleButton.addEventListener('click', () => {
    setView('schedule');
  });
  content.appendChild(scheduleButton);
  
  container.appendChild(content);
  
  const wiki = document.createElement('button');
  wiki.className = 'menu-button menu-button-secondary';
  wiki.innerHTML = `
    <i class="menu-button-icon" data-lucide="book-open-text"></i>
    <div class="menu-button-content">
      <span class="menu-button-title">Wiki</span>
      <span class="menu-button-subtitle">Informações</span>
    </div>
    <i data-lucide="chevron-right"></i>
  `;
  wiki.addEventListener('click', () => {
    setView('wiki');
  });
  content.appendChild(wiki);

  // Footer
  const footer = document.createElement('div');
  footer.className = 'footer';
  footer.textContent = 'Desenvolvido para fãs da FURIA • v1.0.0';
  container.appendChild(footer);
  
  return container;
}

// Render the assistant chat view
function renderChatView() {
  const container = document.createElement('div');
  container.className = 'chat-container';
  
  // Header with back button
  const header = document.createElement('div');
  header.className = 'header header-with-back';
  header.innerHTML = `
    <button class="back-button" id="chat-back">
      <i data-lucide="arrow-left"></i>
    </button>
    <div>
      <p class="header-title">Assistente FURIA</p>
      <p class="header-subtitle">Tirando suas dúvidas sobre o time</p>
    </div>
  `;
  container.appendChild(header);
  
  // Chat messages area
  const chatContent = document.createElement('div');
  chatContent.className = 'chat-content';
  chatContent.id = 'chat-messages';
  
  // Initial welcome message
  const welcomeMessage = document.createElement('div');
  welcomeMessage.className = 'message-container';
  welcomeMessage.innerHTML = `
  `;
  chatContent.appendChild(welcomeMessage);
  
  // Render existing messages
  chatService.messages.forEach(msg => {
    const messageEl = document.createElement('div');
    messageEl.className = `message-container ${msg.sender === 'user' ? 'user' : ''}`;
    
    if (msg.sender === 'user') {
      messageEl.innerHTML = `
        <div class="message-bubble user">
          <p>${msg.message}</p>
          <p class="message-time">${msg.time}</p>
        </div>
        <div class="message-avatar">${chatService.userAvatar}</div>
      `;
    } else {
      messageEl.innerHTML = `
        <div class="message-avatar"><img src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" alt="" style="width: 24px; height: 24px; margin-right: 8px;"></div>
        <div class="message-bubble bot">
          <p>${msg.message}</p>
          <p class="message-time">${msg.time}</p>
        </div>
      `;
    }
    
    chatContent.appendChild(messageEl);
  });
  
  // Loading indicator if active
  if (chatService.loading) {
    const loadingEl = document.createElement('div');
    loadingEl.className = 'message-container';
    loadingEl.innerHTML = `
      <div class="message-avatar"><img src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" alt="" style="width: 24px; height: 24px; margin-right: 8px;"></div>
      <div class="message-bubble bot">
        <p class="typing-indicator">Digitando...</p>
      </div>
    `;
    chatContent.appendChild(loadingEl);
  }
  
  container.appendChild(chatContent);
  
  // Input area for sending messages
  const inputContainer = document.createElement('div');
  inputContainer.className = 'chat-input-container';
  inputContainer.innerHTML = `
    <input type="text" 
      id="chat-input" 
      class="chat-input" 
      placeholder="Pergunte sobre jogadores, jogos, etc..." 
    />
    <button id="send-button" class="chat-send-button">
      <i data-lucide="send"></i>
    </button>
  `;
  container.appendChild(inputContainer);
  
  // After render, attach event listeners
  setTimeout(() => {
    // Back button
    document.getElementById('chat-back').addEventListener('click', () => {
      setView('main');
    });
    
    // Send button
    const inputEl = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    
    const sendMessage = () => {
      if (inputEl.value.trim()) {
        chatService.sendMessage(inputEl.value, () => {
          // Re-render chat view to show messages
          setView('chat');
        });
        inputEl.value = '';
      }
    };
    
    sendButton.addEventListener('click', sendMessage);
    
    inputEl.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
    
    // Auto-scroll to bottom
    const messagesContainer = document.getElementById('chat-messages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 0);
  
  return container;
}

// Render the fan chat view
function renderFanChatView() {
  const container = document.createElement('div');
  container.className = 'chat-container';
  
  // Header with back button
  const header = document.createElement('div');
  header.className = 'header header-with-back';
  header.innerHTML = `
    <button class="back-button" id="fan-chat-back">
      <i data-lucide="arrow-left"></i>
    </button>
    <div>
      <p class="header-title">Chat da Torcida</p>
      <p class="header-subtitle">${fanChatMessages.length} torcedores online</p>
    </div>
  `;
  container.appendChild(header);
  
  // Chat messages area
  const chatContent = document.createElement('div');
  chatContent.className = 'chat-content';
  chatContent.id = 'fan-chat-messages';
  
  // Render existing messages
  fanChatMessages.forEach(msg => {
    const messageEl = document.createElement('div');
    messageEl.className = `message-container ${msg.user === 'Você' ? 'user-message' : ''}`;
    messageEl.innerHTML = `
      <div class="message-avatar">${msg.avatar}</div>
      <div class="message-bubble ${msg.user === 'Você' ? 'user-bubble' : 'bot'}">
        ${msg.user !== 'Você' ? `<p class="fan-name">${msg.user}</p>` : ''}
        <p>${msg.message}</p>
        <p class="message-time">${msg.time}</p>
      </div>
    `;
    chatContent.appendChild(messageEl);
  });
  
  container.appendChild(chatContent);
  
  // Input area for sending messages
  const inputContainer = document.createElement('div');
  inputContainer.className = 'chat-input-container';
  inputContainer.innerHTML = `
    <input type="text" id="fan-chat-input" class="chat-input" placeholder="Envie uma mensagem para a torcida..." />
    <button id="fan-chat-send" class="chat-send-button">
      <i data-lucide="send"></i>
    </button>
  `;
  container.appendChild(inputContainer);
  
  // After render, attach event listeners
  setTimeout(() => {
    // Back button
    document.getElementById('fan-chat-back').addEventListener('click', () => {
      setView('main');
    });
    
    // Send button
    const inputEl = document.getElementById('fan-chat-input');
    const sendButton = document.getElementById('fan-chat-send');
    
    const sendMessage = () => {
      const message = inputEl.value.trim();
      if (message) {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const newMessage = {
          user: 'Você',
          avatar: '👤',
          message: message,
          time: time
        };
        
        // Add the new message to the chat
        fanChatMessages.push(newMessage);
        
        // Re-render the chat view
        setView('fan-chat');
        
        // Clear the input field
        inputEl.value = '';
      }
    };
    
    sendButton.addEventListener('click', sendMessage);
    
    inputEl.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
    
    // Auto-scroll to bottom
    const messagesContainer = document.getElementById('fan-chat-messages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 0);
  
  return container;
}

// Render the players view
function renderPlayersView() {
  const container = document.createElement('div');
  container.className = 'flex flex-col h-full';
  
  // Header with back button
  const header = document.createElement('div');
  header.className = 'header header-with-back';
  header.innerHTML = `
    <button class="back-button" id="players-back">
      <i data-lucide="arrow-left"></i>
    </button>
    <div>
      <p class="header-title">Jogadores</p>
      <p class="header-subtitle">Elenco atual de CS da FURIA</p>
    </div>
  `;
  container.appendChild(header);
  
  // Players content
  const content = document.createElement('div');
  content.className = 'content';
  
  // Player cards
  Object.entries(playerData).forEach(([id, player]) => {
    const playerCard = document.createElement('div');
    playerCard.className = 'player-card';
    playerCard.innerHTML = `
      <div class="player-avatar">
        <img src="${player.foto}" alt="${player.nome}" style="width: 50px; height: 50px; border-radius: 50%;">
      </div>
      <div class="player-info">
        <p class="player-name">${player.nome}</p>
        <p class="player-role">${player.funcao}</p>
        <div class="player-stats">
          <span>Rating: ${player.rating}</span>
          <span>Maps: ${player.mapas}</span>
        </div>
      </div>
    `;
    content.appendChild(playerCard);
  });
  
  container.appendChild(content);
  
  // After render, attach event listeners
  setTimeout(() => {
    document.getElementById('players-back').addEventListener('click', () => {
      setView('main');
    });
  }, 0);
  
  return container;
}

// Render the schedule view
function renderScheduleView() {
  const container = document.createElement('div');
  container.className = 'flex flex-col h-full';
  
  // Header with back button
  const header = document.createElement('div');
  header.className = 'header header-with-back';
  header.innerHTML = `
    <button class="back-button" id="schedule-back">
      <i data-lucide="arrow-left"></i>
    </button>
    <div>
      <p class="header-title">Calendário de Jogos</p>
      <p class="header-subtitle">Próximas partidas da FURIA</p>
    </div>
  `;
  container.appendChild(header);
  
  // Schedule content
  const content = document.createElement('div');
  content.className = 'content';
  
  // Recent match (completed)
  const recentMatch = document.createElement('div');
  recentMatch.className = 'match-card match-completed';
  recentMatch.innerHTML = `
    <div class="match-header">
      <div class="match-title"><img src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" alt="" style="width: 15px; height: 15px; margin-right: 8px;">FURIA 16 - 12 Liquid <img src="https://upload.wikimedia.org/wikipedia/pt/4/4b/Teamliquid_logo_blue.png?20220910162021" alt="" style="width: 15px; height: 15px; margin-right: 8px;"></div>
      <div class="match-status">Vitória!</div>
    </div>
    <div class="match-details">IEM Cologne • Inferno</div>
    <div class="match-stats">Destaques: kscerato (24-13), art (21-15)</div>
  `;
  content.appendChild(recentMatch);
  
  // Upcoming matches
  upcomingMatches.forEach((match, index) => {
    const matchCard = document.createElement('div');
    matchCard.className = 'match-card';
    matchCard.innerHTML = `
      <div class="match-header">
        <div class="match-title">
          <div class="flex items-center">
            <span><img src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" alt="" style="width: 15px; height: 15px; margin-right: 8px;"> FURIA vs ${match.opponent} ${match.logo}</span>
          </div>
        </div>
        <div>
          <div class="flex items-center text-sm">
            <i data-lucide="calendar" class="mr-1" style="width: 14px; height: 14px;"></i> ${match.date}
          </div>
          <div class="flex items-center text-sm mt-1">
            <i data-lucide="clock" class="mr-1" style="width: 14px; height: 14px;"></i> ${match.time}
          </div>
        </div>
      </div>
      <div class="match-details">${match.tournament}</div>
      <div class="match-actions">
        <button class="match-button">
          <i data-lucide="bell" style="width: 12px; height: 12px;"></i> Lembrete
        </button>
        <button class="match-button">
          <i data-lucide="heart" style="width: 12px; height: 12px;"></i> Favorito
        </button>
      </div>
    `;
    content.appendChild(matchCard);
  });
  
  container.appendChild(content);
  
  // After render, attach event listeners
  setTimeout(() => {
    document.getElementById('schedule-back').addEventListener('click', () => {
      setView('main');
      app.notifications = 0;
    });
  }, 0);
  
  return container;
}

// Render the Wiki view
function renderWikiView() {
  const container = document.createElement('div');
  container.className = 'flex flex-col h-full';
  
  // Header with back button
  const header = document.createElement('div');
  header.className = 'header header-with-back';
  header.innerHTML = `
    <button class="back-button" id="wiki-back">
      <i data-lucide="arrow-left"></i>
    </button>
    <div>
      <p class="header-title">Wiki</p>
      <p class="header-subtitle">Informações sobre a FURIA</p>
    </div>
  `;
  container.appendChild(header);
  
  // Content area
  const content = document.createElement('div');
  content.className = 'content';
  content.innerHTML = `
    <h2 style="color: #b026ff; font-size: 1.5rem; margin-bottom: 1rem;">Sobre a FURIA</h2>
    <p style="line-height: 1.6;">
      A FURIA Esports é uma das organizações de esports mais renomadas do Brasil, com destaque no cenário de Counter-Strike: Global Offensive (CS:GO). 
      Fundada em 2017, a equipe rapidamente se tornou uma das melhores do mundo, conhecida por seu estilo de jogo agressivo e inovador.
    </p>
    <p style="line-height: 1.6; margin-top: 1rem;">
      Atualmente, a FURIA compete nos maiores torneios internacionais, representando o Brasil com orgulho. 
      A equipe é composta por jogadores talentosos, como KSCERATO e yuurih, que são reconhecidos por suas habilidades excepcionais.
    </p>
    <p style="line-height: 1.6; margin-top: 1rem;">
      Além de sua performance dentro do jogo, a FURIA também é conhecida por sua forte conexão com os fãs, promovendo iniciativas que aproximam a comunidade do time.
    </p>
  `;
  container.appendChild(content);
  
  // After render, attach event listeners
  setTimeout(() => {
    document.getElementById('wiki-back').addEventListener('click', () => {
      setView('main');
    });
  }, 0);
  
  return container;
}