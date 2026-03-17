const fs = require('fs');
const path = require('path');
const targetDir = path.join('C:\\Users\\到馬\\.gemini\\antigravity\\scratch\\tech-blog', 'content');

const articles = [
  { filename: 'why-nextjs.mdx', title: 'なぜ2026年にNext.jsを選ぶべきなのか？', excerpt: '最新のNext.js App Routerの利点と、個人開発・ブログ運営において最強の選択肢である理由を解説。', tags: ['Next.js', 'Frontend'] },
  { filename: 'typescript-intro.mdx', title: 'TypeScript超入門：なぜ型が必要なのか', excerpt: 'JavaScriptからTypeScriptへの移行を考えている初心者向け。型安全性がもたらす開発体験の向上について。', tags: ['TypeScript', 'JavaScript', 'Beginner'] },
  { filename: 'tailwind-tips.mdx', title: 'Tailwind CSS v4のベストプラクティス', excerpt: '新しくなったTailwind CSS v4の設定方法と、メンテナンスしやすいクラスの書き方のコツ。', tags: ['TailwindCSS', 'CSS', 'Design'] },
  { filename: 'vscode-setup.mdx', title: '爆速で開発するためのVS Code最強設定', excerpt: 'Web開発者が絶対に入れておくべき拡張機能と、生産性を爆上げするショートカット設定。', tags: ['VSCode', 'Productivity', 'Tools'] },
  { filename: 'vercel-deploy.mdx', title: 'Vercelへのデプロイ完全ガイド', excerpt: 'Next.jsアプリを数クリックで全世界に公開する方法。独自ドメインの設定や環境変数についても。', tags: ['Vercel', 'Deploy', 'Next.js'] },
  { filename: 'react-hooks.mdx', title: '図解でわかるReact Hooks完全ガイド', excerpt: 'useStateやuseEffectから、カスタムフックの作り方まで。React Hooksの概念を分かりやすく図解。', tags: ['React', 'Frontend', 'Tutorial'] },
  { filename: 'git-basics.mdx', title: '絶対に事故らないGitとGitHubの基本', excerpt: 'commit, push, pullの基本概念から、ブランチ戦略やコンフリクトの解消方法まで実践的に解説。', tags: ['Git', 'GitHub', 'Beginner'] },
  { filename: 'terminal-basics.mdx', title: 'エンジニア必須のターミナルコマンド101', excerpt: '黒い画面アレルギーを克服！ファイルの操作から権限の変更まで、よく使うコマンドを厳選紹介。', tags: ['Terminal', 'CLI', 'Tools'] },
  { filename: 'markdown-guide.mdx', title: '美しく書けるMarkdown記法まとめ', excerpt: 'エンジニアのドキュメント作成に必須のMarkdown。基本から便利な拡張記法までを一挙紹介。', tags: ['Markdown', 'Writing'] },
  { filename: 'seo-basics.mdx', title: '開発者のためのSEO実践ガイド', excerpt: 'メタタグ、構造化データ、サイトマップ。技術的な側面からブログの検索順位を上げる方法。', tags: ['SEO', 'Marketing'] },
  { filename: 'web-performance.mdx', title: 'Core Web Vitalsを改善するパフォーマンステクニック', excerpt: '画像の最適化やバンドルサイズの削減など、Next.jsで爆速なサイトを作るための具体的な手法。', tags: ['Performance', 'Next.js'] },
  { filename: 'dark-mode.mdx', title: '目に優しいダークモードの実装：Tailwind CSS編', excerpt: 'エンジニアは暗い画面が好き。OSの設定に合わせて自動で切り替わるダークモードの仕組み。', tags: ['TailwindCSS', 'Design', 'Dark Mode'] },
  { filename: 'remote-work-tools.mdx', title: 'リモートワークを快適にする神ツール10選', excerpt: '在宅エンジニアの私が実際に使って生産性が爆上がりしたハードウェア・ソフトウェアを紹介。', tags: ['Remote Work', 'Productivity', 'Tools'] },
  { filename: 'portfolio-guide.mdx', title: '面接官の目を引くポートフォリオの作り方', excerpt: '技術力だけでなく、課題解決能力や継続力をアピールできるポートフォリオサイトの構成案。', tags: ['Career', 'Portfolio'] },
  { filename: 'monetization-strategy.mdx', title: '技術ブログで月5万円稼ぐまでのロードマップ', excerpt: 'Google AdSenseとアフィリエイトの併用戦略。エンジニアだからこそ書ける価値ある記事の作り方。', tags: ['Monetization', 'Blogging'] },
  { filename: 'money-making.mdx', title: 'エンジニアのための副業ガイド', excerpt: '週末だけ働く、本業のスキルを活かす。稼ぎながらも成長できる賢い副業の選び方。', tags: ['Career', 'Side Hustle'] }
];

const startDate = new Date('2026-02-15T00:00:00Z');

articles.forEach((article, index) => {
    const postDate = new Date(startDate);
    postDate.setDate(startDate.getDate() - index);
    const dateStr = postDate.toISOString().split('T')[0];
    
    const content = [
        '---',
        'title: "' + article.title + '"',
        'date: "' + dateStr + '"',
        'excerpt: "' + article.excerpt + '"',
        'tags: ' + JSON.stringify(article.tags),
        '---',
        '',
        '# ' + article.title,
        '',
        'This is a generated post. ' + article.excerpt,
        '',
        '## 本文のセクション',
        '',
        'ここに記事のマークダウンコンテンツが入ります。',
        '',
        '### 詳細解説',
        '',
        '詳細な解説やコードスニペットなどを配置します。'
    ].join('\n');
    
    fs.writeFileSync(path.join(targetDir, article.filename), content, 'utf8');
});

console.log('All MDX files recreated successfully.');
