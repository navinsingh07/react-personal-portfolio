import { motion } from "framer-motion"
import '../assets/styles/framer.css'

const FramerEx1 = () => (
    <div className="outerframe">
  <motion.div
  className="box1"
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
  />
  </div>
)

export default FramerEx1;