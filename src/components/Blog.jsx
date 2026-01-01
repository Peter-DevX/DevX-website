import React, { useState } from "react";
import { motion } from "motion/react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      category: "react",
      date: "Jan 1, 2026",
      author: "Sarah Chen",
      excerpt:
        "Learn best practices for structuring React apps that can grow with your business needs.",
      image: "src/assets/scalable-react-app.jpg",
      readTime: "8 min",
      tags: ["React", "Architecture", "Performance"],
    },
    {
      id: 2,
      title: "The Future of AI in Web Development",
      category: "ai",
      date: "Dec 28, 2025",
      author: "James Wilson",
      excerpt:
        "Exploring how artificial intelligence is transforming how we build and deploy web applications.",
      image: "src/assets/AI-in-web-development.png",
      readTime: "10 min",
      tags: ["AI", "Machine Learning", "Web Dev"],
    },
    {
      id: 3,
      title: "TypeScript Tips and Tricks",
      category: "typescript",
      date: "Dec 25, 2025",
      author: "Emma Davis",
      excerpt:
        "Master advanced TypeScript patterns to write more type-safe and maintainable code.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      readTime: "6 min",
      tags: ["TypeScript", "JavaScript", "Type Safety"],
    },
  ];

  const categories = [
    { label: "All", value: "all" },
    { label: "React", value: "react" },
    { label: "TypeScript", value: "typescript" },
    { label: "CSS", value: "css" },
    { label: "AI", value: "ai" },
    { label: "Backend", value: "backend" },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section
      id="blog"
      className="py-20 px-5 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Insights & Articles
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and deep dives into web
            development, AI, and modern technologies.
          </p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.value
                  ? "bg-primary text-white shadow-lg shadow-primary/50"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-gray-800 dark:hover:shadow-2xl dark:hover:shadow-primary/20 transition-all"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {post.date} • {post.readTime} read
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
                    By {post.author}
                  </span>
                  
                  <a
                    href="https://silkdata.tech/blog/article/ai-web-development"
                    className="text-primary font-semibold hover:gap-2 flex items-center gap-1 transition-all"
                  >
                    Read
                    <span>→</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* No Posts Message */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No posts found in this category. Check back soon!
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Blog;
