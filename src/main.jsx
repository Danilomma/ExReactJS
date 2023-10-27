import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from '../Form.jsx'
import IMCResult from '../IMCResult.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Form />
    <IMCResult />
  </React.StrictMode>,
)
