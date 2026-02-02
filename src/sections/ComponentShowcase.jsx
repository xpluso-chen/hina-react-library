import React from 'react';
import Button from '../components/Button';
import Card, { CardTitle, CardContent, CardHeader } from '../components/Card';
import Input from '../components/Input';
import { MousePointer, Layout, CreditCard, Send } from 'lucide-react';

export default function ComponentShowcase() {
    return (
        <section className="py-12 px-4 max-w-7xl mx-auto space-y-16">
            {/* 1. 按鈕展示區塊 */}
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

            {/* 2. 字體展示區塊 */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-content-main border-l-4 border-primary pl-4">字體預覽 (Typography)</h2>
                <div className="grid md:grid-cols-2 gap-8">

                    {/* 一、常用字體 */}
                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 space-y-6">
                        <h3 className="text-xl font-bold text-content-main border-b pb-2 mb-4">一、常用字體 (Common)</h3>

                        <div className="space-y-2">
                            <span className="text-sm text-gray-400 uppercase tracking-wider font-bold">1. 中文 (思源黑體Noto Sans TC)</span>
                            <div className="font-sans-tc text-content-main text-lg border-l-4 border-accent pl-3 py-1">
                                不怕的人前面才有路。<br />
                                <span className="text-base opacity-75">通用性高，適合內文與介面。</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-sm text-gray-400 uppercase tracking-wider font-bold">2. 英文 (Roboto)</span>
                            <div className="font-roboto text-content-main text-lg border-l-4 border-accent pl-3 py-1">
                                Modern design comes from attention to detail.<br />
                                <span className="text-base opacity-75">簡潔、幾何感且易讀。</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-sm text-gray-400 uppercase tracking-wider font-bold">3. 英文 (Lexend)</span>
                            <div className="font-lexend text-content-main text-lg border-l-4 border-accent pl-3 py-1">
                                Designed to reduce visual stress.<br />
                                <span className="text-base opacity-75">變體寬度，適合閱讀，也適合當範本的示意文字。</span>
                            </div>
                        </div>
                    </div>

                    {/* 二、特殊字體 */}
                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 space-y-6">
                        <h3 className="text-xl font-bold text-content-main border-b pb-2 mb-4">二、特殊字體 (Special)</h3>

                        <div className="space-y-2">
                            <span className="text-sm text-gray-400 uppercase tracking-wider font-bold">1. 中文 (思源宋體Noto Serif TC)</span>
                            <div className="font-serif-tc text-content-main text-lg border-l-4 border-primary pl-3 py-1 font-normal">
                                不怕的人前面才有路。<br />
                                <span className="text-base opacity-75">適合標題、引言或強調人文氣息。</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-sm text-gray-400 uppercase tracking-wider font-bold">2. 英文 (Playfair Display)</span>
                            <div className="font-playfair text-content-main text-xl border-l-4 border-primary pl-3 py-1 italic">
                                "Elegance is the only beauty that never fades."<br />
                                <span className="text-base opacity-75 not-italic font-sans">適合奢華感的標題與展示。</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-sm text-gray-400 uppercase tracking-wider font-bold">3. 英文 (Oswald)</span>
                            <div className="font-oswald text-content-main text-xl border-l-4 border-primary pl-3 py-1 uppercase tracking-wide">
                                Bold & Condensed Style<br />
                                <span className="text-base opacity-75 normal-case tracking-normal font-sans">適合具衝擊力的標題。</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-sm text-gray-400 uppercase tracking-wider font-bold">4. 英文 (Anton)</span>
                            <div className="font-anton text-content-main text-2xl border-l-4 border-primary pl-3 py-1 tracking-wider">
                                IMPACTFUL HEADLINE<br />
                                <span className="text-base opacity-75 font-sans tracking-normal">傳統廣告風格。</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-sm text-gray-400 uppercase tracking-wider font-bold">5. 英文 (Barlow Condensed)</span>
                            <div className="font-barlow text-content-main text-xl border-l-4 border-primary pl-3 py-1 font-medium">
                                Clean and low-contrast geometric.<br />
                                <span className="text-base opacity-75">具工業風與機構感的視覺效果。</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <span className="text-sm text-gray-400 uppercase tracking-wider font-bold">6. 英文 (Alegreya Sans)</span>
                            <div className="font-alegreya text-content-main text-xl border-l-4 border-primary pl-3 py-1">
                                A humanist sans-serif with a calligraphic feel.<br />
                                <span className="text-base opacity-75">介於無襯線字體與襯線字體之間，專為長文閱讀與文學設計。</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* 3. 卡片展示區塊 */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-content-main border-l-4 border-primary pl-4">卡片效果 (Card Effects)</h2>
                <div className="grid md:grid-cols-3 gap-8">

                    {/* 範例: 向上浮動效果 (Lift) */}
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

                    {/* 範例: 微幅縮放效果 (Scale) */}
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

                    {/* 範例: 發光效果 (Glow) */}
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

                    {/* 範例: 翻轉填充效果 (Flip Up) */}
                    <Card hoverEffect="flip-up">
                        <CardHeader className="flex items-center gap-3">
                            <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                                <Send className="w-6 h-6" />
                            </div>
                            <CardTitle>翻轉填充 (Flip Up)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Hover 時背景色從底部向上填充，文字反白，模仿經典按鈕互動，提供強烈的視覺回饋。
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

            {/* 5. 彈窗樣式 */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-content-main border-l-4 border-primary pl-4">彈窗樣式</h2>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 grid md:grid-cols-2 gap-8">

                    {/* Style A: 無右上角叉叉 */}
                    <div className="space-y-6">
                        <h3 className="font-semibold text-gray-400 uppercase tracking-wider border-b pb-2">樣式 A (無叉叉)</h3>

                        {/* A-1: 標題 + 內文 + 確認按鈕 */}
                        <div className="space-y-2">
                            <span className="text-xs text-primary font-medium block mb-1">A-1: 標題 + 內文 + 確認按鈕(基礎確認)</span>
                            <div className="bg-gray-50 p-6 rounded-xl flex justify-center items-center">
                                <Dialog
                                    title="確認刪除?"
                                    footer={
                                        <Button size="sm" className="bg-red-500 hover:bg-red-600 border-red-500 text-white">確認刪除</Button>
                                    }
                                >
                                    此動作無法復原，請確認是否繼續。
                                </Dialog>
                            </div>
                        </div>

                        {/* A-2: 標題 + 內文 + 確認按鈕 + 取消按鈕 */}
                        <div className="space-y-2">
                            <span className="text-xs text-primary font-medium block mb-1">A-2: 標題 + 內文 + 確認按鈕 + 取消按鈕(雙向確認)</span>
                            <div className="bg-gray-50 p-6 rounded-xl flex justify-center items-center">
                                <Dialog
                                    title="尚未儲存"
                                    footer={
                                        <>
                                            <Button variant="ghost" size="sm" className="text-gray-500 bg-gray-100 hover:bg-gray-200">取消</Button>
                                            <Button size="sm">確認離開</Button>
                                        </>
                                    }
                                >
                                    您的變更尚未儲存，確定要離開嗎？
                                </Dialog>
                            </div>
                        </div>
                    </div>

                    {/* Style B: 有右上角叉叉 */}
                    <div className="space-y-6">
                        <h3 className="font-semibold text-gray-400 uppercase tracking-wider border-b pb-2">樣式 B (含叉叉)</h3>

                        {/* B-1: 標題 + 內文 */}
                        <div className="space-y-2">
                            <span className="text-xs text-primary font-medium block mb-1">B-1: 標題 + 內文(僅公告)</span>
                            <div className="bg-gray-50 p-6 rounded-xl flex justify-center items-center">
                                <Dialog
                                    title="公告通知"
                                    showCloseButton
                                >
                                    系統將於今晚 12:00 進行維護，屆時將無法登入系統。
                                </Dialog>
                            </div>
                        </div>

                        {/* B-2: 標題 + 內文 + 確認按鈕 */}
                        <div className="space-y-2">
                            <span className="text-xs text-primary font-medium block mb-1">B-2: 標題 + 內文 + 確認按鈕(公告並確認)</span>
                            <div className="bg-gray-50 p-6 rounded-xl flex justify-center items-center">
                                <Dialog
                                    title="權限申請"
                                    showCloseButton
                                    footer={
                                        <Button size="sm">知道了</Button>
                                    }
                                >
                                    您已成功送出權限申請，請等待管理員審核。
                                </Dialog>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
