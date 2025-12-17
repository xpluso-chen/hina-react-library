import React from 'react';
import Button from '../components/Button';
import Card, { CardTitle, CardContent, CardHeader } from '../components/Card';
import Input from '../components/Input';
import { MousePointer, Layout, CreditCard, Send } from 'lucide-react';

export default function ComponentShowcase() {
    return (
        <section className="py-12 px-4 max-w-7xl mx-auto space-y-16">
            {/* Buttons Section */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-content-main border-l-4 border-primary pl-4">按鈕風格 (Button Styles)</h2>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 space-y-8">

                    {/* 範例：展示不同 Variant (Solid, Outline, Ghost...) */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Variants</h3>
                        <div className="flex flex-wrap gap-4 items-center">
                            {/* 使用 variant prop 切換樣式 */}
                            <Button variant="solid">Primary / Solid</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="soft">Soft</Button>
                            <Button variant="link">Link Style</Button>
                        </div>
                    </div>

                    {/* 範例：展示不同 Size */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Sizes</h3>
                        <div className="flex flex-wrap gap-4 items-end">
                            {/* 使用 size prop 切換大小 */}
                            <Button size="sm">Small</Button>
                            <Button size="md">Medium</Button>
                            <Button size="lg">Large</Button>
                        </div>
                    </div>

                    {/* Icons Row */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">With Icons</h3>
                        <div className="flex flex-wrap gap-4">
                            <Button>
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                            </Button>
                            <Button variant="outline">
                                Next Step
                                <MousePointer className="w-4 h-4 ml-2" />
                            </Button>
                            <Button variant="soft" className="w-10 h-10 p-0 rounded-full">
                                <Layout className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-content-main border-l-4 border-primary pl-4">卡片效果 (Card Effects)</h2>
                <div className="grid md:grid-cols-3 gap-8">

                    <Card hoverEffect="lift">
                        <CardHeader className="flex items-center gap-3">
                            <div className="bg-blue-100 p-3 rounded-lg text-primary">
                                <Layout className="w-6 h-6" />
                            </div>
                            <CardTitle>向上浮動 (Lift)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Hover 時卡片會向上位移並加深陰影，適合用於強調可點擊的區塊或服務項目。
                        </CardContent>
                    </Card>

                    <Card hoverEffect="scale">
                        <CardHeader className="flex items-center gap-3">
                            <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <CardTitle>微幅縮放 (Scale)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Hover 時整體輕微放大，創造出更強烈的互動回饋感，適合相片集或產品展示。
                        </CardContent>
                    </Card>

                    <Card hoverEffect="glow">
                        <CardHeader className="flex items-center gap-3">
                            <div className="bg-teal-100 p-3 rounded-lg text-teal-600">
                                <MousePointer className="w-6 h-6" />
                            </div>
                            <CardTitle>發光邊框 (Glow)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Hover 時產生淡淡的光暈效果，科技感十足，適合用於強調重點數據或特色功能。
                        </CardContent>
                    </Card>

                </div>
            </div>

            {/* Input Section */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-content-main border-l-4 border-primary pl-4">表單輸入 (Input Fields)</h2>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <label className="text-sm font-medium text-content-main">基本輸入框 (Focus Ring)</label>
                        <Input placeholder="請輸入文字..." />
                        <p className="text-xs text-content-sub">Focus 時會有藍色光暈與邊框變化</p>
                    </div>
                    <div className="space-y-4">
                        <label className="text-sm font-medium text-content-main">Email 輸入</label>
                        <Input type="email" placeholder="example@company.com" />
                    </div>
                </div>
            </div>
        </section>
    );
}
