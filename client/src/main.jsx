import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 import { Provider } from 'react-redux'
import { Store } from './store/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={Store}>
    <App />
    </Provider>
    </StrictMode>
 
)