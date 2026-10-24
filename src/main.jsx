import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// No StrictMode: its double-mount would start the GSAP/Three effects twice.
createRoot(document.getElementById('root')).render(<App />);
