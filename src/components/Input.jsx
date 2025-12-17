import React from 'react';
import { cn } from '../lib/utils';

// Input 元件：封裝了標準的表單輸入框
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            // 使用 cn 合併樣式，處理 Focus 狀態、Placeholder 顏色和 Disabled 狀態
            className={cn(
                "flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-content-main placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});

Input.displayName = "Input";

export default Input;
