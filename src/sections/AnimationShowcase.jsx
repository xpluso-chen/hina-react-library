import React, { useState } from 'react';
import { RefreshCw, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import Button from '../components/Button';

export default function AnimationShowcase() {
    const [replayFade, setReplayFade] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className="py-12 px-4 max-w-7xl mx-auto space-y-16">
            <h2 className="text-3xl font-bold text-content-main border-l-4 border-primary pl-4">動畫效果整理 (Animations)</h2>

            {/* 1. Keyframes: Fade In (使用 Keyframes 定義進場動畫) */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-content-main flex items-center gap-2">
                        1. 關鍵幀動畫 (Keyframes - Fade In)
                    </h3>
                    <p className="text-content-sub">點擊按鈕重新播放進場動畫</p>
                    <div className="p-8 bg-white/50 border border-accent/20 rounded-xl flex flex-col items-center justify-center min-h-[200px] relative overflow-hidden">
                        {/* 透過 key 屬性強制 React 重新渲染元件，觸發動畫重播 */}
                        <div
                            key={replayFade}
                            // animate-fadeIn: 對應到 tailwind.config.js 中定義的 animation
                            className="bg-white p-6 rounded-lg shadow-md animate-fadeIn text-center"
                        >
                            <h4 className="font-bold text-lg mb-2 text-content-main">Hello, Animation!</h4>
                            <p className="text-content-sub">我是一個淡入的區塊</p>
                        </div>
                        <Button
                            size="sm"
                            variant="outline"
                            className="absolute bottom-4 right-4"
                            onClick={() => setReplayFade(prev => prev + 1)}
                        >
                            <RefreshCw className="w-4 h-4 mr-2" /> 重新播放
                        </Button>
                    </div>
                </div>

                {/* 2. Transitions: Underline & Hamburger (使用 transition 與 transform) */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-content-main">
                        2. 過渡與變形 (Transitions & Transforms)
                    </h3>
                    <div className="p-8 bg-white border border-gray-200 rounded-xl space-y-8">

                        {/* Underline Effect */}
                        <div className="space-y-2">
                            <span className="text-sm text-content-sub uppercase font-bold">Nav Link Underline</span>
                            <nav className="flex gap-6">
                                {['首頁', '關於我們', '服務項目'].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        onClick={(e) => e.preventDefault()}
                                        className="relative text-content-main font-medium hover:text-primary transition-colors duration-300 group"
                                    >
                                        {item}
                                        {/* 底線動畫：初始寬度為 0，Hover 時寬度變為 100% */}
                                        <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Hamburger Menu (漢堡選單變形) */}
                        <div className="space-y-2 border-t pt-6">
                            <span className="text-sm text-content-sub uppercase font-bold">Hamburger Menu Animation</span>
                            <div className="flex items-center gap-4">
                                <button
                                    className="w-10 h-10 relative focus:outline-none"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    <div className="block w-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <span
                                            aria-hidden="true"
                                            className={cn(
                                                "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out bg-gray-800",
                                                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                                            )}
                                        ></span>
                                        <span
                                            aria-hidden="true"
                                            className={cn(
                                                "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out bg-gray-800",
                                                isMenuOpen ? "opacity-0" : "opacity-100"
                                            )}
                                        ></span>
                                        <span
                                            aria-hidden="true"
                                            className={cn(
                                                "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out bg-gray-800",
                                                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                                            )}
                                        ></span>
                                    </div>
                                </button>
                                <span className="text-sm text-gray-500">
                                    {isMenuOpen ? 'Menu Open (Cross)' : 'Menu Closed (Bars)'} - Try Clicking!
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 3. Special Effects */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-content-main">3. 特殊效果 (Special Effects)</h3>
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Glassmorphism */}
                    <div className="relative h-64 rounded-xl overflow-hidden flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center">
                        <div className="absolute inset-0 bg-black/20" /> {/* Overlay */}
                        <div className="relative z-10 p-6 rounded-xl border border-white/20 bg-white/30 backdrop-blur-md shadow-xl text-white max-w-xs text-center">
                            <h4 className="font-bold text-xl mb-2">Glassmorphism</h4>
                            <p className="text-sm text-white/90">毛玻璃效果 (Backdrop Blur)</p>
                            <Button size="sm" variant="outline" className="mt-4 border-white/50 text-white hover:bg-white hover:text-black">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Gradients */}
                    <div className="h-64 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg p-8">
                        <div className="text-center space-y-4">
                            <h4 className="text-3xl font-bold">Gradient Background</h4>
                            <p className="opacity-90">Linear Gradient (Indigo &rarr; Pink)</p>
                            <div className="inline-block px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm mt-2">
                                CSS: bg-gradient-to-br
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
