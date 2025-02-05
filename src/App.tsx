import React from 'react';
import adaptusLogo from '../adaptus2.jpg';
import { Github, Server, Zap, Shield, Database, Plug as Plugin, Terminal, Gauge, MessageSquare, Brain } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
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
        <div className="absolute inset-0" style={{ backgroundImage: `url(${adaptusLogo})`, opacity: 0.1, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative">
          <h1 className="text-5xl font-bold text-secondary mb-6">
          Build Powerful, AI-Ready Apps with <span className="text-primary">Adaptus2-Framework</span>
          </h1>
          <p className="text-xl text-secondary/80 mb-8 max-w-3xl mx-auto">
          A flexible, modular framework built on Express for plug-and-play machine learning—run local LLMs, RAG, real-time updates, GraphQL, and scalable microservices. Go from zero to production fast!
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
          <FeatureCard
            icon={Server}
            title="Core Server & REST API"
            description="Express-based server with dynamic routing, CRUD operations, and advanced middleware support."
          />
          <FeatureCard
            icon={Zap}
            title="Real-Time Communication"
            description="WebSocket integration with Redis Pub/Sub for instant updates and notifications."
          />
          <FeatureCard
            icon={Shield}
            title="Advanced Security"
            description="Built-in authentication, authorization, rate limiting, and comprehensive security features."
          />
          <FeatureCard
            icon={Database}
            title="Database Integration"
            description="Flexible database support with MySQL and PostgreSQL, featuring automated initialization."
          />
          <FeatureCard
            icon={Plugin}
            title="Plugin System"
            description="Dynamic plugin management with network synchronization for cluster environments."
          />
          <FeatureCard
            icon={Terminal}
            title="Developer Tools"
            description="Comprehensive CLI tools and debugging endpoints for efficient development."
          />
          <FeatureCard
            icon={Gauge}
            title="Analytics Module"
            description="Built-in analytics for monitoring API health, performance, and usage metrics."
          />
          <FeatureCard
            icon={MessageSquare}
            title="Chat Module"
            description="Optional real-time chat functionality for interactive applications."
          />
          <FeatureCard
            icon={Brain}
            title="ML Analytics"
            description="Machine learning integration with model training and scheduled tasks."
          />
        </div>
      </div>

      {/* Installation Section */}
      <div className="bg-white/50 backdrop-blur-sm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-secondary">Get Started in Minutes</h2>
          <div className="bg-secondary rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-primary/80 mb-4">First, create a folder for your server configs and plugins:</p>
            <code className="text-primary block mb-6 bg-secondary/90 p-3 rounded">
              mkdir adaptus2<br/>
              cd adaptus2
            </code>
            
            <p className="text-primary/80 mb-4">Install the framework globally:</p>
            <code className="text-primary block mb-6 bg-secondary/90 p-3 rounded">
              npm install -g adaptus2-framework
            </code>
            
            <p className="text-primary/80 mb-4">Set up your server configuration:</p>
            <code className="text-primary block mb-6 bg-secondary/90 p-3 rounded">
              adaptus2-setup
            </code>
            
            <p className="text-primary/80 mb-4">If you have an existing database with schema, hydrate/build the apiConfig.json file:</p>
            <code className="text-primary block mb-6 bg-secondary/90 p-3 rounded">
              adaptus2 --build
            </code>
            
            <p className="text-primary/80 mb-4">Start the server:</p>
            <code className="text-primary block bg-secondary/90 p-3 rounded">
              adaptus2
            </code>
          </div>
          <p className="text-center mt-8 text-secondary/80">
            Start building your next API with Adaptus2 Framework today!
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="https://raw.githubusercontent.com/adaptus2-framework/assets/main/logo-white.png" 
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
