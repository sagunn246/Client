import {React, useEffect} from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

const About = () => {

    useEffect(() => {
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => setLoaded(true), 200);
    return ()=> clearTimeout(timeout);
  },[])
  

  const stats = [
    { icon: <Users className="h-8 w-8" />, value: '50,000+', label: 'Happy Customers' },
    { icon: <Award className="h-8 w-8" />, value: '15+', label: 'Years Experience' },
    { icon: <Clock className="h-8 w-8" />, value: '24/7', label: 'Service Available' },
    { icon: <Heart className="h-8 w-8" />, value: '100%', label: 'Love in Every Dish' },
  ];

  const team = [
    {
      name: 'Chef Aashraya Ghimire',
      role: 'Executive Chef',
      image: 'https://imgs.search.brave.com/7uLaqEm4qZjAozgwvIXAkzdopnzCDycdXnN3xZzl9Y0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTgz/MjA3NDkyL3Bob3Rv/L2ltZ18wMDMxLTEt/anBnLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1sSGZVeXVa/UGRiUVdmNnFLM2ow/OGMyZ0REVEpjbTlB/Y18xT1dvc1J5TTBJ/PQ',
      bio: 'With over 20 years of culinary experience, Chef Mario brings passion and expertise to every dish.',
    },
    {
      name: 'Ashim Adhikari',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Sarah ensures our operations run smoothly and our customers receive the best service possible.',
    },
    {
      name: 'Rachit Tiwari',
      role: 'Sous Chef',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'David specializes in fusion cuisine and brings innovative flavors to our menu.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Daddy's Kitchen</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            We're passionate about bringing you the finest dining experience with fresh ingredients,
            expert preparation, and exceptional service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008, Daddy's Kitchen started as a small family restaurant with a big dream:
                to serve authentic, delicious food made with love and the finest ingredients.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've grown into a beloved destination for food lovers, expanding
                our menu while staying true to our core values of quality, freshness, and exceptional service.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve thousands of customers daily, both in our restaurant
                and through our delivery service, bringing the taste of excellence to your doorstep.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our restaurant"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at FoodieHub.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We source the freshest, highest-quality ingredients from local farms and trusted suppliers.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Our skilled chefs bring years of experience and passion to every dish they create.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We go above and beyond to ensure you have an amazing experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind FoodieHub who make every meal special.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-orange-500 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
