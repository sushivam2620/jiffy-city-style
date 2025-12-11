import { useState } from "react";
import { Shirt, Watch, Footprints, Sparkles } from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: Sparkles },
  { id: "men", label: "Men", icon: Shirt },
  { id: "women", label: "Women", icon: Watch },
  { id: "kids", label: "Kids", icon: Footprints },
];

const products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    store: "Nike Store",
    price: "₹8,999",
    originalPrice: "₹12,999",
    category: "men",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    delivery: "25 min",
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    store: "Zara",
    price: "₹3,499",
    originalPrice: "₹4,999",
    category: "women",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    delivery: "30 min",
  },
  {
    id: 3,
    name: "Kids Denim Jacket",
    store: "H&M Kids",
    price: "₹1,999",
    originalPrice: "₹2,999",
    category: "kids",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop",
    delivery: "20 min",
  },
  {
    id: 4,
    name: "Premium Running Shoes",
    store: "Adidas",
    price: "₹11,999",
    originalPrice: "₹15,999",
    category: "men",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    delivery: "28 min",
  },
  {
    id: 5,
    name: "Designer Handbag",
    store: "Michael Kors",
    price: "₹24,999",
    originalPrice: "₹32,999",
    category: "women",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    delivery: "35 min",
  },
  {
    id: 6,
    name: "Kids Sports Set",
    store: "Puma Kids",
    price: "₹2,499",
    originalPrice: "₹3,499",
    category: "kids",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=400&fit=crop",
    delivery: "22 min",
  },
];

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore trending products across all categories
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {product.delivery}
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-primary font-medium mb-1">{product.store}</p>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-foreground">{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;
