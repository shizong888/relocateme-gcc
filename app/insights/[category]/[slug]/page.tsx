"use client";

import { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Skeleton } from "@/components/ui/skeleton";
import { PortableText } from "@/components/ui/portable-text";
import { Clock, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getBlogPost, getAllBlogPosts } from "@/lib/blogService";
import { BlogPost, BlogPostListItem } from "@/types/blog";
import { formatDate } from "@/lib/formatDate";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: PageProps) {
  const { category, slug } = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [allPosts, setAllPosts] = useState<BlogPostListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [blogPost, posts] = await Promise.all([
          getBlogPost(category, slug),
          getAllBlogPosts()
        ]);

        if (!blogPost) {
          notFound();
        }

        setPost(blogPost);
        setAllPosts(posts);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [category, slug]);

  if (loading) {
    return (
      <>
        <Navbar transparent={true} />

        {/* Hero Section Skeleton */}
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
          <Skeleton className="absolute inset-0" />
          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-6">
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-3/4" />
              <div className="flex gap-4">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-32" />
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Skeleton */}
        <section className="py-6 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Skeleton className="h-6 w-96" />
            </div>
          </div>
        </section>

        {/* Content Skeleton */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Skeleton key={i} className="h-6 w-full" />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = allPosts
    .filter(p => p.categorySlug === post.categorySlug && p._id !== post._id)
    .slice(0, 3);

  // Get previous and next posts
  const currentIndex = allPosts.findIndex(p => p._id === post._id);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <>
      <Navbar transparent={true} />

      {/* Hero Section with Image Overlay */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
        {post.image ? (
          <>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gray-300" />
        )}

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Category Badge */}
              <div className="mb-6">
                <span className="px-4 py-2 bg-white/10 border border-white text-white text-sm font-medium rounded-full capitalize inline-block">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-lg">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{post.readTime}</span>
                </div>
                <span>By {post.author}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/insights">
                    Insights
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/insights?category=${post.categorySlug}`} className="capitalize">
                    {post.category}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {post.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <PortableText value={post.body} />
          </motion.article>
        </div>
      </section>

      {/* Previous/Next Post Navigation */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Previous Post */}
              {previousPost ? (
                <Link href={`/insights/${previousPost.categorySlug}/${previousPost.slug.current}`}>
                  <motion.div
                    whileHover={{ x: -5 }}
                    className="group p-6 border border-gray-200 rounded-lg hover:border-[hsl(var(--brand))] transition-all cursor-pointer h-full"
                  >
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <ArrowLeft size={16} />
                      <span className="font-medium">Previous Insight</span>
                    </div>
                    <h3 className="text-xl font-light text-gray-900 group-hover:text-[hsl(var(--brand))] transition-colors line-clamp-2">
                      {previousPost.title}
                    </h3>
                  </motion.div>
                </Link>
              ) : (
                <div className="opacity-0 pointer-events-none"></div>
              )}

              {/* Next Post */}
              {nextPost ? (
                <Link href={`/insights/${nextPost.categorySlug}/${nextPost.slug.current}`}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="group p-6 border border-gray-200 rounded-lg hover:border-[hsl(var(--brand))] transition-all cursor-pointer h-full text-right"
                  >
                    <div className="flex items-center justify-end gap-2 text-gray-500 text-sm mb-3">
                      <span className="font-medium">Next Insight</span>
                      <ArrowRight size={16} />
                    </div>
                    <h3 className="text-xl font-light text-gray-900 group-hover:text-[hsl(var(--brand))] transition-colors line-clamp-2">
                      {nextPost.title}
                    </h3>
                  </motion.div>
                </Link>
              ) : (
                <div className="opacity-0 pointer-events-none"></div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-8">
                Related <span className="text-[hsl(var(--brand))]">Insights</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost._id}
                    href={`/insights/${relatedPost.categorySlug}/${relatedPost.slug.current}`}
                  >
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer h-full"
                    >
                      <div className="relative h-48 overflow-hidden">
                        {relatedPost.image ? (
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gray-300" />
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-[hsl(var(--brand))]/10 text-[hsl(var(--brand))] text-xs font-medium rounded-full capitalize">
                            {relatedPost.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-light mb-3 group-hover:text-[hsl(var(--brand))] transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock size={14} />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
