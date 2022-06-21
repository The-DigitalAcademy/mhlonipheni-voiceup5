import {useState, useContext} from 'react'

// context
import {StoreContext} from '../Store'

// helper
import FUNCTIONS from '../_function'

const AddExpression = ({cat_id, setShowAdd}) => {
  const [text, setText] = useState('')
  const {onAddExpression} = useContext(StoreContext)

  const onSubmit = () => {
    if (!text) {
      alert('Expression cannot be empty')
      return
    }
    setShowAdd(false)
    onAddExpression(text, cat_id)
  }

  return (
    <div className='addCard'>
      <textarea
        placeholder='Add expression...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows='4'
      ></textarea>
      <div className='buttonGroup'>
        <button className='close' onClick={() => setShowAdd(false)}>
          CLOSE
        </button>
        <button className='add' onClick={onSubmit}>
          ADD NEW
        </button>
      </div>
    </div>
  )
}
export default AddExpression
