import { motion } from 'framer-motion'
import styles from './BGComponent.module.css'

export const BGComponent = ({
  isClick,
  color,
}: {
  isClick: boolean
  color: { c1: string; c2: string }
}) => {
  return (
    <div className={styles.gridContainer}>
      <motion.div
        initial={{ scaleY: 0, backgroundColor: 'white' }}
        animate={{ scaleY: isClick ? 1 : 0, backgroundColor: color.c1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: 'easeIn', delay: 0.25 }}
        className={styles.item1}
      />
      <motion.div
        initial={{ scaleY: 0, backgroundColor: 'white' }}
        animate={{ scaleY: isClick ? 1 : 0, backgroundColor: color.c2 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: 'easeIn', delay: 0.25 }}
        className={styles.item2}
      />
    </div>
  )
}
