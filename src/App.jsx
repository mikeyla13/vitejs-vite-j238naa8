import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Bienvenida from './secciones/Bienvenida';
import Seccion1 from './secciones/Seccion1';
import Seccion2 from './secciones/Seccion2';
import Seccion3 from './secciones/Seccion3';
import Seccion4 from './secciones/Seccion4';
import Perfil from './components/Perfil';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/bienvenida" element={<Bienvenida />} />
          <Route path="/seccion1" element={<Seccion1 />} />
          <Route path="/seccion2" element={<Seccion2 />} />
          <Route path="/seccion3" element={<Seccion3 />} />
          <Route path="/seccion4" element={<Seccion4 />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
