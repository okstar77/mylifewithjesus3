
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { MEETINGS } from '../constants';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Calendar } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center overflow-hidden">
        {/* Using high-quality placeholder that matches the provided context */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              You’re Welcome to Be Part of Our <span className="text-[#00B8D9]">Community</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Life gets busy. Sometimes all we need is a moment of encouragement and a community that cares.
            </p>
            <div className="pt-4">
              <Link 
                to="/register" 
                className="inline-block bg-[#FF9500] hover:bg-[#E68600] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:-translate-y-1 active:scale-95"
              >
                Find Your Group
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">We’re Here for Each Other</h2>
          <div className="h-1.5 w-20 bg-[#5F2AFF] mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our Community Social Support Groups offer a warm space to talk, connect, ask questions, and find hope.
          </p>
        </div>
      </section>

      {/* Weekly Meetings List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Weekly Support Group Meetings</h2>
            <p className="text-gray-600">Join us in person or virtually — whatever works best for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEETINGS.map((meeting, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-purple-50 rounded-lg group-hover:bg-[#5F2AFF] transition-colors">
                    <MapPin className="text-[#5F2AFF] group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{meeting.location}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="mr-3 text-[#00B8D9]" size={18} />
                    <span>{meeting.day}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="mr-3 text-[#FF9500]" size={18} />
                    <span>{meeting.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-24 bg-[#5F2AFF] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="bg-white p-8 inline-block rounded-3xl shadow-2xl mb-8 transform transition-transform hover:scale-105">
            <QRCodeSVG 
              value={`${window.location.origin}${window.location.pathname}#/register`} 
              size={240}
              fgColor="#2a1f4d"
              level="H"
              includeMargin={true}
            />
          </div>
          <h2 className="text-3xl font-bold mb-4">Scan to Register</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Scan the QR Code to Register, Confirm Meeting Location, or Join Online.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
