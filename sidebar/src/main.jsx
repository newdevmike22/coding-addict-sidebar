import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '@fontsource-variable/open-sans';
import { AppProvider } from './context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(<AppProvider><App /></AppProvider>);
