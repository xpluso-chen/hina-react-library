import React from 'react';
import { cn } from '../lib/utils';

export function Card({ className, children, hoverEffect = 'lift', ...props }) {
    const hoverStyles = {
        lift: 'hover:-translate-y-2 hover:shadow-lg',
        scale: 'hover:scale-105',
        glow: 'hover:shadow-[0_0_20px_rgba(0,86,179,0.3)] border-transparent hover:border-primary/20',
        none: ''
    };

    return (
        <div
            className={cn(
                "bg-white rounded-xl p-6 shadow-md transition-all duration-300 border border-gray-100",
                hoverStyles[hoverEffect],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ className, children, ...props }) {
    return <div className={cn("mb-4", className)} {...props}>{children}</div>;
}

export function CardTitle({ className, children, ...props }) {
    return <h3 className={cn("text-xl font-bold text-content-main", className)} {...props}>{children}</h3>;
}

export function CardContent({ className, children, ...props }) {
    return <div className={cn("text-content-sub", className)} {...props}>{children}</div>;
}

export default Card;
