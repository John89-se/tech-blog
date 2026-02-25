import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '運営者情報',
    description: '当ブログの運営者情報とプロフィールです。',
};

export default function AboutPage() {
    return (
        <div className="container py-12 px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">運営者情報 (About)</h1>
                    <p className="text-muted-foreground">
                        当サイト「Tech Blog」の運営者に関する情報です。
                    </p>
                </div>

                <div className="rounded-lg border bg-card p-8 shadow-sm">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-primary">運営者名</h2>
                            <p className="text-lg">Toma</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-primary">サイトURL</h2>
                            <p className="text-lg">
                                <a href="https://techblog1.com" className="text-blue-500 hover:underline">
                                    https://techblog1.com
                                </a>
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-primary">自己紹介</h2>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                関西でセキュリティエンジニアをしています。<br />
                                AI技術など、情報発信を行っています。
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-primary">お問い合わせ</h2>
                            <p className="text-lg text-muted-foreground">
                                サイトに関するお問い合わせ、技術的なご相談、お仕事のご依頼等は以下のメールアドレスまでお願いいたします。
                            </p>
                            <div className="mt-2 text-lg">
                                <a href="mailto:sho123331sho@gmail.com" className="text-blue-500 hover:underline">
                                    sho123331sho@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
