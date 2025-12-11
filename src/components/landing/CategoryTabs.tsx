import { useState } from "react";
import { Shirt, Watch, Footprints, Sparkles, Clock, Heart, ShoppingBag, Star, Percent } from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: Sparkles, count: 6 },
  { id: "men", label: "Men", icon: Shirt, count: 2 },
  { id: "women", label: "Women", icon: Watch, count: 2 },
  { id: "kids", label: "Kids", icon: Footprints, count: 2 },
];

const products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    store: "Nike Store",
    price: "₹8,999",
    originalPrice: "₹12,999",
    discount: "31% OFF",
    category: "men",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    delivery: "25 min",
    rating: 4.8,
    reviews: 234,
    isNew: true,
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    store: "Zara",
    price: "₹3,499",
    originalPrice: "₹4,999",
    discount: "30% OFF",
    category: "women",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    delivery: "30 min",
    rating: 4.6,
    reviews: 189,
    isNew: false,
  },
  {
    id: 3,
    name: "Kids Denim Jacket",
    store: "H&M Kids",
    price: "₹1,999",
    originalPrice: "₹2,999",
    discount: "33% OFF",
    category: "kids",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop",
    delivery: "20 min",
    rating: 4.7,
    reviews: 156,
    isNew: true,
  },
  {
    id: 4,
    name: "Premium Running Shoes",
    store: "Adidas",
    price: "₹11,999",
    originalPrice: "₹15,999",
    discount: "25% OFF",
    category: "men",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    delivery: "28 min",
    rating: 4.9,
    reviews: 412,
    isNew: false,
  },
  {
    id: 5,
    name: "Designer Handbag",
    store: "Michael Kors",
    price: "₹24,999",
    originalPrice: "₹32,999",
    discount: "24% OFF",
    category: "women",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    delivery: "35 min",
    rating: 4.5,
    reviews: 98,
    isNew: true,
  },
  {
    id: 6,
    name: "Kids Sports Set",
    store: "Puma Kids",
    price: "₹2,499",
    originalPrice: "₹3,499",
    discount: "29% OFF",
    category: "kids",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=400&fit=crop",
    delivery: "22 min",
    rating: 4.4,
    reviews: 67,
    isNew: false,
  },
];

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <ShoppingBag className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trending Now</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Shop by </span>
            <span className="bg-gradient-to-r from-primary via-jiffy-green to-primary bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore trending products across all categories with lightning-fast delivery
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 md:gap-4 mb-12 flex-wrap">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-primary to-jiffy-green text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-card/50 backdrop-blur-sm border border-border text-muted-foreground hover:bg-card hover:text-foreground hover:border-primary/50"
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
                <span>{category.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  isActive 
                    ? "bg-primary-foreground/20 text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl overflow-hidden animate-fade-in transition-all duration-500 hover:border-primary/50"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                boxShadow: hoveredProduct === product.id ? '0 0 40px hsl(var(--primary) / 0.2)' : 'none'
              }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-jiffy-green text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      NEW
                    </span>
                  )}
                  <span className="flex items-center gap-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                    <Percent className="w-3 h-3" />
                    {product.discount}
                  </span>
                </div>

                {/* Delivery Badge */}
                <div className="absolute top-4 right-4">
                  <span className="flex items-center gap-1.5 bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1.5 rounded-full border border-border/50">
                    <Clock className="w-3 h-3 text-primary" />
                    {product.delivery}
                  </span>
                </div>

                {/* Wishlist Button */}
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-border/50 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110">
                  <Heart className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                </button>

                {/* Quick Add Button */}
                <button className="absolute bottom-4 left-4 right-16 bg-primary text-primary-foreground font-semibold py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-jiffy-green flex items-center justify-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Quick Add
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Store & Rating */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-semibold">{product.store}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="text-sm font-medium text-foreground">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-1">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-foreground">{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-jiffy-green text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105">
            <span>View All Products</span>
            <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;
