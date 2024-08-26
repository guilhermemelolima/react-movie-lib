
import { Outlet } from 'react-router-dom'

import {Navbar} from './components/Navbar'

import './App.css'

/*
Modo Escuro
  1. Cor de Fundo Principal: Cor: #121212 
  2. Cor de Texto Principal: Cor: #E0E0E0 
  3. Cor de Destaque/Links: Cor: #BB86FC 
  4. Cor de Fundo de Cartões/Componentes Secundários: Cor: #1E1E1E 
  5. Cor de Borda e Separadores: Cor: #333333  


Modo Claro
1. Cor de Fundo Principal: Cor: #FFFFFF 
2. Cor de Texto Principal: Cor: #333333 
3. Cor de Destaque/Links: Cor: #6200EE
4. Cor de Fundo de Cartões/Componentes Secundários: Cor: #F5F5F5
5. Cor de Borda e Separadores: Cor: #DDDDDD

Cor de Erro/Alerta: Use um vermelho (#CF6679) para mensagens de erro e alertas, garantindo que sejam visíveis e chamem a atenção.
Cor de Sucesso: Verde (#03DAC6) pode ser usado para mensagens de sucesso ou notificações positivas.
 */

function App() {

  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  )
}

export default App
