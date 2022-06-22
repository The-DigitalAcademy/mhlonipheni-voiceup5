import {useState, useContext} from 'react'

// context
import {StoreContext} from '../Store'

const AddCategory = ({setShowAdd}) => {
  const [text, setText] = useState('')
  const {onAddCategory} = useContext(StoreContext)

  const onSubmit = () => {
    if (!text) {
      alert('Category cannot be empty')
      return
    }
    setShowAdd(false)
    onAddCategory(text)
  }

  return (
    <div className='addCard'>
      <textarea
        placeholder='Add category...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows='4'
      ></textarea>
      <div className='buttonGroup'>
        <button className='close' onClick={() => setShowAdd(false)}>
          CLOSE
        </button>
        <button className='add' onClick={onSubmit}>
          ADD CATEGORY
        </button>
      </div>
    </div>
  )
}
export default AddCategory
