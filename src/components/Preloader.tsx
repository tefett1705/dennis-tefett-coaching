import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  isLoading: boolean
}

export default function Preloader({ isLoading }: PreloaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-3xl md:text-4xl font-serif font-semibold tracking-wide">
              <span className="text-text-primary">Dennis</span>
              <span className="text-gradient-gold ml-2">Tefett</span>
            </div>
            <div className="h-0.5 w-16 bg-gradient-to-r from-teal to-gold rounded-full" />
            <div className="text-xs tracking-[0.3em] uppercase text-text-secondary font-light">
              Executive Coaching
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
