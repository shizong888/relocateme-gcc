"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Search, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Golden Visa Requirements in the UAE",
    excerpt: "A comprehensive guide to obtaining a Golden Visa in the UAE, including eligibility criteria, benefits, and application process.",
    category: "Immigration",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Top 5 International Schools in Dubai for Expat Families",
    excerpt: "Discover the best international schools in Dubai offering world-class education for relocating families.",
    category: "Education",
    date: "Jan 12, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
  },
  {
    id: 3,
    title: "Corporate Services: Setting Up Your Business in the GCC",
    excerpt: "Essential steps and requirements for establishing your business presence across GCC countries.",
    category: "Corporate",
    date: "Jan 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
  },
  {
    id: 4,
    title: "Navigating the Saudi Arabia Work Permit Process",
    excerpt: "Step-by-step guide to obtaining work permits in Saudi Arabia for international professionals.",
    category: "Immigration",
    date: "Jan 8, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=800&q=80"
  },
  {
    id: 5,
    title: "Housing Market Trends in Abu Dhabi 2025",
    excerpt: "Latest insights into Abu Dhabi's housing market for relocating professionals and families.",
    category: "Relocation",
    date: "Jan 5, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80"
  },
  {
    id: 6,
    title: "Cultural Adaptation: Settling into Life in Qatar",
    excerpt: "Tips and insights for expats adapting to Qatari culture and lifestyle.",
    category: "Relocation",
    date: "Jan 3, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80"
  }
];

const categories = ["All", "Immigration", "Education", "Corporate", "Relocation"];

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = regularPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-lg h-[500px] md:h-[600px] group cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                      Featured Article
                    </span>
                    <span className="px-3 py-1 bg-[hsl(var(--brand))]/90 text-white text-sm font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-white/80">{featuredPost.date}</span>
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
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-6"
              />
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
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
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[hsl(var(--brand))]/10 text-[hsl(var(--brand))] text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
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
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
