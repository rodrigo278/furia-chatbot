// Chat service functionality

class ChatService {
  constructor() {
    this.messages = [];
    this.userAvatar = '👤';
    this.loading = false;
  }
  
  // Add a new user message and process bot response
  async sendMessage(message, callback) {
    if (!message.trim()) return;
    
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    // Add user message
    const userMessage = {
      sender: 'user',
      message: message,
      time: time
    };
    
    this.messages.push(userMessage);
    this.loading = true;
    
    if (callback) callback();
    
    // Simulate response delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Generate bot response
    let botResponse;
    
    // Check for player mentions
    const playerMentioned = Object.keys(playerData).find(player => 
      message.toLowerCase().includes(player.toLowerCase())
    );
    
    if (playerMentioned) {
      const player = playerData[playerMentioned];
      botResponse = {
        sender: 'bot',
        message: `${player.foto} ${player.nome}:\n• Função: ${player.funcao}\n• Rating 2.0: ${player.rating}\n• K/D: ${player.kd}\n• HS%: ${player.hs}\n• Mapas fortes: ${player.mapas}\n\n${player.info}`,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      };
    } else {
      // Check for keywords
      const key = Object.keys(botResponses).find(key => 
        message.toLowerCase().includes(key.toLowerCase())
      );
      
      botResponse = {
        sender: 'bot',
        message: key ? botResponses[key] : "Não entendi sua pergunta. Tente perguntar sobre jogadores, próximos jogos, títulos ou digite 'ajuda' para ver todas as opções.",
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      };
    }
    
    this.messages.push(botResponse);
    this.loading = false;
    
    if (callback) callback();
    
    return botResponse;
  }
  
  // Clear all messages
  clearMessages() {
    this.messages = [];
  }
}

// Create a global instance
const chatService = new ChatService();