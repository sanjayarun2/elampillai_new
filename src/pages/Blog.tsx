import React from 'react';
import BlogCard from '../components/BlogCard';
import { useSupabaseQuery } from '../hooks/useSupabaseQuery';
import { blogService } from '../services/blogService';
import type { BlogPost } from '../types';
<meta name="google-adsense-account" content="ca-pub-9375434489866075"></meta>

export default function Blog() {
  const { data: posts, loading, error } = useSupabaseQuery<BlogPost[]>(
    () => blogService.getAll()
  );

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">News & Updates</h1>
        <div className="text-center py-12">
          <p className="text-gray-600">Loading posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">News & Updates</h1>
        <div className="text-center py-12">
          <p className="text-red-600">Error loading posts. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">News & Updates</h1>
      {!posts || posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No posts available yet.</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}