import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => (
  <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', fontSize:'2rem'}}>
    Tesla Lightshow Studio
  </div>
);

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
