import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AnimationShowcase from '../sections/AnimationShowcase';

export default function AnimationsPage() {
    return (
        <div className="min-h-screen bg-accent/20">
            <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center text-content-sub hover:text-primary transition-colors">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        回首頁
                    </Link>
                    <h1 className="font-bold text-xl text-content-main">動畫效果</h1>
                    <div className="w-20" /> {/* Spacer for centering */}
                </div>
            </div>
            <AnimationShowcase />
        </div>
    );
}
