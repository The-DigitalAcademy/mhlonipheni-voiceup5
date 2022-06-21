import {useContext, useEffect} from 'react'
import CategoryItem from '../components/CategoryItem'

// mock
import {categories_data} from '../data'

// context
import {StoreContext} from '../Store'

// helper
import FUNCTIONS from '../_function'

const Home = () => {
  const {categories, onAddCategories} = useContext(StoreContext)

  useEffect(() => {
    if (!FUNCTIONS.localStorageExists('voiceUp_categories')) {
      onAddCategories(categories_data)
      FUNCTIONS.setToLocalStorage('voiceUp_categories', categories_data)
    } else {
      onAddCategories(FUNCTIONS.getFromLocalStorage('voiceUp_categories'))
    }
  }, [])

  return (
    <div className='home'>
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  )
}
export default Home
