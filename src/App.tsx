import React from 'react';
import adaptusLogo from '../adaptus2.jpg';
import { Github, Server, Zap, Shield, Database, Plug as Plugin, Terminal, Gauge, MessageSquare, Brain, Layers, LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/10">
      <Icon className="w-8 h-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-secondary font-serif">{title}</h3>
      <p className="text-secondary/80 text-justify leading-relaxed">{description}</p>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-primary/5 font-sans">
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
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#use-cases"
              className="text-secondary hover:text-primary transition-colors"
            >
              Use Cases
            </a>
            <a
              href="#about"
              className="text-secondary hover:text-primary transition-colors"
            >
              About
            </a>
             <a
              href="#chatbot-ai"
              className="text-secondary hover:text-primary transition-colors"
            >
              Chatbot AI
            </a>
            <a
              href="#adaptus2-ui"
              className="text-secondary hover:text-primary transition-colors"
            >
              Adaptus2-UI
            </a>
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
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 w-48 bg-white/90 backdrop-blur-sm shadow-md rounded-bl-lg rounded-br-lg z-50">
            <a
              href="#use-cases"
              className="block px-4 py-2 text-secondary hover:text-primary transition-colors"
            >
              Use Cases
            </a>
            
            <a
              href="#chatbot-ai"
              className="block px-4 py-2 text-secondary hover:text-primary transition-colors"
            >
              Chatbot AI
            </a>
            <a
              href="https://github.com/mataluis2k/Adaptus2-UI"
              className="block px-4 py-2 text-secondary hover:text-primary transition-colors"
            >
              Adaptus2-UI
            </a>
            <a
              href="https://github.com/mataluis2k/Adaptus2-Framework"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-secondary hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-secondary hover:text-primary transition-colors"
            >
              About
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${adaptusLogo})`, opacity: 0.1, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative">
          <h1 className="text-5xl font-bold text-secondary mb-8 font-serif">
            Build AI-Ready, No-Code Apps Instantly with <br/>
            <span className="text-primary">Adaptus2-Framework</span>
          </h1>
          <p className="text-xl text-secondary/80 mb-10 max-w-3xl mx-auto leading-relaxed">
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
        <h2 className="text-3xl font-bold text-center mb-16 text-secondary font-serif">Key Features</h2>
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

      {/* Installation Section */}
      <div className="bg-white/50 backdrop-blur-sm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-secondary font-serif">Get Started in Minutes</h2>
          <div className="bg-secondary rounded-lg p-8 max-w-3xl mx-auto shadow-lg">
            <p className="text-primary/80 mb-5 leading-relaxed">First, create a folder for your server configs and plugins:</p>
            <code className="text-primary block mb-8 bg-secondary/90 p-4 rounded">
              mkdir adaptus2<br/>
              cd adaptus2
            </code>
            
            <p className="text-primary/80 mb-5 leading-relaxed">Install the framework globally:</p>
            <code className="text-primary block mb-8 bg-secondary/90 p-4 rounded">
              npm install -g adaptus2-framework
            </code>
            
            <p className="text-primary/80 mb-5 leading-relaxed">Set up your server configuration:</p>
            <code className="text-primary block mb-8 bg-secondary/90 p-4 rounded">
              adaptus2-setup
            </code>
            
            <p className="text-primary/80 mb-5 leading-relaxed">If you have an existing database with schema, hydrate/build the apiConfig.json file:</p>
            <code className="text-primary block mb-8 bg-secondary/90 p-4 rounded">
              adaptus2 --build
            </code>
            
            <p className="text-primary/80 mb-5 leading-relaxed">Start the server:</p>
            <code className="text-primary block bg-secondary/90 p-4 rounded">
              adaptus2
            </code>
          </div>
          <p className="text-center mt-10 text-secondary/80 leading-relaxed">
            Start building your next API with Adaptus2 Framework today!
          </p>
        </div>
      </div>

      {/* Use Cases Section */}
      <div id="use-cases" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-10 text-secondary font-serif">Adaptus2-Framework Use Cases</h2>        
        <p className="text-secondary/80 text-justify mb-12 max-w-4xl mx-auto leading-relaxed">
          Adaptus2-Framework is a versatile and powerful tool that can solve a variety of real-world business problems. Here are several use case ideas that illustrate how different businesses could benefit:
        </p>

        <div className="mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-5 text-secondary font-serif">1. Real-Time Customer Support & Communication Hub</h3>
          <p className="text-secondary/80 text-justify mb-5 leading-relaxed">
            <strong>Overview:</strong> Build an interactive customer support platform that provides live chat, instant notifications, and even integrates with tools like Slack and Microsoft Teams.
          </p>
          <p className="text-secondary/80 mb-3 font-medium">
            <strong>Business Benefits:</strong>
          </p>
          <ul className="list-disc pl-8 mb-5 space-y-2 text-secondary/80">
            <li className="leading-relaxed">Enhanced Customer Engagement: Immediate responses help resolve issues faster.</li>
            <li className="leading-relaxed">Multi-Channel Communication: Seamlessly link website chats, mobile apps, and internal team channels.</li>
          </ul>
          <p className="text-secondary/80 mb-3 font-medium">
            <strong>Key Features Used:</strong>
          </p>
          <ul className="list-disc pl-8 mb-5 space-y-2 text-secondary/80">
            <li className="leading-relaxed">Real-time communication via WebSocket and chatModule</li>
            <li className="leading-relaxed">Integration with teamsChatPlugin and slackChatPlugin</li>
            <li className="leading-relaxed">Comprehensive logging and error handling to ensure smooth operations</li>
          </ul>
        </div>

        <div className="mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-5 text-secondary font-serif">2. E-Commerce & Payment Processing Platform</h3>
          <p className="text-secondary/80 text-justify mb-5 leading-relaxed">
            <strong>Overview:</strong> Develop a secure online store that not only manages product listings and user accounts but also integrates various payment methods and tax calculations.
          </p>
          <p className="text-secondary/80 mb-3 font-medium">
            <strong>Business Benefits:</strong>
          </p>
          <ul className="list-disc pl-8 mb-5 space-y-2 text-secondary/80">
            <li className="leading-relaxed">Secure Transactions: Token-based authentication and role-based access control protect sensitive data.</li>
            <li className="leading-relaxed">Efficient Operations: Plugins handle payments (e.g., braintreePaymentPlugin) and tax calculations (e.g., taxJarPlugin), reducing manual intervention.</li>
          </ul>
          <p className="text-secondary/80 mb-3 font-medium">
            <strong>Key Features Used:</strong>
          </p>
          <ul className="list-disc pl-8 mb-5 space-y-2 text-secondary/80">
            <li className="leading-relaxed">Dynamic routing and secure API endpoints</li>
            <li className="leading-relaxed">Payment processing and tax integration plugins</li>
            <li className="leading-relaxed">Request logging and robust error handling for transaction safety</li>
          </ul>
        </div>

        <div className="mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-5 text-secondary font-serif">3. Data Analytics & Marketing Automation</h3>
          <p className="text-secondary/80 text-justify mb-5 leading-relaxed">
            <strong>Overview:</strong> Create a platform that aggregates customer data, tracks user behavior, and automates marketing campaigns across multiple channels.
          </p>
          <p className="text-secondary/80 mb-3 font-medium">
            <strong>Business Benefits:</strong>
          </p>
          <ul className="list-disc pl-8 mb-5 space-y-2 text-secondary/80">
            <li className="leading-relaxed">Insightful Decision-Making: Data normalization and real-time analytics help businesses understand customer trends.</li>
            <li className="leading-relaxed">Automated Outreach: Integrate with Google Analytics, Facebook Marketing, and Klaviyo for targeted campaigns.</li>
          </ul>
          <p className="text-secondary/80 mb-3 font-medium">
            <strong>Key Features Used:</strong>
          </p>
          <ul className="list-disc pl-8 mb-5 space-y-2 text-secondary/80">
            <li className="leading-relaxed">API and plugin integrations like googleAnalyticsPlugin, facebookMarketingPlugin, and klaviyoPlugin</li>
            <li className="leading-relaxed">Business rules engine for data transformation</li>
            <li className="leading-relaxed">Dynamic GraphQL API for flexible querying</li>
          </ul>
        </div>

        <div className="mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-5 text-secondary font-serif">4. Content Management & Digital Experience Platform</h3>
          <p className="text-secondary/80 text-justify mb-5 leading-relaxed">
            <strong>Overview:</strong> Develop a customizable CMS for businesses that need to manage digital content, image galleries, and templated pages.
          </p>
          <p className="text-secondary/80 mb-3 font-medium">
            <strong>Business Benefits:</strong>
          </p>
          <ul className="list-disc pl-8 mb-5 space-y-2 text-secondary/80">
            <li className="leading-relaxed">Improved User Experience: Dynamic content delivery and templated page generation allow for attractive, responsive designs.</li>
            <li className="leading-relaxed">Streamlined Operations: Easy content updates and image processing through dedicated plugins.</li>
          </ul>
          <p className="text-secondary/80 mb-3 font-medium">
            <strong>Key Features Used:</strong>
          </p>
          <ul className="list-disc pl-8 mb-5 space-y-2 text-secondary/80">
            <li className="leading-relaxed">Content dispatcher and galleryPlugin for image management</li>
            <li className="leading-relaxed">Dynamic routing and GraphQL for on-the-fly content updates</li>
            <li className="leading-relaxed">Secure file upload with Multer</li>
          </ul>
        </div>

        <div className="mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-5 text-secondary font-serif">Summary</h3>
          <p className="text-secondary/80 text-justify mb-6 leading-relaxed">
            Adaptus2-Framework's robust set of features—from real-time communication and dynamic API generation to flexible plugin integration and secure data management—allows businesses to tackle a wide array of challenges. Whether it's enhancing customer support, automating marketing, streamlining e-commerce, or integrating disparate systems, the framework is designed to be adaptable and powerful while remaining accessible to non-technical users.
          </p>
          <p className="text-secondary/80 text-justify leading-relaxed">
            These examples highlight how the framework can be applied in different industries, providing practical solutions that improve efficiency, security, and overall business performance.
          </p>
        </div>                
      </div>

      {/* Chatbot AI Section */}
      <div id="chatbot-ai" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-secondary font-serif text-center">How to Build an AI Chatbot Using Adaptus2-Framework</h2>
          <p className="text-xl text-secondary/80 mb-4 text-center font-medium">Create an Advanced AI Chatbot Online with Real-Time Capabilities</p>
          <p className="text-secondary/80 text-justify mb-10 leading-relaxed">
            With the rise of AI-driven conversations, businesses are increasingly integrating AI chatbot online solutions to enhance customer interactions, automate responses, and improve user engagement. In this guide, we'll walk through how to build a real-time AI chat online using the powerful Adaptus2-Framework, which offers seamless integrations, dynamic configurations, and built-in AI capabilities.
          </p>

          <h3 className="text-2xl font-semibold mb-5 text-secondary font-serif">1. Why Use Adaptus2-Framework for an AI Chatbot Online?</h3>
          <p className="text-secondary/80 text-justify mb-5 leading-relaxed">
            Adaptus2-Framework simplifies the development of an AI chatbot by providing:
          </p>
          <ul className="list-disc pl-8 mb-8 space-y-3 text-secondary/80">
            <li className="leading-relaxed">✅ Pre-built Chat Module – Real-time messaging with WebSocket.</li>
            <li className="leading-relaxed">✅ AI Integration – Built-in AI processing using the ollamaModule for intelligent responses.</li>
            <li className="leading-relaxed">✅ GraphQL API – Enables flexible chatbot data retrieval and storage.</li>
            <li className="leading-relaxed">✅ Role-Based Access Control – Secure interactions between users and the chatbot.</li>
            <li className="leading-relaxed">✅ Plugin Support – Easily integrate with messaging services like Slack, Teams, or web chat widgets.</li>
          </ul>
          <p className="text-secondary/80 text-justify mb-10 leading-relaxed">
            With these features, you can create an AI chatbot online that handles customer support, lead generation, knowledge base queries, and much more!
          </p>

          <h3 className="text-2xl font-semibold mb-5 text-secondary font-serif">2. Setting Up the AI Chat Online System</h3>
          <h4 className="text-xl font-medium mb-4 text-secondary">Step 1: Install and Configure Adaptus2-Framework</h4>
          <p className="text-secondary/80 text-justify mb-4 leading-relaxed">
            First, ensure you have Node.js installed and then set up Adaptus2-Framework:
            Make a folder where you want to store your server configurations and plugins:            
          </p>
          <pre className="bg-secondary/10 p-4 rounded-lg mb-6"><code>
            mkdir adaptus2
            cd adaptus2
            sudo npm -g install adaptus2-framework</code></pre>
          <p className="text-secondary/80 text-justify mb-4 leading-relaxed">
            Next, create an apiConfig.json file to define routes and settings:
          </p>
          <pre className="bg-secondary/10 p-4 rounded-lg mb-6"><code>
          # Set up your server configuration: \n
          adaptus2-setup\n

          #If you have an existing database with schema, hydrate/build the apiConfig.json file:\n

          adaptus2 --build\n

          # run server \n
                                 
          </code></pre>
          <p className="text-secondary/80 text-justify mb-4 leading-relaxed">
            Run the framework:
          </p>
          <pre className="bg-secondary/10 p-4 rounded-lg mb-8"><code>adaptus2</code></pre>
          <p className="text-secondary/80 text-justify mb-6 leading-relaxed">
            This initializes your backend, including WebSocket support for real-time conversations.
          </p>

          <h4 className="text-xl font-medium mb-4 text-secondary">Step 2: Enable the Chat Module</h4>
          <p className="text-secondary/80 text-justify mb-4 leading-relaxed">
            Adaptus2-Framework includes a built-in chatModule for managing chat interactions. 
          </p>
          <p className="text-secondary/80 mb-4 font-medium">
            💡 How It Works:
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-secondary/80">
            <li className="leading-relaxed">Users connect via WebSocket.</li>
            <li className="leading-relaxed">Messages are stored in chatDB.</li>
            <li className="leading-relaxed">The chat history limit is configurable.</li>
          </ul>
          <p className="text-secondary/80 text-justify mb-4 leading-relaxed">
            Start the chat server:
          </p>
          <pre className="bg-secondary/10 p-4 rounded-lg mb-6"><code>node server.js --enable-chat</code></pre>
          <p className="text-secondary/80 text-justify mb-10 leading-relaxed">
            Now, the real-time AI chat online system is ready to process messages.
          </p>

          <h3 className="text-2xl font-semibold mb-5 text-secondary font-serif">3. Integrating AI Responses Using Ollama AI Module</h3>
          <p className="text-secondary/80 text-justify mb-5 leading-relaxed">
            To make the chatbot AI-powered, we leverage the ollamaModule for natural language processing.
          </p>
          <h4 className="text-xl font-medium mb-4 text-secondary">Step 1: Activate the AI Module</h4>
          <p className="text-secondary/80 text-justify mb-4 leading-relaxed">
            Enable the AI response handler in apiConfig.json:
          </p>
          <pre className="bg-secondary/10 p-4 rounded-lg mb-6"><code>{'{\n' +
          '    "modules": {\n' +
          '        "ollamaModule": {\n' +
          '        "enable": true,\n' +
          '        "model": "openai-gpt-4",\n' +
          '        "responseLength": 200\n' +
          '        }\n' +
          '    }\n' +
          '}'}</code></pre>
          <p className="text-secondary/80 text-justify mb-6 leading-relaxed">
            This configuration connects the chatbot to an AI model that generates intelligent responses.
          </p>

          <h4 className="text-xl font-medium mb-4 text-secondary">Step 2: Implement AI Message Handling</h4>
          <p className="text-secondary/80 text-justify mb-4 leading-relaxed">
            Modify the chatbot's message handler in server.js:
          </p>
          <pre className="bg-secondary/10 p-4 rounded-lg mb-6"><code>{'const { ollamaModule } = require(\'adaptus2-framework\');\n\n' +
          '                    io.on(\'connection\', (socket) => {\n' +
          '                        console.log(\'User connected\');\n\n' +
          '                        socket.on(\'chatMessage\', async (msg) => {\n' +
          '                            const aiResponse = await ollamaModule.generateResponse(msg);\n' +
          '                            socket.emit(\'botReply\', aiResponse);\n' +
          '                        });\n\n' +
          '                        socket.on(\'disconnect\', () => {\n' +
          '                            console.log(\'User disconnected\');\n' +
          '                        });\n' +
          '                    });'}</code></pre>
          <p className="text-secondary/80 mb-4 font-medium">
            💡 How It Works:
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-secondary/80">
            <li className="leading-relaxed">User sends a message via WebSocket (chatMessage).</li>
            <li className="leading-relaxed">AI module processes the message and generates a response.</li>
            <li className="leading-relaxed">Chatbot sends back an intelligent reply (botReply).</li>
          </ul>
          <p className="text-secondary/80 text-justify mb-10 leading-relaxed">
            This makes your AI chatbot online capable of understanding and responding in a natural, human-like manner.
          </p>

          <h3 className="text-2xl font-semibold mb-5 text-secondary font-serif">Final Thoughts: Your AI Chatbot Online Is Ready! 🚀</h3>
          <p className="text-secondary/80 text-justify mb-5 leading-relaxed">
            By leveraging Adaptus2-Framework, you have successfully built an AI chatbot online that supports:
          </p>
          <ul className="list-disc pl-8 mb-6 space-y-3 text-secondary/80">
            <li className="leading-relaxed">✅ Real-time messaging with WebSocket</li>
            <li className="leading-relaxed">✅ AI-powered responses using Ollama AI</li>
            <li className="leading-relaxed">✅ Multi-channel integration (Slack, Teams, Website Chat)</li>
            <li className="leading-relaxed">✅ Secure and scalable architecture</li>
          </ul>
          <p className="text-secondary/80 text-justify mb-4 leading-relaxed">
            This AI chat online solution can be used for customer support, lead generation, and business automation, transforming the way users interact with your brand.
          </p>
          <p className="text-secondary/80 text-justify mb-4 leading-relaxed">
            Want to take your chatbot to the next level?
          </p>
          <p className="text-secondary/80 text-justify mb-6 leading-relaxed">
            💡 Enhance it with voice support, predictive analytics, or multilingual capabilities!
          </p>
          <p className="text-secondary/80 text-justify leading-relaxed font-medium">
            Start building with Adaptus2-Framework today and redefine how you engage with your users in the digital world. 🚀
          </p>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-10 text-secondary font-serif">About Adaptus2 Framework</h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-secondary/80 text-justify">
            <h3 className="text-2xl font-semibold mb-5 text-secondary font-serif">Why Adaptus2-Framework?</h3>
            <p className="mb-6 leading-relaxed">
              In the fast-paced world of enterprise software development, businesses face recurring challenges: long development cycles, costly engineering efforts, scalability concerns, and security vulnerabilities. Adaptus2-Framework was built to eliminate these bottlenecks and provide a flexible framework that empowers enterprises to define software applications without writing code.
            </p>
            <p className="mb-6 leading-relaxed">
              With Adaptus2-Framework, you don't just build software—you define it. Experience the future of application development today.
            </p>
          </div>
          
          <div className="mb-12 text-secondary/80 text-justify">
            <h3 className="text-2xl font-semibold mb-5 text-secondary font-serif">About the Author</h3>
            <p className="mb-6 leading-relaxed">
              Luis B. Mata is a distinguished Chief Technology Officer with over two decades of experience in the tech industry, where he has been instrumental in pioneering advanced solutions in artificial intelligence, machine learning, and behavioral analytics. He has successfully built and led seven startups to successful exits, consistently delivering innovative solutions that drive both business growth and customer engagement.
            </p>
            <p className="mb-6 leading-relaxed">
              His expertise in AI and machine learning has allowed him to solve complex problems in behavioral analytics, pushing the boundaries of personalized experiences.
            </p>
            <p className="mb-6 leading-relaxed">
              Follow him on <a href="https://www.linkedin.com/in/cto-luis-mata/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a> or <a href="https://medium.com/@cto_louism" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Medium</a>.
            </p>
          </div>
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
