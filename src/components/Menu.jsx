import React, { useState, useEffect, useMemo } from 'react';
import { Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';

const dishes = [
  {
    title: 'Spicy Thai Noodles',
    description: 'Stir-fried noodles with chili, peanuts, and fresh herbs.',
    imgUrl: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 11.49,
    category: 'Featured',
    rating: 5,
  },
  {
    title: 'Mediterranean Quinoa Salad',
    description: 'Quinoa tossed with cucumbers, olives, feta, and lemon dressing.',
    imgUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 9.99,
    category: 'Featured',
    rating: 4,
  },
  {
    title: 'BBQ Pulled Pork Sandwich',
    description: 'Slow-cooked pork with smoky BBQ sauce on a toasted bun.',
    imgUrl: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 13.99,
    category: 'Top Rated',
    rating: 5,
  },
  {
    title: 'Vegan Buddha Bowl',
    description: 'A colorful bowl with roasted veggies, chickpeas, and tahini sauce.',
    imgUrl: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 12.49,
    category: 'Top Rated',
    rating: 4,
  },
  {
    title: 'Seared Tuna Steak',
    description: 'Fresh tuna seared with sesame crust and soy glaze.',
    imgUrl: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 21.99,
    category: 'Premium',
    rating: 5,
  },
  {
    title: 'Lamb Chops with Rosemary',
    description: 'Grilled lamb chops marinated with rosemary and garlic.',
    imgUrl: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 25.99,
    category: 'Premium',
    rating: 5,
  },
  {
    title: 'Mushroom Risotto',
    description: 'Creamy risotto with wild mushrooms and parmesan.',
    imgUrl: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 14.99,
    category: 'Featured',
    rating: 4,
  },
  {
    title: 'Classic Caesar Wrap',
    description: 'Grilled chicken, romaine, and Caesar dressing wrapped in a tortilla.',
    imgUrl: 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 10.49,
    category: 'Top Rated',
    rating: 4,
  },
  {
    title: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center and vanilla ice cream.',
    imgUrl: 'https://images.pexels.com/photos/4109996/pexels-photo-4109996.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 7.99,
    category: 'Premium',
    rating: 5,
  },
  {
    title: 'Shrimp Scampi Pasta',
    description: 'Linguine with garlic butter shrimp and fresh parsley.',
    imgUrl: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 17.99,
    category: 'Premium',
    rating: 5,
  },
  {
    title: 'Avocado Toast Deluxe',
    description: 'Sourdough toast topped with smashed avocado, cherry tomatoes, and microgreens.',
    imgUrl: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 8.99,
    category: 'Featured',
    rating: 4,
  },
  {
    title: 'Buffalo Cauliflower Bites',
    description: 'Crispy cauliflower tossed in spicy buffalo sauce, served with ranch.',
    imgUrl: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 9.49,
    category: 'Featured',
    rating: 4,
  },
  {
    title: 'Grilled Salmon with Dill Sauce',
    description: 'Perfectly grilled salmon served with creamy dill sauce and lemon wedges.',
    imgUrl: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 19.99,
    category: 'Top Rated',
    rating: 5,
  },
  {
    title: 'Sweet Potato Fries',
    description: 'Golden crispy sweet potato fries served with a spicy aioli dip.',
    imgUrl: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 6.99,
    category: 'Top Rated',
    rating: 4,
  },
  {
    title: 'Beef Wellington Bites',
    description: 'Mini beef wellingtons with mushroom duxelles and puff pastry.',
    imgUrl: 'https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 27.99,
    category: 'Premium',
    rating: 5,
  },
  {
    title: 'Truffle Mac & Cheese',
    description: 'Creamy mac and cheese infused with truffle oil and topped with parmesan.',
    imgUrl: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 16.99,
    category: 'Premium',
    rating: 5,
  },
  {
    title: 'Caprese Salad',
    description: 'Fresh mozzarella, tomatoes, basil, and balsamic glaze.',
    imgUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 11.49,
    category: 'Featured',
    rating: 4,
  },
  {
    title: 'Chicken Tikka Masala',
    description: 'Tender chicken pieces cooked in creamy spiced tomato sauce.',
    imgUrl: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 14.99,
    category: 'Top Rated',
    rating: 5,
  },
  {
    title: 'Prawn Cocktail',
    description: 'Classic prawn cocktail with tangy Marie Rose sauce and lettuce.',
    imgUrl: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 13.49,
    category: 'Premium',
    rating: 4,
  },
  {
    title: 'Veggie Spring Rolls',
    description: 'Crispy spring rolls stuffed with fresh vegetables and served with sweet chili sauce.',
    imgUrl: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 7.99,
    category: 'Featured',
    rating: 4,
  },
  {
    title: 'French Onion Soup',
    description: 'Classic soup topped with toasted bread and melted Gruyere cheese.',
    imgUrl: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 9.99,
    category: 'Top Rated',
    rating: 5,
  },
  {
    title: 'Duck Confit',
    description: 'Slow-cooked duck leg served with crispy skin and a cherry reduction.',
    imgUrl: 'https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 28.99,
    category: 'Premium',
    rating: 5,
  },
  {
    title: 'Pesto Pasta',
    description: 'Penne pasta tossed in fresh basil pesto and topped with pine nuts.',
    imgUrl: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 13.49,
    category: 'Featured',
    rating: 4,
  },
  {
    title: 'Stuffed Bell Peppers',
    description: 'Bell peppers stuffed with rice, veggies, and melted cheese.',
    imgUrl: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 12.99,
    category: 'Top Rated',
    rating: 4,
  },
  {
    title: 'Filet Mignon',
    description: 'Tender filet mignon grilled to perfection with herb butter.',
    imgUrl: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 34.99,
    category: 'Premium',
    rating: 5,
  },
  {
    title: 'Avocado Shrimp Salad',
    description: 'Fresh shrimp and avocado tossed with citrus dressing.',
    imgUrl: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 15.99,
    category: 'Featured',
    rating: 4,
  },
  {
    title: 'Eggplant Parmesan',
    description: 'Breaded eggplant baked with marinara and mozzarella cheese.',
    imgUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 14.49,
    category: 'Top Rated',
    rating: 4,
  },
  {
    title: 'Crab Cakes',
    description: 'Golden crab cakes served with remoulade sauce and lemon.',
    imgUrl: 'https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 18.99,
    category: 'Premium',
    rating: 5,
  },
  {
    title: 'Berry Cheesecake',
    description: 'Creamy cheesecake topped with fresh mixed berries.',
    imgUrl: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 8.49,
    category: 'Premium',
    rating: 5,
  },
];
const data = [
  {
    "id": 1,
    "name": "Classic Margherita Pizza",
    "ingredients": [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper to taste"
    ],
    "instructions": [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough and spread tomato sauce evenly.",
      "Top with slices of fresh mozzarella and fresh basil leaves.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
      "Slice and serve hot."
    ],
    "prepTimeMinutes": 20,
    "cookTimeMinutes": 15,
    "servings": 4,
    "difficulty": "Easy",
    "cuisine": "Italian",
    "caloriesPerServing": 300,
    "tags": [
      "Pizza",
      "Italian"
    ],
    "userId": 166,
    "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
    "rating": 4.6,
    "reviewCount": 98,
    "mealType": [
      "Dinner"
    ]
  },
]

const StarRating = ({ rating }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))}
  </div>
);

const categories = ['All', 'Featured', 'Top Rated', 'Premium'];

const Menu = () => {
  const { addToCart } = useCart();
  const { searchQuery } = useSearch();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDishes = useMemo(() => {
    let filtered = dishes;
    if (searchQuery.trim()) {
      filtered = filtered.filter(dish =>
        dish.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(dish => dish.category === selectedCategory);
    }
    return filtered;
  }, [searchQuery, selectedCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timeout);
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-orange-100">
            {searchQuery
              ? `Search results for "${searchQuery}"`
              : 'Discover our delicious selection of handcrafted dishes'}
          </p>
          {searchQuery && (
            <p className="text-orange-100 mt-2">
              Found {filteredDishes.length} dish{filteredDishes.length !== 1 ? 'es' : ''}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        {!searchQuery && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 cursor-pointer rounded-full font-semibold transition-all ${selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-500'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-8 text-center cursor-pointer">
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              ← Back to all categories
            </button>
          </div>
        )}

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDishes.map((dish, idx) => (
            <div
              key={`${dish.title}-${idx}`}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              style={{ minHeight: 420 }}
            >
              <img
                src={dish.imgUrl}
                alt={dish.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{dish.title}</h3>
                    <StarRating rating={dish.rating} />
                  </div>
                  <p className="text-gray-600 mb-2 text-sm">{dish.description}</p>
                  <div className="mb-4">
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                      {dish.category}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-orange-500">
                    ${dish.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(dish)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredDishes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <span className="text-6xl">🔍</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No dishes found</h3>
            <p className="text-gray-500 text-lg mb-6">
              {searchQuery
                ? `No dishes match "${searchQuery}". Try a different search term.`
                : 'No dishes found in this category.'}
            </p>
            {searchQuery && (
              <button
                onClick={() => window.location.reload()}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                View All Dishes
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
