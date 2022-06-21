import {useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

// mock
import {expression_data} from '../data'

// context
import {StoreContext} from '../Store'

// helper
import FUNCTIONS from '../_function'

// components
import ExpressionItem from '../components/ExpressionItem'
import AddExpression from '../components/AddExpression'

const Category = () => {
  let {cat_id} = useParams()
  const [showAdd, setShowAdd] = useState(false)

  const {expressions, onAddExpressions, onRemoveExpression} =
    useContext(StoreContext)

  const removeExpression = (exp_id) => {
    onRemoveExpression(exp_id)
  }

  useEffect(() => {
    if (!FUNCTIONS.localStorageExists('voiceUp_exppressions')) {
      onAddExpressions(expression_data)
      FUNCTIONS.setToLocalStorage('voiceUp_exppressions', expression_data)
    } else {
      onAddExpressions(FUNCTIONS.getFromLocalStorage('voiceUp_exppressions'))
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      FUNCTIONS.setToLocalStorage('voiceUp_exppressions', expressions)
    }, 500)
  }, [expressions])

  return (
    <>
      <div className='categoryPage'>
        {expressions
          .filter((expression) => expression.cat_id == cat_id)
          .map((expression, index) => (
            <ExpressionItem
              key={index}
              expression={expression}
              removeExpression={removeExpression}
            />
          ))}
      </div>

      {showAdd && <AddExpression cat_id={cat_id} setShowAdd={setShowAdd} />}

      <button className='addButton' onClick={() => setShowAdd(!showAdd)}>
        ADD +
      </button>
    </>
  )
}
export default Category
