import { motion, AnimatePresence } from 'framer-motion'
import styles from './BGComponent.module.css'

export const BGComponent = ({
  color,
}: {
  color: { carImg: string; c1: string; c2: string }
}) => {
  const c2Variants = {
    initial: {
      scaleY: 0,
      backgroundColor: color.c2,
      originY: 1,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
        delay: 0.25,
        originY: 1,
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
        delay: 0.25,
        originY: 0,
      },
    },
  }

  const c1Variants = {
    initial: {
      scaleY: 0,
      backgroundColor: color.c1,
      originY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
        delay: 0.25,
        originY: 0,
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
        delay: 0.25,
        originY: 1,
      },
    },
  }

  return (
    <div className={styles.gridContainer}>
      <AnimatePresence mode="wait">
        <motion.div
          variants={c1Variants}
          key={color.c1}
          initial="initial"
          animate="animate"
          exit="exit"
          className={styles.item1}
        />
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={color.c1}
          variants={c2Variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={styles.item2}
        />
      </AnimatePresence>
    </div>
  )
}
