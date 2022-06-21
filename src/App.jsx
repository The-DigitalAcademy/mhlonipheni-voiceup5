import {Routes, Route} from 'react-router-dom'

// components
import Home from './pages/Home'
import Category from './pages/Category'
import Header from './components/Header'

// contexts
import StoreContextProvider from './Store'

const App = () => {
  return (
    <div className='app'>
      <Header />

      <StoreContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:cat_id' element={<Category />} />
        </Routes>
      </StoreContextProvider>
    </div>
  )
}
export default App
