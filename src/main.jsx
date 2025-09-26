import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Wrapper from './components/wrapper/Wrapper.jsx'
import Header from './components/header/Header.jsx'
import QuickAccess from './components/quickaccess/QuickAccess.jsx'
import QuickAccessItem from './components/QuickAccessItem/QuickAccessItem.jsx'
import Homelander from "./assets/homelander.svg"
import Notificacao from "./assets/notificacao.svg"
import Store from "./assets/store.svg"
import Users from "./assets/users.svg"
import Video from "./assets/video.svg"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Wrapper>
      <Header/>
      <QuickAccess/>
        <QuickAccessItem icone= {Homelander}/>
        <QuickAccessItem icone= {Notificacao}/>
        <QuickAccessItem icone={Store}/>
        <QuickAccessItem icone={Users}/>
        <QuickAccessItem icone={Video}/>


      <p>Quick Acess - [home, amigos, mensagens, reels, notificacao, marktplace]</p>
      <p>Area de postar - inclui foto de perfil, input para escrever a postagem icone/btn para postar foto</p>
      <p>Storys</p>
      <p>feed</p>
    </Wrapper>
  </StrictMode>,
)
