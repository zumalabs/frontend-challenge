import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam, faFrownOpen } from '@fortawesome/free-solid-svg-icons'
import Confetti from 'react-confetti'

const TickableJS = ({ value }) => {

  //! 🐸

  // store tick in state, to compare it on later update
  const [tick, setTick] = useState(value)

  const smile = <FontAwesomeIcon icon={faSmileBeam} size="2x" />
  const frown = <FontAwesomeIcon icon={faFrownOpen} size="2x" />

  const [confetti, setConfetti] = useState(false)
  const [bg, setBg] = useState('transparent')
  const [emoji, setEmoji] = useState(null)


  // checking if the ticker update is an increase or decrease.
  useEffect(() => {

    if (Number(value) > Number(tick)) {
      setTick(value)
      setConfetti(true)
      setBg('rgb(15, 209, 4)')
      setEmoji(smile)

      // remove the highlighting to bring back the resting state
      setTimeout(() => {
        setConfetti(false)
        setBg('transparent')
        setEmoji(null)
      }, 2000)

    }
    if (Number(value) < Number(tick)) {
      setTick(value)

      setBg('rgb(255, 69, 69)')
      setEmoji(frown)

      setTimeout(() => {
        setBg('transparent')
        setEmoji(null)
      }, 2000)
    }

  }, [value])

  return (

    <div className="ticker-container" style={{ backgroundColor: bg }} >

      {emoji}
      <p data-testid="ticker" className="ticker-value">{value}</p>
      {emoji}

      {confetti && <Confetti gravity={0.3} width={400} />}

    </div >
  )
}

export default TickableJS;