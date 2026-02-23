import { getAllTags, getPostsByTag } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ tag: string }>;
};

export async function generateStaticParams() {
    const tags = getAllTags();
    return tags.map((tag) => ({
        tag: tag.toLowerCase().replace(/\s+/g, '-'),
    }));
}

export async function generateMetadata({ params }: Props) {
    const { tag } = await params;
    return {
        title: `Posts tagged with "${tag}"`,
        description: `Browse all articles about ${tag}.`,
    };
}

export default async function TagPage({ params }: Props) {
    const { tag } = await params;

    // Find the original tag name to display
    const allTags = getAllTags();
    const originalTag = allTags.find(t => t.toLowerCase().replace(/\s+/g, '-') === tag.toLowerCase()) || tag;

    const posts = getPostsByTag(tag);

    if (posts.length === 0) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <header className="mb-12">
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary mb-4 block">
                    ← Back to Home
                </Link>
                <h1 className="text-3xl font-bold tracking-tight mb-2">
                    Posts tagged with <span className="text-primary">"#{originalTag}"</span>
                </h1>
            </header>

            <div className="grid gap-8">
                {posts.map(({ slug, date, title, excerpt, tags }) => (
                    <div key={slug} className="group relative border rounded-lg p-6 hover:bg-secondary/50 transition-colors">
                        <div className="flex items-center gap-x-4 text-xs mb-2">
                            <time dateTime={date} className="text-muted-foreground">
                                {date}
                            </time>
                            {tags && tags.map(t => (
                                <span key={t} className="relative z-10 rounded-full bg-secondary px-3 py-1.5 font-medium text-secondary-foreground">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <h3 className="mt-3 text-2xl font-semibold leading-6 group-hover:text-primary">
                            <Link href={`/blog/${slug}`}>
                                <span className="absolute inset-0" />
                                {title}
                            </Link>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                            {excerpt}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
