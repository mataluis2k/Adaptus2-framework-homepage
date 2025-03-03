import React from 'react';
import adaptusLogo from '../adaptus2.jpg';
import { Github, Server, Zap, Shield, Database, Plug as Plugin, Terminal, Gauge, MessageSquare, Brain, Layers } from 'lucide-react';
import { useState } from 'react';

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                  href="#adaptus2-ui"
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

      {/* Use Cases Section */}
      <div id="use-cases" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-8 text-secondary">Adaptus2-Framework Use Cases</h2>        
                  <p className="text-secondary/80 text-center">Adaptus2-Framework is a versatile and powerful tool that can solve a variety of real-world business problems. Here are several use case ideas that illustrate how different businesses could benefit:</p>

                  <div>
                    <h3>1. Real-Time Customer Support & Communication Hub</h3>
                    <p><strong>Overview:</strong> Build an interactive customer support platform that provides live chat, instant notifications, and even integrates with tools like Slack and Microsoft Teams.</p>
                    <p><strong>Business Benefits:</strong></p>
                    <ul>
                      <li>Enhanced Customer Engagement: Immediate responses help resolve issues faster.</li>
                      <li>Multi-Channel Communication: Seamlessly link website chats, mobile apps, and internal team channels.</li>
                    </ul>
                    <p><strong>Key Features Used:</strong></p>
                    <ul>
                      <li>Real-time communication via WebSocket and chatModule</li>
                      <li>Integration with teamsChatPlugin and slackChatPlugin</li>
                      <li>Comprehensive logging and error handling to ensure smooth operations</li>
                    </ul>
                  </div>

                  <div>
                    <h3>2. E-Commerce & Payment Processing Platform</h3>
                    <p><strong>Overview:</strong> Develop a secure online store that not only manages product listings and user accounts but also integrates various payment methods and tax calculations.</p>
                    <p><strong>Business Benefits:</strong></p>
                    <ul>
                      <li>Secure Transactions: Token-based authentication and role-based access control protect sensitive data.</li>
                      <li>Efficient Operations: Plugins handle payments (e.g., braintreePaymentPlugin) and tax calculations (e.g., taxJarPlugin), reducing manual intervention.</li>
                    </ul>
                    <p><strong>Key Features Used:</strong></p>
                    <ul>
                      <li>Dynamic routing and secure API endpoints</li>
                      <li>Payment processing and tax integration plugins</li>
                      <li>Request logging and robust error handling for transaction safety</li>
                    </ul>
                  </div>

                  <div>
                    <h3>3. Data Analytics & Marketing Automation</h3>
                    <p><strong>Overview:</strong> Create a platform that aggregates customer data, tracks user behavior, and automates marketing campaigns across multiple channels.</p>
                    <p><strong>Business Benefits:</strong></p>
                    <ul>
                      <li>Insightful Decision-Making: Data normalization and real-time analytics help businesses understand customer trends.</li>
                      <li>Automated Outreach: Integrate with Google Analytics, Facebook Marketing, and Klaviyo for targeted campaigns.</li>
                    </ul>
                    <p><strong>Key Features Used:</strong></p>
                    <ul>
                      <li>API and plugin integrations like googleAnalyticsPlugin, facebookMarketingPlugin, and klaviyoPlugin</li>
                      <li>Business rules engine for data transformation</li>
                      <li>Dynamic GraphQL API for flexible querying</li>
                    </ul>
                  </div>

                  <div>
                    <h3>4. Content Management & Digital Experience Platform</h3>
                    <p><strong>Overview:</strong> Develop a customizable CMS for businesses that need to manage digital content, image galleries, and templated pages.</p>
                    <p><strong>Business Benefits:</strong></p>
                    <ul>
                      <li>Improved User Experience: Dynamic content delivery and templated page generation allow for attractive, responsive designs.</li>
                      <li>Streamlined Operations: Easy content updates and image processing through dedicated plugins.</li>
                    </ul>
                    <p><strong>Key Features Used:</strong></p>
                    <ul>
                      <li>Content dispatcher and galleryPlugin for image management</li>
                      <li>Dynamic routing and GraphQL for on-the-fly content updates</li>
                      <li>Secure file upload with Multer</li>
                    </ul>
                  </div>

                  <div>
                    <h3>5. Enterprise Integration & API Gateway</h3>
                    <p><strong>Overview:</strong> Create an integration platform that connects internal systems with third-party services like Salesforce, Mailgun, or external databases.</p>
                    <p><strong>Business Benefits:</strong></p>
                    <ul>
                      <li>Seamless Data Flow: Consolidate and synchronize data across various business systems, reducing silos.</li>
                      <li>Increased Efficiency: Automate data exchanges and reduce manual errors.</li>
                    </ul>
                    <p><strong>Key Features Used:</strong></p>
                    <ul>
                      <li>Robust database connectivity and dynamic table creation</li>
                      <li>Plugin architecture for integrations (e.g., salesforcePushPlugin, mailgunPlugin)</li>
                      <li>Configuration management and CLI tools for easy administration</li>
                    </ul>
                  </div>

                  <div>
                    <h3>6. Health & Fitness Data Platform</h3>
                    <p><strong>Overview:</strong> Build a backend system for health and fitness apps that can process data from wearable devices and fitness trackers.</p>
                    <p><strong>Business Benefits:</strong></p>
                    <ul>
                      <li>Personalized Health Insights: Aggregate and analyze data from sources like Google Fit and IHealth to offer customized advice.</li>
                      <li>Scalable and Secure: Manage high volumes of data securely with robust error handling and dynamic configuration.</li>
                    </ul>
                    <p><strong>Key Features Used:</strong></p>
                    <ul>
                      <li>Dedicated modules like GoogleFitDataModule and IHealthDataModule</li>
                      <li>Real-time data processing via WebSocket</li>
                      <li>Secure authentication and role-based access control</li>
                    </ul>
                  </div>

                  <div>
                    <h3>7. Logistics & Operations Dashboard</h3>
                    <p><strong>Overview:</strong> Develop a comprehensive dashboard for logistics companies to monitor shipments, track deliveries, and manage fleet operations in real time.</p>
                    <p><strong>Business Benefits:</strong></p>
                    <ul>
                      <li>Operational Efficiency: Real-time insights help quickly address bottlenecks and streamline workflows.</li>
                      <li>Enhanced Transparency: Detailed logging and reporting improve accountability and decision-making.</li>
                    </ul>
                    <p><strong>Key Features Used:</strong></p>
                    <ul>
                      <li>Request logging and error handling for operational reliability</li>
                      <li>Dynamic routing and real-time communication modules</li>
                      <li>Multi-database support for integrating various data sources</li>
                    </ul>
                  </div>

                  <div>
                    <h3>Summary</h3>
                    <p>Adaptus2-Framework’s robust set of features—from real-time communication and dynamic API generation to flexible plugin integration and secure data management—allows businesses to tackle a wide array of challenges. Whether it’s enhancing customer support, automating marketing, streamlining e-commerce, or integrating disparate systems, the framework is designed to be adaptable and powerful while remaining accessible to non-technical users.</p>
                    <p>These examples highlight how the framework can be applied in different industries, providing practical solutions that improve efficiency, security, and overall business performance.</p>
                  </div>                
      </div>
            {/* Chatbot AI Section */}
      <div id="chatbot-ai" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div>
                    <h2>How to Build an AI Chatbot Using Adaptus2-Framework</h2>
                    <p>Create an Advanced AI Chatbot Online with Real-Time Capabilities</p>
                    <p>With the rise of AI-driven conversations, businesses are increasingly integrating AI chatbot online solutions to enhance customer interactions, automate responses, and improve user engagement. In this guide, we’ll walk through how to build a real-time AI chat online using the powerful Adaptus2-Framework, which offers seamless integrations, dynamic configurations, and built-in AI capabilities.</p>

                    <h3>1. Why Use Adaptus2-Framework for an AI Chatbot Online?</h3>
                    <p>Adaptus2-Framework simplifies the development of an AI chatbot by providing:</p>
                    <ul>
                        <li>✅ Pre-built Chat Module – Real-time messaging with WebSocket.</li>
                        <li>✅ AI Integration – Built-in AI processing using the ollamaModule for intelligent responses.</li>
                        <li>✅ GraphQL API – Enables flexible chatbot data retrieval and storage.</li>
                        <li>✅ Role-Based Access Control – Secure interactions between users and the chatbot.</li>
                        <li>✅ Plugin Support – Easily integrate with messaging services like Slack, Teams, or web chat widgets.</li>
                    </ul>
                    <p>With these features, you can create an AI chatbot online that handles customer support, lead generation, knowledge base queries, and much more!</p>

                    <h3>2. Setting Up the AI Chat Online System</h3>
                    <h4>Step 1: Install and Configure Adaptus2-Framework</h4>
                    <p>First, ensure you have Node.js installed and then set up Adaptus2-Framework:</p>
                    <pre><code>npm install adaptus2-framework</code></pre>
                    <p>Next, create an apiConfig.json file to define routes and settings:</p>
                    <pre><code>{
                    "server": {
                        "port": 3000,
                        "enableGraphQL": true,
                        "enableWebSocket": true
                    },
                    "authentication": {
                        "jwtSecret": "your_secret_key",
                        "enableACL": true
                    }
                    }</code></pre>
                    <p>Run the framework:</p>
                    <pre><code>node server.js</code></pre>
                    <p>This initializes your backend, including WebSocket support for real-time conversations.</p>

                    <h4>Step 2: Enable the Chat Module</h4>
                    <p>Adaptus2-Framework includes a built-in chatModule for managing chat interactions. Activate it by adding the following to your apiConfig.json:</p>
                    <pre><code>{
                    "modules": {
                        "chatModule": {
                        "enable": true,
                        "database": "chatDB",
                        "historyLimit": 50
                        }
                    }
                    }</code></pre>
                    <p>💡 How It Works:</p>
                    <ul>
                        <li>Users connect via WebSocket.</li>
                        <li>Messages are stored in chatDB.</li>
                        <li>The chat history limit is configurable.</li>
                    </ul>
                    <p>Start the chat server:</p>
                    <pre><code>node server.js --enable-chat</code></pre>
                    <p>Now, the real-time AI chat online system is ready to process messages.</p>

                    <h3>3. Integrating AI Responses Using Ollama AI Module</h3>
                    <p>To make the chatbot AI-powered, we leverage the ollamaModule for natural language processing.</p>
                    <h4>Step 1: Activate the AI Module</h4>
                    <p>Enable the AI response handler in apiConfig.json:</p>
                    <pre><code>{
                    "modules": {
                        "ollamaModule": {
                        "enable": true,
                        "model": "openai-gpt-4",
                        "responseLength": 200
                        }
                    }
                    }</code></pre>
                    <p>This configuration connects the chatbot to an AI model that generates intelligent responses.</p>

                    <h4>Step 2: Implement AI Message Handling</h4>
                    <p>Modify the chatbot’s message handler in server.js:</p>
                    <pre><code>const { ollamaModule } = require('adaptus2-framework');

                    io.on('connection', (socket) => {
                        console.log('User connected');

                        socket.on('chatMessage', async (msg) => {
                            const aiResponse = await ollamaModule.generateResponse(msg);
                            socket.emit('botReply', aiResponse);
                        });

                        socket.on('disconnect', () => {
                            console.log('User disconnected');
                        });
                    });</code></pre>
                    <p>💡 How It Works:</p>
                    <ul>
                        <li>User sends a message via WebSocket (chatMessage).</li>
                        <li>AI module processes the message and generates a response.</li>
                        <li>Chatbot sends back an intelligent reply (botReply).</li>
                    </ul>
                    <p>This makes your AI chatbot online capable of understanding and responding in a natural, human-like manner.</p>

                    <h3>4. Adding Multi-Channel Support (Slack, Teams, Website Chat)</h3>
                    <h4>Step 1: Integrate Slack or Microsoft Teams</h4>
                    <p>Enable the Slack and Teams plugins in apiConfig.json:</p>
                    <pre><code>{
                    "plugins": {
                        "slackChatPlugin": { "enable": true },
                        "teamsChatPlugin": { "enable": true }
                    }
                    }</code></pre>
                    <p>Now, messages can be routed to Slack and Teams, allowing your AI chat online to be accessible across different platforms.</p>

                    <h4>Step 2: Embed the Chatbot on a Website</h4>
                    <p>Use a simple JavaScript frontend for embedding chat on your site:</p>
                    <pre><code>&lt;script&gt;
                    const socket = io("http://yourserver.com");

                    function sendMessage() {
                        const message = document.getElementById("userInput").value;
                        socket.emit("chatMessage", message);
                    }

                    socket.on("botReply", function(response) {
                        document.getElementById("chatbox").innerHTML += `&lt;p&gt;${response}&lt;/p&gt;`;
                    });
                    &lt;/script&gt;

                    &lt;input type="text" id="userInput"&gt;
                    &lt;button onclick="sendMessage()"&gt;Send&lt;/button&gt;
                    &lt;div id="chatbox"&gt;&lt;/div&gt;</code></pre>
                    <p>Now, the AI chatbot online is embedded in your website and ready to interact with visitors.</p>

                    <h3>5. Ensuring Security and Scalability</h3>
                    <p>To protect user data and ensure reliability, Adaptus2-Framework offers:</p>
                    <ul>
                        <li>✅ JWT Authentication – Secure chat sessions.</li>
                        <li>✅ Role-Based Access Control (ACL) – Restrict access for different user roles.</li>
                        <li>✅ Redis Caching – Speeds up AI responses.</li>
                        <li>✅ Error Logging – Tracks chat issues and errors.</li>
                    </ul>
                    <p>Enable JWT authentication for chat in apiConfig.json:</p>
                    <pre><code>{
                    "authentication": {
                        "jwtSecret": "secure_key",
                        "enableACL": true
                    }
                    }</code></pre>

                    <h3>6. Deploying Your AI Chatbot Online</h3>
                    <h4>Step 1: Deploy on a Cloud Server</h4>
                    <p>Use AWS, DigitalOcean, or Heroku for deployment:</p>
                    <pre><code>pm2 start server.js --name "chatbot"</code></pre>

                    <h4>Step 2: Use a Load Balancer</h4>
                    <p>If you expect high traffic, scale using Redis Pub/Sub:</p>
                    <pre><code>{
                    "clustering": {
                        "enable": true,
                        "redis": "your-redis-url"
                    }
                    }</code></pre>

                    <h4>Step 3: Enable Real-Time Logging & Monitoring</h4>
                    <p>Track chatbot performance with:</p>
                    <pre><code>node server.js --log-requests</code></pre>

                    <h3>Final Thoughts: Your AI Chatbot Online Is Ready! 🚀</h3>
                    <p>By leveraging Adaptus2-Framework, you have successfully built an AI chatbot online that supports:</p>
                    <ul>
                        <li>✅ Real-time messaging with WebSocket</li>
                        <li>✅ AI-powered responses using Ollama AI</li>
                        <li>✅ Multi-channel integration (Slack, Teams, Website Chat)</li>
                        <li>✅ Secure and scalable architecture</li>
                    </ul>
                    <p>This AI chat online solution can be used for customer support, lead generation, and business automation, transforming the way users interact with your brand.</p>
                    <p>Want to take your chatbot to the next level?</p>
                    <p>💡 Enhance it with voice support, predictive analytics, or multilingual capabilities!</p>
                    <p>Start building with Adaptus2-Framework today and redefine how you engage with your users in the digital world. 🚀</p>
                    </div>


      </div>
      {/* About Section */}
      <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-8 text-secondary">About Adaptus2 Framework</h2>
        <p className="text-secondary/80 text-center">
        <div>
                  <h2>Why Adaptus2-Framework? Solving Enterprise Pain Points with a No-Code API-Driven Solution</h2>
                  <p>
                    In the fast-paced world of enterprise software development, businesses face recurring challenges: long development cycles, costly engineering efforts, scalability concerns, and security vulnerabilities. <strong>Adaptus2-Framework</strong> was built to <strong>eliminate these bottlenecks</strong> and provide a <strong>flexible, zero-opinionated framework</strong> that empowers enterprises to define software applications without writing code.
                  </p>

                  <h3>Key Pain Points Addressed:</h3>
                  <ol>
                    <li>
                      <strong>🚀 Speed to Market</strong> – Traditional development cycles take months. Adaptus2 automatically builds REST and GraphQL APIs based on a simple configuration file, accelerating deployment from months to days.
                    </li>
                    <li>
                      <strong>💰 Cost Reduction</strong> – No need for large development teams to build CRUD applications, API endpoints, or database structures. Adaptus2 reduces engineering effort by automating these processes.
                    </li>
                    <li>
                      <strong>🔄 Scalability & Performance</strong> – Built with clustering, Redis caching, WebSocket support, and dynamic plugin loading, Adaptus2 scales effortlessly across distributed environments.
                    </li>
                    <li>
                      <strong>🛡️ Security & Compliance</strong> – Out-of-the-box security with JWT/OAuth2 authentication, ACL-based access control, rate limiting, and audit logging ensures enterprise-grade compliance.
                    </li>
                    <li>
                      <strong>🧠 AI & Automation</strong> – Embedded ML capabilities allow anomaly detection, sentiment analysis, and recommendations, eliminating the need for separate AI integrations.
                    </li>
                    <li>
                      <strong>🔧 Customization without Complexity</strong> – Define business rules using plain English DSL (Domain-Specific Language) at the API level—no need for custom coding.
                    </li>
                    <li>
                      <strong>🛠️ Multi-Database Support</strong> – Supports <strong>MySQL, PostgreSQL, MongoDB, and Snowflake</strong> natively, with automated table creation and initialization.
                    </li>
                    <li>
                      <strong>📊 Real-Time Insights</strong> – Built-in logging, GraphQL analytics, and webhook event tracking ensure full visibility into API performance and user behavior.
                    </li>
                  </ol>

                  <h3>Key Features of Adaptus2-Framework</h3>
                  <p><strong>“Adaptus2-Framework: Enterprise Software, Without the Engineering Bottlenecks.”</strong></p>
                  <ul>
                    <li>✅ <strong>Define APIs & Business Rules—No Code Needed</strong></li>
                    <li>✅ <strong>Deploy Scalable Applications in Days, Not Months</strong></li>
                    <li>✅ <strong>Reduce Engineering Costs Without Compromising Flexibility</strong></li>
                    <li>✅ <strong>Enterprise-Grade Security & AI-Driven Capabilities, Out-of-the-Box</strong></li>
                  </ul>

                  <h4>Who is it for?</h4>
                  <ul>
                    <li>SaaS companies looking for <strong>faster API deployment</strong></li>
                    <li>Enterprises needing <strong>secure, scalable backend solutions</strong></li>
                    <li>Businesses leveraging <strong>AI-powered automation</strong></li>
                    <li>CTOs and CIOs wanting <strong>developer efficiency & cost savings</strong></li>
                  </ul>

                  <p>
                    With Adaptus2-Framework, you don’t just build software—you <strong>define it</strong>. <strong>Experience the future of application development today.</strong> 🚀
                  </p>

                  <div>
                    <h2>About the Author</h2>
                    <p>
                      Luis B. Mata is a distinguished Chief Technology Officer with over two decades of experience in the tech industry, where he has been instrumental in pioneering advanced solutions in artificial intelligence, machine learning, and behavioral analytics. He has successfully built and led seven startups to successful exits, consistently delivering innovative solutions that drive both business growth and customer engagement.
                    </p>
                    <p>
                      His expertise in AI and machine learning has allowed him to solve complex problems in behavioral analytics, pushing the boundaries of personalized experiences.
                    </p>
                    <p>
                      Follow him on <a href="https://www.linkedin.com/in/cto-luis-mata/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href="https://medium.com/@cto_louism" target="_blank" rel="noopener noreferrer">Medium</a>.
                    </p>
                  </div>
                </div>
        </p>
        {/* Add more content here */}
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
