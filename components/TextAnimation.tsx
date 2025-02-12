"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

interface TextAnimationProps {
  text: string
  delay?: number
  speed?: number
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text, delay = 0, speed = 0.05 }) => {
  const controls = useAnimation()
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const animateText = async () => {
      await controls.start({ opacity: 1, transition: { duration: 0.5 } })

      for (let i = 0; i <= text.length; i++) {
        timeout = setTimeout(
          () => {
            setDisplayedText(text.slice(0, i))
          },
          i * speed * 1000,
        )
      }
    }

    const delayedAnimation = setTimeout(() => {
      animateText()
    }, delay * 1000)

    return () => {
      clearTimeout(delayedAnimation)
      clearTimeout(timeout)
    }
  }, [text, delay, speed, controls])

  return (
    <motion.span initial={{ opacity: 0 }} animate={controls}>
      {displayedText}
    </motion.span>
  )
}

export default TextAnimation

