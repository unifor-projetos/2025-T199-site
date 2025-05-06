import React from 'react';
import './style.css'; // Se você tiver um arquivo de estilos

function MuseuPage() {
  return (
    <>
      <header>
        <h1>Espaço Cultural Unifor</h1>
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar exibição no acervo" />
          <button>Buscar</button>
        </div>
      </header>

      <section className="map-section">
        <h2>Mapa Interativo do Espaço Cultural</h2>
        <div className="map-container">
          <img src="/placeholder_map.png" alt="Mapa do Espaço Cultural" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </section>

      <section className="current-exhibitions">
        <h2>Exibições Atuais (31/03/25)</h2>
        <div className="thumbnails">
          <div className="thumbnail">
            <img src="/placeholder_a_negra.png" alt="A Negra" />
            <p>"A Negra"<br />Tarsila do Amaral</p>
          </div>
          <div className="thumbnail">
            <img src="/placeholder_abaporu.png" alt="Abaporu" />
            <p>"Abaporu"<br />Tarsila do Amaral</p>
          </div>
        </div>
        <div className="exhibition-grid">
          <div className="exhibition-item">
            <h3>Tarsila do Amaral</h3>
          </div>
          <div className="exhibition-item">
            <h3>Lygia Clark</h3>
          </div>
          <div className="exhibition-item">
            <h3>Ariano Suassuna</h3>
          </div>
        </div>
        <div className="detailed-exhibition">
          <div className="detailed-image">
            <img src="/placeholder_o_sono.png" alt="O Sono" />
          </div>
          <div className="detailed-info">
            <h3>"O Sono"</h3>
            <p>Artista: Tarsila do Amaral</p>
            <p>...</p> <p>Data de Exposição: 31/03/25</p>
          </div>
        </div>
      </section>

      <section className="future-exhibitions">
        <h2>Futuras Exibições (5/04/25)</h2>
        <div className="exhibition-grid">
          <div className="exhibition-item">
            <h3>Abraham Palatnik</h3>
          </div>
          <div className="exhibition-item">
            <h3>Regina Silveira</h3>
          </div>
          <div className="exhibition-item">
            <h3>Gilvan Samico</h3>
          </div>
        </div>
        <div className="detailed-exhibition">
          <div className="detailed-image">
            <img src="/placeholder_guadalupeira.png" alt="Guadalupeira" />
          </div>
          <div className="detailed-info">
            <h3>"Guadalupeira"</h3>
            <p>Artista: Gilvan Samico</p>
            <p>...</p> <p>Data de Exposição: 5/04/25</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Espaço Cultural Unifor</p>
      </footer>
    </>
  );
}

export default MuseuPage;