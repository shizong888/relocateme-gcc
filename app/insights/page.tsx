"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Search, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getAllBlogPosts, getAllCategories } from "@/lib/blogService";
import { BlogPostListItem } from "@/types/blog";
import { formatDate } from "@/lib/formatDate";

export default function InsightsPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState<BlogPostListItem[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [loading, setLoading] = useState(true);
  const postsPerPage = 6;

  // Fetch blog posts and categories from Sanity
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [posts, cats] = await Promise.all([
          getAllBlogPosts(),
          getAllCategories()
        ]);
        setBlogPosts(posts);
        setCategories(["All", ...cats]);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Read category from URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.length > 1) {
      const formattedCategory = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1).toLowerCase();
      if (categories.includes(formattedCategory)) {
        setSelectedCategory(formattedCategory);
      }
    }
  }, [searchParams, categories]);

  if (loading) {
    return (
      <>
        <Navbar />

        {/* Featured Post Skeleton */}
        <section className="pt-32 pb-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative overflow-hidden rounded-lg h-[500px] md:h-[600px]">
              <Skeleton className="absolute inset-0" />
            </div>
          </div>
        </section>

        {/* Search and Filter Section Skeleton */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <Skeleton className="h-12 w-full md:w-96" />
              <div className="flex gap-2 flex-wrap">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-10 w-24" />
                ))}
              </div>
            </div>
            <Skeleton className="h-6 w-48 mt-6" />
          </div>
        </section>

        {/* Blog Posts Grid Skeleton */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-24" />
                    </div>
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-16 w-full" />
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = regularPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const totalPosts = blogPosts.length;
  const categoryCount = (cat: string) => {
    if (cat === "All") return totalPosts;
    return blogPosts.filter(post => post.category === cat).length;
  };

  return (
    <>
      <Navbar />

      {/* Featured Post */}
      {featuredPost && (
        <section className="pt-32 pb-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <Link href={`/insights/${featuredPost.categorySlug}/${featuredPost.slug.current}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative overflow-hidden rounded-lg h-[500px] md:h-[600px] group cursor-pointer"
              >
                {/* Background Image or Placeholder */}
                {featuredPost.image ? (
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-300" />
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-4 py-2 bg-[hsl(var(--brand))] text-white text-sm font-medium rounded-full">
                        Featured Article
                      </span>
                      <span className="px-4 py-2 bg-white/10 border border-white text-white text-sm font-medium rounded-full capitalize">
                        {featuredPost.category}
                      </span>
                      <span className="text-sm text-white/80">{formatDate(featuredPost.publishedAt)}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-white leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/90 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <Clock size={16} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <Button
                        variant="outline"
                        className="bg-white/10 border border-white text-white hover:bg-white/20 hover:text-white transition-all duration-300"
                      >
                        Read Article <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-6"
              />
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-[hsl(var(--brand))] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category} ({categoryCount(category)})
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-gray-600 mt-6">
            Showing {filteredPosts.length} of {regularPosts.length} articles
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <Link key={post._id} href={`/insights/${post.categorySlug}/${post.slug.current}`}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-300" />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-[hsl(var(--brand))]/10 text-[hsl(var(--brand))] text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{formatDate(post.publishedAt)}</span>
                    </div>
                    <h3 className="text-xl font-light mb-3 group-hover:text-[hsl(var(--brand))] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-[hsl(var(--brand))] text-sm font-medium group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your search.</p>
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > 0 && totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => setCurrentPage(page)}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
