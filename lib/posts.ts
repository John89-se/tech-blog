import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content");

export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    tags: string[];
};

export function getSortedPostsData(): Post[] {
    // Create content directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            content,
            title: data.title || "Untitled",
            date: data.date || new Date().toISOString(),
            excerpt: data.excerpt || "",
            tags: data.tags || [],
            ...data,
        } as Post;
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPostData(slug: string): Post | null {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        content,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        tags: data.tags,
        ...data,
    } as Post;
}

export function getPostsByTag(tagSlug: string): Post[] {
    const allPosts = getSortedPostsData();
    return allPosts.filter((post) => {
        if (!post.tags) return false;
        const slugs = post.tags.map(t => t.toLowerCase().replace(/\s+/g, '-'));
        return slugs.includes(tagSlug.toLowerCase());
    });
}

export function getAllTags(): string[] {
    const allPosts = getSortedPostsData();
    const tags = new Set<string>();
    allPosts.forEach((post) => {
        if (post.tags) {
            post.tags.forEach((tag) => tags.add(tag));
        }
    });
    return Array.from(tags);
}
