import { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
const SingleQuestion = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(true)
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
      </header>
      {showInfo &&<p>{info}</p>}
    </article>
  )
}
export default SingleQuestion