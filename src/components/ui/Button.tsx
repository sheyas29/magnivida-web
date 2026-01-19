'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { HTMLMotionProps, motion } from 'framer-motion';
import * as React from 'react';

// 1. Define Variants using CVA
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-black hover:bg-primary/90 shadow-[0_0_15px_rgba(0,240,255,0.3)]', // Neon Glow
        outline:
          'border border-surface-200 bg-transparent hover:bg-surface-100 text-foreground',
        ghost: 'hover:bg-surface-100 hover:text-primary',
      },
      size: {
        default: 'h-12 px-8 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-14 rounded-md px-10 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// 2. Define Props Interface
export interface ButtonProps
  extends
    HTMLMotionProps<'button'>, // Inherit Motion props for animation
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// 3. The Component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
