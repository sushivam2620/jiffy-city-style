import { MapPin, Clock, Star } from "lucide-react";

const stores = [
  {
    id: 1,
    name: "Nike",
    logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop",
    category: "Sportswear",
    rating: 4.8,
    distance: "1.2 km",
    deliveryTime: "20-25 min",
  },
  {
    id: 2,
    name: "Zara",
    logo: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=100&h=100&fit=crop",
    category: "Fashion",
    rating: 4.7,
    distance: "0.8 km",
    deliveryTime: "15-20 min",
  },
  {
    id: 3,
    name: "H&M",
    logo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=100&h=100&fit=crop",
    category: "Fashion",
    rating: 4.6,
    distance: "1.5 km",
    deliveryTime: "25-30 min",
  },
  {
    id: 4,
    name: "Adidas",
    logo: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop",
    category: "Sportswear",
    rating: 4.9,
    distance: "2.0 km",
    deliveryTime: "28-35 min",
  },
  {
    id: 5,
    name: "Levi's",
    logo: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=100&h=100&fit=crop",
    category: "Denim",
    rating: 4.5,
    distance: "1.8 km",
    deliveryTime: "22-28 min",
  },
  {
    id: 6,
    name: "Uniqlo",
    logo: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=100&h=100&fit=crop",
    category: "Essentials",
    rating: 4.7,
    distance: "1.0 km",
    deliveryTime: "18-22 min",
  },
];

const FeaturedStores = () => {
  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Stores Near You
            </h2>
            <p className="text-muted-foreground">
              Top-rated stores ready to deliver
            </p>
          </div>
          <button className="text-primary font-medium hover:underline hidden md:block">
            View All Stores →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store, index) => (
            <div
              key={store.id}
              className="group bg-card border border-border rounded-2xl p-6 card-hover animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={store.logo}
                    alt={store.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {store.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{store.category}</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-foreground">{store.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {store.distance}
                </div>
                <div className="flex items-center gap-1 text-sm text-primary font-medium">
                  <Clock className="w-4 h-4" />
                  {store.deliveryTime}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <button className="text-primary font-medium hover:underline">
            View All Stores →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStores;
