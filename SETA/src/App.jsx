import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <nav class="superior">
        <img src="./DESIGN/Seta.PNG" alt="Logo" id="logo_2" />
        <div id="escrito">Site Empregador de Trabalhadores Autonomos</div>
        <section class="search_fil">
          <div class="search">
            <div id="botao_filtro">
              <i class="fa-solid fa-bars"></i>
            </div>
            <input type="text" name="BarraDePesquisa" placeholder="Ex: Cursos de programação" id="BarraDePesquisa" />
            <div id="botao_search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </section>
        <div class="botao_bell">
            <i class="fa-solid fa-bell"></i>
        </div>
        <div class="botao_cart">
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div class="user">
          <i class="fa-solid fa-user" style="color: #4663E6;"></i>
        </div>
      </nav>
    </>
  )
}

export default App