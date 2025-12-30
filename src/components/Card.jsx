import React from 'react';
import { cn } from '../lib/utils';

// Card 元件：使用 Compound Component 模式，讓使用者可以靈活組合內容
// className: 允許外部傳入額外的 Tailwind class
// hoverEffect: 控制滑鼠懸停效果 ('lift' | 'scale' | 'glow' | 'none')
export default function Card({ className, children, hoverEffect = 'lift', ...props }) {
    // 定義不同 hover 效果對應的 Tailwind class
    const hoverStyles = {
        lift: 'hover:-translate-y-2 hover:shadow-lg', // 向上浮動 + 陰影加深
        scale: 'hover:scale-105',                     // 整體放大 5%
        glow: 'hover:shadow-[0_0_20px_rgba(76,157,176,0.3)] border-transparent hover:border-primary/20', // 發光邊框
        'flip-up': 'card-flip-up group border-primary bg-transparent',
        // 翻轉上升效果
        // 1. 'card-flip-up': 定義在 index.css 的動畫 class
        // 2. 'group': 讓子元素 (CardTitle, CardContent) 可以透過 'group-hover' 偵測到父層被 hover
        // 3. 'bg-transparent': 關鍵！將卡片本體設為透明，才能讓下方 index.css 做的偽元素動畫顯示出來 (不然會被原本的白底擋住)
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
    // 加入 group-hover:text-white 以支援 flip-up 效果
    // 當父層 (group) 被 hover 時，這裡的文字會變成白色，確保在藍綠色翻轉背景上看得清楚
    return <h3 className={cn("text-xl font-bold text-content-main group-hover:text-white transition-colors duration-300", className)} {...props}>{children}</h3>;
}

// CardContent: 卡片內文區域 (預設使用副內容色)
export function CardContent({ className, children, ...props }) {
    // 加入 group-hover:text-white 以支援 flip-up 效果
    // 同理，當 Flip Up 效果觸發背景變深色時，內文也要變白
    return <div className={cn("text-content-sub group-hover:text-white/90 transition-colors duration-300", className)} {...props}>{children}</div>;
}

export { Card };
// 非必要，只是為了看起來更整齊，確保與其他子元件一致的 Named Import 風格，--> import { Card, CardTitle, CardContent } from './components/Card';
// 因為有 export default，如果沒有 export { Card } -> import Card, { CardTitle, CardContent } from './components/Card';
