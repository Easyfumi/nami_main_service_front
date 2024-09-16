import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListTestComponent from './components/ListTestComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>

          {/* // http://localhost:3000 */}
          <Route path='/list' element={<ListTestComponent/>}></Route>

        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
