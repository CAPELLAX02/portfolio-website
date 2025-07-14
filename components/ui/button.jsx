import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap text-base font-semibold ring-offset-white transition-all',
    {
        variants: {
            variant: {
                default: 'bg-black text-primary hover:bg-indigo-600',
                primary: 'bg-primary text-white hover:bg-indigo-600',
                outline:
                    'border border-black bg-transparent text-black hover:bg-black hover:text-primary',
            },
            size: {
                default: 'h-[40px] px-5',
                md: 'h-[48px] px-5',
                lg: 'h-[56px] px-6 text-sm uppercase tracking-[2px]',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

const Button = React.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
