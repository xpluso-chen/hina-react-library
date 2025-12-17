import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AnimationShowcase from '../sections/AnimationShowcase';

// 動畫展示頁面：負責顯示各種 CSS/Tailwind 動畫效果
export default function AnimationsPage() {
    return (
        <div className="min-h-screen bg-accent/20">
            {/* Sticky Navigation Bar */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center text-content-sub hover:text-primary transition-colors">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        回首頁
                    </Link>
                    <h1 className="font-bold text-xl text-content-main">動畫效果</h1>
                    <div className="w-20" /> {/* 佔位符保持標題置中 */}
                </div>
            </div>
            {/* 引入 AnimationShowcase 區塊 */}
            <AnimationShowcase />
        </div>
    );
}
