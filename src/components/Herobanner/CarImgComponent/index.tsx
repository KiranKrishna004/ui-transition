import { AnimatePresence, motion } from 'framer-motion'
import styles from './CarImgComponent.module.css'

export const CarImgComponent = ({ car }: { car: string }) => {
  const variants = {
    initial: { translateX: '50%', translateY: '-40%' },
    animate: {
      translateX: '-50%',
      transition: { duration: 1.25, type: 'spring' },
    },
    exit: {
      translateX: '-200%',
      transition: { duration: 1, type: 'spring' },
    },
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={car}
        variants={variants}
        className={styles.imgContainer}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <img src={car} className={styles.img} alt="banner img missing" />
      </motion.div>
    </AnimatePresence>
  )
}
