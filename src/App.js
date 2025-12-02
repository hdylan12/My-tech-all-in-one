import React, { useState, useEffect } from 'react';
import { Code2, Palette, ShoppingCart, Package, Sparkles, ArrowRight, CheckCircle2, Menu, X, Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

export default function TechAgencyWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful Figma designs that convert visitors into customers",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Solutions",
      description: "Full-featured online stores with various payment integration",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Inventory Management",
      description: "Custom systems to streamline your business operations",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const team = [
    {
      name: "Nsonera H Dylan",
      role: "Co-Founder & CEO",
      image: "bg-gradient-to-br from-pink-400 to-purple-600",
      bio: "Dev"
    },
    {
      name: "Michael",
      role: "Head of Software Engineering",
      image: "bg-gradient-to-br from-blue-400 to-cyan-600",
      bio: "Expert in scalable architecture"
    },
    {
      name: "Ishimwe",
      role: "Full-Stack Developer",
      image: "bg-gradient-to-br from-green-400 to-emerald-600",
      bio: "Project team lead"
    },
    {
      name: "Manzi",
      role: "UI/UX Designer",
      image: "bg-gradient-to-br from-orange-400 to-red-600",
      bio: "Creating beautiful user experiences"
    }
  ];

  const projects = [
    { name: "FinTech Dashboard", type: "Web App", color: "bg-gradient-to-br from-blue-600 to-purple-600" },
    { name: "Fashion E-Store", type: "E-Commerce", color: "bg-gradient-to-br from-pink-500 to-orange-500" },
    { name: "Warehouse Pro", type: "Inventory System", color: "bg-gradient-to-br from-green-500 to-teal-500" },
    { name: "Restaurant Chain", type: "Web Platform", color: "bg-gradient-to-br from-yellow-500 to-red-500" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // Create mailto link with form data
    const subject = encodeURIComponent(`New Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    );
    
    // Replace with your actual email
    const mailtoLink = `mailto:hirwadylan12@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              MyTech
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#work" className="hover:text-cyan-400 transition-colors">Our Work</a>
            <a href="#team" className="hover:text-cyan-400 transition-colors">Team</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Get Started
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#services" className="hover:text-cyan-400" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#work" className="hover:text-cyan-400" onClick={() => setIsMenuOpen(false)}>Our Work</a>
              <a href="#team" className="hover:text-cyan-400" onClick={() => setIsMenuOpen(false)}>Team</a>
              <a href="#contact" className="hover:text-cyan-400" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <button onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }} className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold">
              ✨ Your All-in-One Tech Partner
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We Build Digital
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Experiences That Matter
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              From stunning websites to powerful inventory systems, we craft custom solutions that elevate your business to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 border-2 border-slate-700 rounded-full font-semibold text-lg hover:border-cyan-500 hover:text-cyan-400 transition-all">
                View Our Work
              </button>
            </div>
          </div>

          {/* Floating Cards Animation */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all transform hover:-translate-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">Everything you need to succeed in the digital world</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity`}></div>
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">Transforming ideas into reality for businesses worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 ${project.color} transition-transform group-hover:scale-110`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-sm text-cyan-400 mb-2">{project.type}</div>
                  <h3 className="text-3xl font-bold mb-4">{project.name}</h3>
                  <div className="flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-all">
                    View Case Study <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">The talented people behind your next big project</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className={`aspect-square ${member.image} transition-transform group-hover:scale-110`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-3">
                      <a href="#" className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm mb-2">{member.role}</p>
                <p className="text-slate-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">Let's discuss how we can help grow your business</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-slate-400">dylan@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <p className="text-slate-400">+250 787822523</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Location</p>
                      <p className="text-slate-400">Kicukiro, Kigali</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-800">
                  <p className="font-semibold mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="N Hirwa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="hirwa@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Project Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {formStatus === 'sending' ? 'Opening Email Client...' : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-center">
                    Email client opened! Please send the message from your email app.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold">My Tech All in One</span>
            </div>
            <div className="text-slate-400 text-center">
              © 2025 MyTech all in One. All rights reserved. Building the future, seamlessly.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}