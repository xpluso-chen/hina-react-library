import React from 'react';
import { cn } from '../lib/utils';

const Button = React.forwardRef(({
    className,
    variant = 'solid',
    size = 'md',
    children,
    ...props
}, ref) => {
    const variants = {
        solid: 'bg-primary text-white hover:bg-secondary shadow-sm hover:shadow-md hover:-translate-y-0.5',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
        ghost: 'text-primary hover:bg-gray-100',
        soft: 'bg-blue-100 text-primary hover:bg-blue-200',
        link: 'text-primary hover:underline underline-offset-4 p-0 h-auto'
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-6 py-3 text-lg'
    };

    return (
        <button
            ref={ref}
            className={cn(
                'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
                variants[variant],
                variant !== 'link' && sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;
