import styles from './Herobanner.module.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { BGComponent } from './BGComponent'
import { CarImgComponent } from './CarImgComponent'

export const Herobanner = () => {
  const [count, setCount] = useState(0)
  const carsArray = [
    {
      c1: '#efca29',
      c2: '#1a1a15',
      carImg: '/img1.png',
    },
    { c1: '#972826', c2: '#1a1a15', carImg: '/img2.png' },
    { c1: '#00D2FA', c2: '#1a1a15', carImg: '/img3.png' },
  ]

  return (
    <div className={styles.container}>
      <BGComponent color={carsArray[count]} />
      <CarImgComponent car={carsArray[count].carImg} />
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
            color: '#ffffff',
            borderColor: '#ffffff',
          }}
          transition={{ duration: 0.25 }}
          onClick={() => {
            const newCount = count === 0 ? 2 : count - 1
            setCount(newCount)
          }}
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
            const newCount = count === 2 ? 0 : count + 1
            setCount(newCount)
          }}
          className={styles.btn}
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.9,
            color: '#ffffff',
            borderColor: '#ffffff',
          }}
          transition={{ duration: 0.25 }}
        >
          ↓
        </motion.button>
      </motion.div>
    </div>
  )
}
