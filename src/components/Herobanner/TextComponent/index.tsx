import { motion } from 'framer-motion'
import { useMediaQuery } from '@mantine/hooks'
import styles from './TextComponent.module.css'

export const TextComponent = () => {
  const isDesktop = useMediaQuery('(min-width: 1000px)')
  const isMobile = useMediaQuery('(max-width: 500px)')
  const isTab1 = useMediaQuery('(min-width: 500px) and (max-width: 800px)')
  const isTab2 = useMediaQuery('(min-width: 800px) and (max-width: 1000px)')

  console.log(isTab1)
  const letsVariants = isDesktop
    ? {
        initial: { opacity: 0, translateY: 145, translateX: 10 },
        animate: {
          opacity: 1,
          translateY: 30,
          translateX: 15,
        },
      }
    : isMobile
    ? {
        initial: { opacity: 0, translateY: 145, translateX: 5 },
        animate: {
          opacity: 1,
          translateY: -10,
          translateX: 5,
        },
      }
    : isTab1
    ? {
        initial: { opacity: 0, translateY: 145, translateX: 5 },
        animate: {
          opacity: 1,
          translateY: -20,
          translateX: 5,
        },
      }
    : isTab2
    ? {
        initial: { opacity: 0, translateY: 145, translateX: 5 },
        animate: {
          opacity: 1,
          translateY: 0,
          translateX: 5,
        },
      }
    : {}

  const raceVariants = isDesktop
    ? {
        initial: { opacity: 0, translateY: 100 },
        animate: {
          opacity: 1,
          translateY: -15,
          transition: { ease: 'easeInOut', delay: 0.75, duration: 0.5 },
        },
      }
    : isMobile
    ? {
        initial: { opacity: 0, translateY: 40 },
        animate: {
          opacity: 1,
          translateY: -20,
        },
      }
    : isTab1
    ? {
        initial: { opacity: 0, translateY: 50 },
        animate: {
          opacity: 1,
          translateY: -25,
        },
      }
    : {}

  if (
    isDesktop !== undefined &&
    isMobile !== undefined &&
    isTab1 !== undefined &&
    isTab2 !== undefined
  ) {
    console.log(raceVariants)
    return (
      <div className={styles.titleContainer}>
        <motion.div
          variants={letsVariants}
          initial="initial"
          animate="animate"
          transition={{ ease: 'easeInOut', delay: 0.75, duration: 0.5 }}
          className={styles.letsContainer}
        >
          Let's
        </motion.div>
        <div className={styles.raceContainer}>
          <motion.p
            variants={raceVariants}
            initial="initial"
            animate="animate"
            transition={{ ease: 'easeInOut', delay: 0.75, duration: 0.5 }}
            className={styles.raceText}
          >
            R
          </motion.p>
          <motion.p
            variants={raceVariants}
            initial="initial"
            animate="animate"
            transition={{ ease: 'easeInOut', delay: 0.85, duration: 0.5 }}
            className={styles.raceText}
          >
            A
          </motion.p>
          <motion.p
            variants={raceVariants}
            initial="initial"
            animate="animate"
            transition={{ ease: 'easeInOut', delay: 0.95, duration: 0.5 }}
            className={styles.raceText}
          >
            C
          </motion.p>
          <motion.p
            variants={raceVariants}
            initial="initial"
            animate="animate"
            transition={{ ease: 'easeInOut', delay: 1.05, duration: 0.5 }}
            className={styles.raceText}
          >
            E
          </motion.p>
        </div>
      </div>
    )
  }
}
