import { MapPin, Clock, Star, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stores = [
  {
    id: 1,
    name: "Nike",
    cover: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop",
    category: "Sportswear",
    rating: 4.8,
    reviews: 2847,
    distance: "1.2 km",
    deliveryTime: "20-25 min",
    featured: true,
    offer: "Up to 40% OFF",
  },
  {
    id: 2,
    name: "Zara",
    cover: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=100&h=100&fit=crop",
    category: "Fashion",
    rating: 4.7,
    reviews: 1923,
    distance: "0.8 km",
    deliveryTime: "15-20 min",
    featured: false,
    offer: "New Arrivals",
  },
  {
    id: 3,
    name: "H&M",
    cover: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=100&h=100&fit=crop",
    category: "Fashion",
    rating: 4.6,
    reviews: 3156,
    distance: "1.5 km",
    deliveryTime: "25-30 min",
    featured: false,
    offer: "Buy 2 Get 1",
  },
  {
    id: 4,
    name: "Adidas",
    cover: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop",
    category: "Sportswear",
    rating: 4.9,
    reviews: 4521,
    distance: "2.0 km",
    deliveryTime: "28-35 min",
    featured: true,
    offer: "Free Delivery",
  },
  {
    id: 5,
    name: "Levi's",
    cover: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=100&h=100&fit=crop",
    category: "Denim",
    rating: 4.5,
    reviews: 1876,
    distance: "1.8 km",
    deliveryTime: "22-28 min",
    featured: false,
    offer: "30% OFF Jeans",
  },
  {
    id: 6,
    name: "Uniqlo",
    cover: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=100&h=100&fit=crop",
    category: "Essentials",
    rating: 4.7,
    reviews: 2234,
    distance: "1.0 km",
    deliveryTime: "18-22 min",
    featured: false,
    offer: "Season Sale",
  },
];

const FeaturedStores = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Near You</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
              Top Stores in{" "}
              <span className="gradient-text">Mumbai</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Premium brands delivering to your doorstep in minutes
            </p>
          </div>
          <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 w-fit">
            View All Stores
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Store Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store, index) => (
            <div
              key={store.id}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.2)] animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Cover Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={store.cover}
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Featured Badge */}
                {store.featured && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                    <Zap className="w-3 h-3" />
                    Featured
                  </div>
                )}
                
                {/* Offer Badge */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1.5 rounded-full border border-border">
                  {store.offer}
                </div>

                {/* Logo */}
                <div className="absolute -bottom-6 left-5 w-16 h-16 rounded-2xl overflow-hidden border-4 border-card shadow-xl">
                  <img
                    src={store.logo}
                    alt={store.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 pt-10">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {store.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{store.category}</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-primary/10 px-2.5 py-1 rounded-lg">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-sm font-bold text-foreground">{store.rating}</span>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground mb-4">
                  {store.reviews.toLocaleString()} reviews
                </p>

                {/* Delivery Info */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{store.distance}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 rounded-full">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">{store.deliveryTime}</span>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-primary/5 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStores;
