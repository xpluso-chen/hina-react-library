import React from 'react';
import { cn } from '../lib/utils';

// Button 元件：封裝了應用程式中的標準按鈕樣式
// variant: 按鈕風格 ('solid' | 'outline' | 'ghost' | 'soft' | 'link')
// size: 按鈕尺寸 ('sm' | 'md' | 'lg')
const Button = React.forwardRef(({
    className,
    variant = 'solid',
    size = 'md',
    children,
    ...props
}, ref) => {
    // 定義各個 variant 對應的 Tailwind CSS class
    const variants = {
        solid: 'bg-primary text-white hover:bg-secondary shadow-sm hover:shadow-md hover:-translate-y-0.5', // 實心背景 (主要按鈕)
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white', // 只有邊框 (次要按鈕)
        ghost: 'text-primary hover:bg-gray-100', // 無背景 (適合放在卡片內或簡單操作)
        soft: 'bg-blue-100 text-primary hover:bg-blue-200', // 柔和背景 (強調但不搶眼)
        link: 'text-primary hover:underline underline-offset-4 p-0 h-auto' // 像連結一樣的按鈕
    };

    // 定義各個 size 對應的 padding 和字體大小
    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-6 py-3 text-lg'
    };

    return (
        <button
            ref={ref} // 支援 ref 轉發，方便與其他函式庫整合
            className={cn(
                // 基礎樣式：Flex 布局、圓角、過渡動畫、點擊縮放效果
                'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
                variants[variant], // 套用風格樣式
                variant !== 'link' && sizes[size], // 如果不是連結風格，則套用尺寸樣式
                className // 允許外部 class 覆蓋
            )}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;
