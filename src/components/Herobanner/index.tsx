import styles from './Herobanner.module.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { BGComponent } from './BGComponent'
import { CarImgComponent } from './CarImgComponent'
import { TextComponent } from './TextComponent'

export const Herobanner = () => {
  const [count, setCount] = useState(0)
  const carsArray = [
    { c1: '#efca29', c2: '#1a1a15', carImg: '/img1.png' },
    { c1: '#972826', c2: '#1a1a15', carImg: '/img2.png' },
    { c1: '#00D2FA', c2: '#1a1a15', carImg: '/img3.png' },
  ]

  return (
    <div className={styles.container}>
      <BGComponent color={carsArray[count]} />
      <CarImgComponent car={carsArray[count].carImg} />

      <TextComponent />

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
