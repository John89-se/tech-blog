import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Tech Side Hustle
        </h1>
        <p className="text-xl text-muted-foreground">
          Tips on monetizing your coding skills.
        </p>
      </header>

      <div className="grid gap-8">
        {allPostsData.map(({ slug, date, title, excerpt, tags }) => (
          <div key={slug} className="group relative border rounded-lg p-6 hover:bg-secondary/50 transition-colors">
            <div className="flex items-center gap-x-4 text-xs mb-2">
              <time dateTime={date} className="text-muted-foreground">
                {date}
              </time>
              {tags && tags.map(tag => {
                const tagSlug = tag.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link key={tag} href={`/tags/${tagSlug}`}>
                    <span className="relative z-10 rounded-full bg-secondary px-3 py-1.5 font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors">
                      {tag}
                    </span>
                  </Link>
                );
              })}
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
