import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'お問い合わせ',
    description: 'Tech Blogへのお問い合わせ',
};

export default function Contact() {
    return (
        <div className="max-w-3xl mx-auto py-12 px-4 prose dark:prose-invert">
            <h1>お問い合わせ</h1>
            <p>
                当ブログに関するご質問、ご感想、お仕事のご依頼等は、以下のメールアドレスまでお願いいたします。
            </p>

            <div className="not-prose mt-8 p-6 bg-secondary rounded-lg text-center">
                <p className="text-muted-foreground mb-2">Email Address</p>
                <a href="mailto:contact@example.com" className="text-xl font-bold text-primary hover:underline">
                    contact@example.com
                </a>
                <p className="text-xs text-muted-foreground mt-4">
                    ※ スパム防止のため、@example.comを適切なドメインに変更して送信してください。
                </p>
            </div>

            <p className="mt-8">
                原則として2日以内に返信いたします。
            </p>
        </div>
    );
}
