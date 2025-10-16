import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    country: '',
    courseName: '',
    preferenceCountry: '',
    query: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[\d\s()-]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (formData.mobileNumber.trim() && !phoneRegex.test(formData.mobileNumber)) {
        newErrors.mobileNumber = 'Please enter a valid phone number.';
    }
    if (!formData.query.trim()) newErrors.query = 'A query message is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In a real application, you would send the data to a server here.
      console.log('Form submitted successfully:', formData);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">Contact Us</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Have a question or need personalized guidance? Fill out the form below, and one of our expert advisors will get back to you shortly.
            </p>
          </div>
          
          <div className="bg-brand-light p-8 rounded-xl shadow-lg border border-gray-200">
            {isSubmitted ? (
                <div className="bg-brand-teal text-white p-6 rounded-lg text-center h-full flex flex-col justify-center">
                    <h4 className="font-bold text-xl">Thank You!</h4>
                    <p className="mt-2">Your query has been sent. We'll get back to you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name-contact" className="sr-only">Name</label>
                            <input type="text" name="name" id="name-contact" placeholder="Your Name" value={formData.name} onChange={handleChange} aria-invalid={!!errors.name} aria-describedby="name-error-contact" className={`w-full bg-white p-3 rounded-md border ${errors.name ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-brand-teal transition`} required />
                            {errors.name && <p id="name-error-contact" className="text-red-400 text-sm mt-1">{errors.name}</p>}
                        </div>
                         <div>
                            <label htmlFor="email-contact" className="sr-only">Email</label>
                            <input type="email" name="email" id="email-contact" placeholder="Your Email" value={formData.email} onChange={handleChange} aria-invalid={!!errors.email} aria-describedby="email-error-contact" className={`w-full bg-white p-3 rounded-md border ${errors.email ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-brand-teal transition`} required />
                            {errors.email && <p id="email-error-contact" className="text-red-400 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="mobileNumber-contact" className="sr-only">Mobile Number</label>
                            <input type="tel" name="mobileNumber" id="mobileNumber-contact" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} aria-invalid={!!errors.mobileNumber} aria-describedby="mobileNumber-error-contact" className={`w-full bg-white p-3 rounded-md border ${errors.mobileNumber ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-brand-teal transition`} />
                            {errors.mobileNumber && <p id="mobileNumber-error-contact" className="text-red-400 text-sm mt-1">{errors.mobileNumber}</p>}
                        </div>
                        <div>
                            <label htmlFor="country-contact" className="sr-only">Your Country</label>
                            <input type="text" name="country" id="country-contact" placeholder="Your Country" value={formData.country} onChange={handleChange} className="w-full bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-teal transition" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="courseName-contact" className="sr-only">Course Name</label>
                            <input type="text" name="courseName" id="courseName-contact" placeholder="Course Name (e.g., MSc in Data Science)" value={formData.courseName} onChange={handleChange} className="w-full bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-teal transition" />
                        </div>
                         <div className="sm:col-span-2">
                            <label htmlFor="preferenceCountry-contact" className="sr-only">Preference Country</label>
                            <input type="text" name="preferenceCountry" id="preferenceCountry-contact" placeholder="Preference Country for Study/Work" value={formData.preferenceCountry} onChange={handleChange} className="w-full bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-teal transition" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="query-contact" className="sr-only">Query Box</label>
                        <textarea name="query" id="query-contact" placeholder="Your Query" rows={4} value={formData.query} onChange={handleChange} aria-invalid={!!errors.query} aria-describedby="query-error-contact" className={`w-full bg-white p-3 rounded-md border ${errors.query ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-brand-teal transition`} required></textarea>
                        {errors.query && <p id="query-error-contact" className="text-red-400 text-sm mt-1">{errors.query}</p>}
                    </div>
                    <button type="submit" className="w-full bg-brand-teal text-white font-bold py-3 px-6 rounded-md hover:bg-brand-blue transition-all shadow-lg transform hover:-translate-y-1">Submit Query</button>
                </form>
            )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;