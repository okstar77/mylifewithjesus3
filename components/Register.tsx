
import React, { useState } from 'react';
import { RegistrationFormData } from '../types';
import { MEETINGS } from '../constants';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredLocation: MEETINGS[0].location,
    meetingType: 'In-Person',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 animate-fadeIn">
        <div className="max-w-md w-full text-center space-y-6 bg-white p-12 rounded-3xl shadow-xl border border-teal-100">
          <div className="flex justify-center">
            <CheckCircle2 size={80} className="text-[#00B8D9]" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Registration Received!</h2>
          <p className="text-gray-600 text-lg">
            Thank you for registering, <span className="font-semibold">{formData.fullName}</span>! We will contact you shortly with the details for the {formData.preferredLocation} group.
          </p>
          <button 
            onClick={() => window.location.hash = '#/'}
            className="w-full bg-[#5F2AFF] text-white py-4 rounded-xl font-bold hover:bg-[#4A1ECC] transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-teal-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-slideUp">
          <div className="bg-[#5F2AFF] p-8 text-white text-center">
            <h1 className="text-3xl font-bold">Register for a Support Group</h1>
            <p className="opacity-80 mt-2">Take the first step towards a supportive community.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5F2AFF] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5F2AFF] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5F2AFF] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Preferred Location</label>
                <select
                  name="preferredLocation"
                  value={formData.preferredLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5F2AFF] focus:border-transparent outline-none transition-all appearance-none bg-white"
                >
                  {MEETINGS.map(m => (
                    <option key={m.location} value={m.location}>{m.location}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Meeting Type</label>
              <div className="flex space-x-4">
                {['In-Person', 'Online'].map((type) => (
                  <label key={type} className="flex-1 cursor-pointer">
                    <input
                      type="radio"
                      name="meetingType"
                      value={type}
                      checked={formData.meetingType === type}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div className={`text-center py-3 rounded-xl border-2 transition-all ${
                      formData.meetingType === type 
                      ? 'border-[#5F2AFF] bg-purple-50 text-[#5F2AFF] font-bold' 
                      : 'border-gray-100 bg-gray-50 text-gray-500'
                    }`}>
                      {type}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us a bit about why you're joining..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5F2AFF] focus:border-transparent outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full group relative flex items-center justify-center py-4 bg-[#FF9500] hover:bg-[#E68600] text-white rounded-xl text-lg font-bold transition-all shadow-lg active:scale-95 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <>
                  Submit Registration
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
