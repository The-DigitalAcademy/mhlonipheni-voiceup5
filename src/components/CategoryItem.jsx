import {NavLink} from 'react-router-dom'
import {BsGrid} from 'react-icons/bs'

const CategoryItem = ({category}) => {
  return (
    <NavLink to={`/${category.cat_id}`} className='categoryItem noselect'>
      <BsGrid />
      <span>{category.name}</span>
    </NavLink>
  )
}
export default CategoryItem
