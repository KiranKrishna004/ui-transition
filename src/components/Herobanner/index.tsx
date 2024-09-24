import styles from './Herobanner.module.css'
import { motion } from 'framer-motion'
import img from '../../assets/Img1.png'
import { useState } from 'react'
import { BGComponent } from './BGComponent'

export const Herobanner = () => {
  const [count, setCount] = useState(0)
  const colors = [
    { c1: '#efca29', c2: '#1a1a15' },
    { c1: '#972826', c2: '#1A1A15' },
  ]
  const [isClick, setIsClicked] = useState(true)

  return (
    <div className={styles.container}>
      <BGComponent isClick={isClick} color={colors[count]} />
      <motion.div
        className={styles.imgContainer}
        initial={{ translateX: '50%', translateY: '-40%' }}
        animate={{ translateX: '-50%', translateY: '-40%' }}
        transition={{ duration: 1.25, type: 'spring' }}
      >
        <img src={img} className={styles.img} alt="banner img missing" />
      </motion.div>
      <div className={styles.titleContainer}>
        <motion.div
          initial={{ opacity: 0, translateY: 145, translateX: 10 }}
          animate={{ opacity: 1, translateY: 30, translateX: 15 }}
          transition={{ ease: 'easeInOut', delay: 0.75, duration: 0.5 }}
          className={styles.letsContainer}
        >
          Let's
        </motion.div>
        <div className={styles.raceContainer}>
          <motion.p
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: -15 }}
            transition={{ ease: 'easeInOut', delay: 0.75, duration: 0.5 }}
            className={styles.raceText}
          >
            R
          </motion.p>
          <motion.p
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: -15 }}
            transition={{ ease: 'easeInOut', delay: 0.85, duration: 0.5 }}
            className={styles.raceText}
          >
            A
          </motion.p>
          <motion.p
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: -15 }}
            transition={{ ease: 'easeInOut', delay: 0.95, duration: 0.5 }}
            className={styles.raceText}
          >
            C
          </motion.p>
          <motion.p
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: -15 }}
            transition={{ ease: 'easeInOut', delay: 1.05, duration: 0.5 }}
            className={styles.raceText}
          >
            E
          </motion.p>
        </div>
      </div>
      <motion.div
        className={styles.prevbtnContainer}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, ease: 'easeInOut' }}
      >
        <motion.button
          className={styles.btn}
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.9,
            color: 'white',
            borderColor: 'white',
          }}
          transition={{ duration: 0.25 }}
        >
          ↑
        </motion.button>
      </motion.div>

      <motion.div
        className={styles.nextbtnContainer}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, ease: 'easeInOut' }}
      >
        <motion.button
          onClick={() => {
            setIsClicked(true)
            const newCount = count === 3 ? 0 : count + 1
            setCount(count + 1)
          }}
          className={styles.btn}
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.9,
            color: 'white',
            borderColor: 'white',
          }}
          transition={{ duration: 0.25 }}
        >
          ↓
        </motion.button>
      </motion.div>
    </div>
  )
}
