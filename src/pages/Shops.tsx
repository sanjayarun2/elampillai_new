import React from 'react';
import ShopCard from '../components/ShopCard';
import { useSupabaseQuery } from '../hooks/useSupabaseQuery';
import { shopService } from '../services/shopService';
import type { Shop } from '../types';
<meta name="google-adsense-account" content="ca-pub-9375434489866075"></meta>

export default function Shops() {
  const { data: shops, loading, error } = useSupabaseQuery<Shop[]>(
    () => shopService.getAll()
  );

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Local Shops</h1>
        <div className="text-center py-12">
          <p className="text-gray-600">Loading shops...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Local Shops</h1>
        <div className="text-center py-12">
          <p className="text-red-600">Error loading shops. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Local Shops</h1>
      {!shops || shops.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No shops available yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shops.map(shop => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      )}
    </div>
  );
}