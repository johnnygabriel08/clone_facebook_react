import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Wrapper from './components/wrapper/Wrapper.jsx'
import Header from './components/header/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Wrapper>
      <Header/>
      <p>Quick Acess - [home, amigos, mensagens, reels, notificacao, marktplace]</p>
      <p>Area de postar - inclui foto de perfil, input para escrever a postagem icone/btn para postar foto</p>
      <p>Storys</p>
      <p>feed</p>
    </Wrapper>
  </StrictMode>,
)
