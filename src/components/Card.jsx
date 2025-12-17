import React from 'react';
import { cn } from '../lib/utils';

// Card 元件：使用 Compound Component 模式，讓使用者可以靈活組合內容
// className: 允許外部傳入額外的 Tailwind class
// hoverEffect: 控制滑鼠懸停效果 ('lift' | 'scale' | 'glow' | 'none')
export function Card({ className, children, hoverEffect = 'lift', ...props }) {
    // 定義不同 hover 效果對應的 Tailwind class
    const hoverStyles = {
        lift: 'hover:-translate-y-2 hover:shadow-lg', // 向上浮動 + 陰影加深
        scale: 'hover:scale-105',                     // 整體放大 5%
        glow: 'hover:shadow-[0_0_20px_rgba(76,157,176,0.3)] border-transparent hover:border-primary/20', // 發光邊框
        none: ''
    };

    return (
        <div
            className={cn(
                // 基礎樣式：白色背景、圓角、陰影、過渡動畫
                "bg-white rounded-xl p-6 shadow-md transition-all duration-300 border border-gray-100",
                // 根據 props 套用對應的 hover 樣式
                hoverStyles[hoverEffect],
                // 合併外部傳入的樣式 (如果有)
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

// CardHeader: 卡片標題區域容器
export function CardHeader({ className, children, ...props }) {
    return <div className={cn("mb-4", className)} {...props}>{children}</div>;
}

// CardTitle: 卡片標題文字 (預設使用主要內容色)
export function CardTitle({ className, children, ...props }) {
    return <h3 className={cn("text-xl font-bold text-content-main", className)} {...props}>{children}</h3>;
}

// CardContent: 卡片內文區域 (預設使用副內容色)
export function CardContent({ className, children, ...props }) {
    return <div className={cn("text-content-sub", className)} {...props}>{children}</div>;
}

export default Card;
