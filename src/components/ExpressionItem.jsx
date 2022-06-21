import {BsXLg, BsFillVolumeUpFill} from 'react-icons/bs'
import {useSpeechSynthesis} from 'react-speech-kit'

const ExpressionItem = ({expression, removeExpression}) => {
  const {speak, speaking, voices} = useSpeechSynthesis()

  const voiceIt = async () => {
    // console.log(voices)
    await speak({
      text: expression.text,
      voice: voices[33],
    })
  }

  return (
    <div className={speaking ? 'speaking' : 'expression'}>
      <BsXLg
        className='icon'
        onClick={() => removeExpression(expression.exp_id)}
      />
      <span>{expression.text}</span>
      <button onClick={voiceIt}>
        <BsFillVolumeUpFill />
      </button>
    </div>
  )
}
export default ExpressionItem
