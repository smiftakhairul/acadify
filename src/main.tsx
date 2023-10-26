import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RecoilRoot } from 'recoil'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <RecoilRoot>
      <App />
      <ToastContainer />
    </RecoilRoot>
  </React.Fragment>,
)
