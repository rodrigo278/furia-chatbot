Funcionalidades
1. Página Principal
Exibe o status atual da partida (exemplo: "FURIA vs Liquid | IEM Cologne").
Botões de navegação para acessar diferentes seções:
Chat com Assistente FURIA: Um chatbot que responde perguntas sobre o time.
Chat da Torcida: Um chat interativo para fãs conversarem durante os jogos.
Jogadores: Informações detalhadas sobre o elenco atual.
Calendário de Jogos: Próximas partidas e resultados recentes.
Wiki: Informações gerais sobre a FURIA Esports.

___________________________________________________

2. Chat com Assistente FURIA
Um chatbot que responde perguntas sobre jogadores, próximos jogos, títulos e mais.
Respostas automáticas baseadas em palavras-chave e dados do time.

________________________________________________________________

3. Chat da Torcida
Um chat em tempo real para interação entre fãs.
Mensagens enviadas pelo usuário aparecem em roxo e alinhadas à direita.

_______________________________________________________________

4. Jogadores
Exibe informações detalhadas sobre os jogadores, como:
Nome, função, mapas fortes, estatísticas e uma breve descrição.
Fotos dos jogadores.

____________________________________________________________

5. Calendário de Jogos
Lista de partidas futuras com detalhes como adversário, torneio, data e horário.
Destaques de partidas recentes.

______________________________________________________________

6. Wiki
Uma seção com informações gerais sobre a FURIA Esports, incluindo sua história e conquistas.



Estrutura do Projeto
Arquivos Principais
index.html: Estrutura HTML principal do projeto.
app.js: Gerencia o estado do aplicativo e renderiza as diferentes views.
views.js: Contém as funções para renderizar cada seção do aplicativo.
chatService.js: Lógica do chatbot, incluindo respostas automáticas e gerenciamento de mensagens.
data.js: Dados estáticos, como informações dos jogadores, mensagens do chat e partidas futuras.
styles.css: Estilos personalizados para o layout e componentes.



Configuração
vite.config.ts: Configuração do Vite para o projeto.
tailwind.config.js: Configuração do Tailwind CSS (não utilizado diretamente, mas configurado).
tsconfig.json e tsconfig.app.json: Configurações do TypeScript.



Tecnologias Utilizadas
Vite: Ferramenta de build rápida para desenvolvimento web.
React: Biblioteca para construção de interfaces de usuário.
TypeScript: Superset do JavaScript com tipagem estática.
CSS: Estilização personalizada para o layout e componentes.
Lucide Icons: Biblioteca de ícones para melhorar a interface.



Como Executar o Projeto
Clone o repositório:

Instale as dependências:

Inicie o servidor de desenvolvimento:

Acesse no navegador: O projeto estará disponível em http://localhost:5173.

______________________________________________

Estrutura de Código
views.js
Contém funções como renderMainView, renderChatView, renderFanChatView, etc.
Cada função cria dinamicamente os elementos HTML para a respectiva seção.
chatService.js
Gerencia as mensagens do chatbot.
Responde automaticamente com base em palavras-chave ou informações dos jogadores.
data.js
Contém dados estáticos, como:
Informações dos jogadores (nome, função, estatísticas, etc.).
Mensagens do chat da torcida.
Próximas partidas.
styles.css
Define o layout e os estilos personalizados, como:
Mensagens do usuário no chat da torcida em roxo e alinhadas à direita.
Botões estilizados com gradientes e animações.
