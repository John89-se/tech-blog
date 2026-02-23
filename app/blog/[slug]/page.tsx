import { getPostData, getSortedPostsData } from "@/lib/posts";
import { CompileMDXResult, MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from 'next';
import AdPlaceholder from "@/components/AdPlaceholder";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostData(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = getPostData(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="max-w-3xl mx-auto py-12 px-4">
            <div className="mb-8">
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary mb-4 block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-bold tracking-tight mb-2">{post.title}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <time dateTime={post.date}>{post.date}</time>
                    <div className="flex gap-2">
                        {post.tags.map((tag) => {
                            const tagSlug = tag.toLowerCase().replace(/\s+/g, '-');
                            return (
                                <Link key={tag} href={`/tags/${tagSlug}`}>
                                    <span className="bg-secondary px-2 py-1 rounded-md text-xs font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors">
                                        #{tag}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
                <MDXRemote source={post.content} />
            </div>

            <div className="mt-12">
                <AdPlaceholder />
            </div>
        </article>
    );
}
