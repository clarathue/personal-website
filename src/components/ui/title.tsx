import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'page' | 'section';
  animate?: boolean;
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, as = 'h2', variant = 'section', animate = false, children, ...props }, ref) => {
    const Component = as;
    
    // Use variants if specified, otherwise just set size based on heading level
    let sizeClass = '';
    if (variant === 'page') {
      sizeClass = 'text-[clamp(1.875rem,5vw,3.5rem)]'; // Largest for page titles
    } else if (variant === 'section') {
      sizeClass = 'text-[clamp(1.5rem,4vw,2.5rem)]'; // Large for section titles
    } else {
      // Automatic sizing based on heading level
      if (as === 'h1') {
        sizeClass = 'text-[clamp(1.875rem,5vw,3.5rem)]'; // Largest (h1)
      } else if (as === 'h2') {
        sizeClass = 'text-[clamp(1.5rem,4vw,2.5rem)]'; // Large (h2)
      } else if (as === 'h3') {
        sizeClass = 'text-[clamp(1.25rem,3vw,1.875rem)]'; // Medium (h3)
      } else if (as === 'h4') {
        sizeClass = 'text-[clamp(1.125rem,2.5vw,1.5rem)]'; // Small (h4)
      } else {
        sizeClass = 'text-[clamp(1rem,2vw,1.25rem)]'; // Smallest (h5, h6)
      }
    }
    
    // Common styles for all headings
    const commonStyles = 'font-bold text-tech-gray-900 leading-tight max-w-full break-words hyphens-auto';
    
    if (animate) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={animate ? { opacity: 1, y: 0 } : {}}
          whileInView={!animate ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Component
            className={cn(sizeClass, commonStyles, className)}
            ref={ref}
            {...props}
          >
            {children}
          </Component>
        </motion.div>
      );
    }
    
    return (
      <Component
        className={cn(sizeClass, commonStyles, className)}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Title.displayName = "Title";

export { Title }; 