// Main application functionality

// Application state
const app = {
  view: 'main',
  notifications: 0,
  scoreUpdateInterval: null,
};

// Set the current view
function setView(viewName) {
  app.view = viewName;
  renderApp();
}

// Update the match status with random scores
function updateMatchStatus() {
  const randomScore = possibleScores[Math.floor(Math.random() * possibleScores.length)];
  matchStatus = `AGORA: FURIA vs Liquid | IEM Cologne | Mapa 2 - Inferno [${randomScore}]`;
  
  // Randomly generate notifications
  if (Math.random() > 0.8 && app.view !== 'schedule') {
    app.notifications++;
  }
  
  // Only re-render if we're on the main view
  if (app.view === 'main') {
    renderApp();
  }
}

// Render the current view
function renderApp() {
  const appContainer = document.getElementById('app');
  appContainer.innerHTML = '';
  
  let viewElement;
  
  switch (app.view) {
    case 'main':
      viewElement = renderMainView();
      break;
    case 'chat':
      viewElement = renderChatView();
      break;
    case 'fan-chat':
      viewElement = renderFanChatView();
      break;
    case 'players':
      viewElement = renderPlayersView();
      break;
    case 'schedule':
      viewElement = renderScheduleView();
      break;
    case 'wiki': // Adicione este caso
      viewElement = renderWikiView();
      break;
    default:
      viewElement = renderMainView();
  }
  
  appContainer.appendChild(viewElement);
  
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Add fade-in animation
  viewElement.classList.add('fade-in');
}

// Initialize the application
function initApp() {
  // Initial render
  renderApp();
  
  // Start match status updates
  if (app.scoreUpdateInterval) {
    clearInterval(app.scoreUpdateInterval);
  }
  
  app.scoreUpdateInterval = setInterval(updateMatchStatus, 5000);
  
  // Add welcome message if chat is empty
  if (chatService.messages.length === 0) {
    chatService.messages.push({
      sender: 'bot',
      message: 'Olá! Sou o assistente virtual da FURIA. Como posso ajudar? Pergunte sobre jogadores, jogos, títulos ou digite "ajuda" para ver todas as opções.',
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    });
  }
}

// Start the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});