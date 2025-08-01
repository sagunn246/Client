import {React,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Truck, Award } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Home = () => {

    useEffect(() => {
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => setLoaded(true), 200);
    return ()=> clearTimeout(timeout);
  },[])
  

  const { addToCart } = useCart();

  const featuredDishes = [
    {
      title: 'Signature Burger',
      description: 'Premium beef patty with artisanal toppings',
      imgUrl: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 12.99,
      rating: 5,
    },
    {
      title: 'Margherita Pizza',
      description: 'Fresh mozzarella, basil, and tomato sauce',
      imgUrl: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 14.99,
      rating: 5,
    },
    {
      title: 'Creamy Pasta',
      description: 'Homemade pasta with rich alfredo sauce',
      imgUrl: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 11.99,
      rating: 4,
    },
    {
      title: 'MO:MO',
      description: 'Homemade pasta with rich alfredo sauce',
      imgUrl: 'https://imgs.search.brave.com/3lEDlCGmuAMK4nZJx6m1aDGAPFWkJ_ro4s0VM7ulxoU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyNC8w/Mi8yMC8xNS8xOS9h/aS1nZW5lcmF0ZWQt/ODU4NTY5M182NDAu/anBn',
      price: 11.99,
      rating: 4,
    },
    {
      title: 'Fried chicken',
      description: 'Homemade pasta with rich alfredo sauce',
      imgUrl: 'https://t3.ftcdn.net/jpg/02/77/51/74/240_F_277517431_EpRAE0OEVoz39ODrNRb2zP6PbKhh8FlD.jpg',
      price: 11.99,
      rating: 4,
    },
    {
      title: 'Chinese',
      description: 'Homemade pasta with rich alfredo sauce',
      imgUrl: 'https://imgs.search.brave.com/5xPcd5tE2oWlNNM2yq3Zw1efdY5foJayLj6NsnTSxJU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzU0LzIxLzA0/LzM2MF9GXzI1NDIx/MDQ4OV9VdUFlOFJm/QzRIdUplRFJlTmNr/TkE5VXUzMEIzYWdu/di5qcGc',
      price: 11.99,
      rating: 4,
    },
  ];

  const features = [
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: 'Fast Delivery',
      description: 'Get your food delivered in 30 minutes or less',
    },
    {
      icon: <Truck className="h-8 w-8 text-orange-500" />,
      title: 'Free Shipping',
      description: 'Free delivery on orders over $25',
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: 'Quality Guaranteed',
      description: 'Fresh ingredients and premium quality',
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-orange-100 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Delicious Food
                <span className="text-orange-500"> Delivered</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the finest flavors from our kitchen to your doorstep.
                Fresh ingredients, expert chefs, and lightning-fast delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/menu"
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors transform hover:scale-105 text-center"
                >
                  Order Now
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Delicious food"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-500 rounded-full p-2">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-sm font-medium">Fresh Daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Daddy's Kitchen?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering the best food experience with unmatched quality and service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Dishes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular and chef-recommended dishes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={dish.imgUrl}
                  alt={dish.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{dish.title}</h3>
                    <StarRating rating={dish.rating} />
                  </div>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-500">${dish.price}</span>
                    <button
                      onClick={() => addToCart(dish)}
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors inline-block"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Order?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Daddy's Kitchen for their daily meals.
          </p>
          <Link
            to="/menu"
            className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Start Ordering
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
