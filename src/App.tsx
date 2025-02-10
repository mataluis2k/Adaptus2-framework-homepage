import React from 'react';
import adaptusLogo from '../adaptus2.jpg';
import { Github, Server, Zap, Shield, Database, Plug as Plugin, Terminal, Gauge, MessageSquare, Brain, Layers } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/10">
      <Icon className="w-8 h-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>
      <p className="text-secondary/80">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-primary/5">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={adaptusLogo}
              alt="Adaptus2 Framework" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-secondary">Adaptus2 Framework</span>
          </div>
          <a
            href="https://github.com/mataluis2k/Adaptus2-Framework"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
            <span>GitHub</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${adaptusLogo})`, opacity: 0.1, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative">
          <h1 className="text-5xl font-bold text-secondary mb-6">
            Build AI-Ready, No-Code Apps Instantly with <br/>
            <span className="text-primary">Adaptus2-Framework</span>
          </h1>
          <p className="text-xl text-secondary/80 mb-8 max-w-3xl mx-auto">
            An opinionated framework that lets you define software applications via an API config file—no coding required. Deploy databases, APIs, AI-powered workflows, and RAG-enhanced applications effortlessly.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/mataluis2k/Adaptus2-Framework"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold border-2 border-primary hover:bg-primary/5 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-16 text-secondary">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard icon={Server} title="No-Code API Setup" description="Define applications with an API config file—no coding required." />
          <FeatureCard icon={Database} title="Auto Database Configuration" description="Supports MySQL, PostgreSQL, and Snowflake with automated schema deployment." />
          <FeatureCard icon={Shield} title="Security & Access Control" description="Built-in authentication, authorization, and role-based access management." />
          <FeatureCard icon={Zap} title="Real-Time Communication" description="WebSockets and Redis Pub/Sub for live data updates and notifications." />
          <FeatureCard icon={Brain} title="Embedded AI & Machine Learning" description="Supports anomaly detection, recommendations, and sentiment analysis." />
          <FeatureCard icon={Layers} title="Automatic RAG Support" description="Enable Retrieval-Augmented Generation (RAG) on any table with just a config update." />
          <FeatureCard icon={Gauge} title="Built-in Analytics" description="Monitor API performance, health, and usage trends in real-time." />
          <FeatureCard icon={MessageSquare} title="GraphQL & RESTful Endpoints" description="Seamlessly integrate GraphQL and RESTful API endpoints." />
          <FeatureCard icon={Plugin} title="Dynamic Plugin System" description="Extend functionality with modular, plug-and-play architecture." />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src={adaptusLogo} 
                alt="Adaptus2 Framework" 
                className="h-8 w-auto"
              />
              <span className="font-semibold">Adaptus2 Framework</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/mataluis2k/Adaptus2-Framework" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
