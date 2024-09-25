import { motion } from 'framer-motion'
import { useMediaQuery } from '@mantine/hooks'
import styles from './TextComponent.module.css'

export const TextComponent = () => {
  const getMediaState = () => {
    const isDesktop = useMediaQuery('(min-width: 1000px)')
    const isMobile = useMediaQuery('(max-width: 500px)')
    const isTab1 = useMediaQuery('(min-width: 500px) and (max-width: 800px)')
    const isTab2 = useMediaQuery('(min-width: 800px) and (max-width: 1000px)')
    return { isDesktop, isMobile, isTab1, isTab2 }
  }

  const { isDesktop, isMobile, isTab1, isTab2 } = getMediaState()

  const baseVariants = {
    initial: { opacity: 0, translateY: 145, translateX: 5 },
    animate: { opacity: 1, translateY: 30, translateX: 5 },
  }

  const letsVariants = isDesktop
    ? {
        initial: { ...baseVariants.initial, translateX: 10 },
        animate: { ...baseVariants.animate, translateY: 30, translateX: 15 },
      }
    : isMobile
    ? { ...baseVariants, animate: { ...baseVariants.animate, translateY: -10 } }
    : isTab1
    ? {
        ...baseVariants,
        animate: { ...baseVariants.animate, translateY: -20, translateX: 5 },
      }
    : isTab2
    ? { ...baseVariants, animate: { ...baseVariants.animate, translateY: 0 } }
    : baseVariants

  const raceVariants = {
    initial: { opacity: 0, translateY: isDesktop ? 100 : isMobile ? 40 : 50 },
    animate: {
      opacity: 1,
      translateY: isDesktop ? -15 : isMobile ? -20 : -25,
    },
  }

  if (
    isDesktop !== undefined &&
    isMobile !== undefined &&
    isTab1 !== undefined &&
    isTab2 !== undefined
  ) {
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
          {['R', 'A', 'C', 'E'].map((letter, index) => (
            <motion.p
              key={letter}
              variants={raceVariants}
              initial="initial"
              animate="animate"
              transition={{
                ease: 'easeInOut',
                delay: 0.75 + index * 0.1,
                duration: 0.5,
              }}
              className={styles.raceText}
            >
              {letter}
            </motion.p>
          ))}
        </div>
      </div>
    )
  }

  return null
}
