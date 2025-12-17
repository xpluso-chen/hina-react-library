import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ComponentShowcase from '../sections/ComponentShowcase';

// 元件展示頁面：負責顯示所有基礎 UI 元件
export default function ComponentsPage() {
    return (
        // 外層容器：設定最小高度和背景色(使用 accent 色的淡化版本)
        <div className="min-h-screen bg-accent/20">
            {/* Sticky Header: 頁面捲動時固定在頂部 */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        回首頁
                    </Link>
                    <h1 className="font-bold text-xl text-gray-800">元件展示</h1>
                    <div className="w-20" /> {/* 用於保持 Flex 佈局平衡的佔位元素 */}
                </div>
            </div>
            {/* 引入 ComponentShowcase 區塊 */}
            <ComponentShowcase />
        </div>
    );
}
