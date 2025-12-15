import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Stars, ArrowRight } from 'lucide-react';

export default function Home() {
    return (
        <div className="min-h-screen bg-accent/30 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-5xl font-bold text-content-main">
                        前端元件庫 <span className="text-primary">Library</span>
                    </h1>
                    <p className="text-xl text-content-sub">
                        選擇您想瀏覽的主題
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Components Link Card */}
                    <Link to="/components" className="group">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 hover:-translate-y-2 h-full flex flex-col items-center text-center space-y-6">
                            <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <Layout className="w-12 h-12" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-content-main mb-2">元件展示</h2>
                                <p className="text-content-sub">
                                    瀏覽各式按鈕、卡片與輸入框等基礎 UI 元件的風格與互動設計。
                                </p>
                            </div>
                            <div className="mt-auto pt-4 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                前往瀏覽 <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </div>
                    </Link>

                    {/* Animations Link Card */}
                    <Link to="/animations" className="group">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 hover:-translate-y-2 h-full flex flex-col items-center text-center space-y-6">
                            <div className="p-4 bg-orange-100 rounded-full text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                <Stars className="w-12 h-12" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-content-main mb-2">動畫效果</h2>
                                <p className="text-content-sub">
                                    體驗 Fade In、Hover 特效、毛玻璃等多樣化的 CSS/Tailwind 動畫展示。
                                </p>
                            </div>
                            <div className="mt-auto pt-4 flex items-center text-orange-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                前往瀏覽 <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
