# 🌾 Farm Matrix AI

Farm Matrix AI is a comprehensive, AI-powered agricultural platform designed to empower farmers with intelligent crop recommendations, disease detection, real-time weather forecasting, and market insights. Built with modern web technologies and a focus on user experience, it provides a seamless interface for precision agriculture.

---

## 🎯 Project Overview

Farm Matrix AI combines:
- **AI/ML Models** – Crop recommendation engine and disease detection
- **Real-time Data** – Weather forecasts and soil analysis
- **User-Centric Design** – Intuitive interface with dark mode support
- **Multilingual Support** – English, Bengali, Hindi, and Punjabi
- **Scalable Architecture** – Microservices with Docker containerization

---

## 🧰 Tech Stack

### 🎨 Frontend
- **React 19.2** – Modern component-based UI framework
- **Vite 7.2** – Ultra-fast build tool and dev server
- **Tailwind CSS 4.1** – Utility-first CSS framework
- **DaisyUI 5.5** – Pre-built Tailwind components
- **JavaScript (ES6+)** – Latest ECMAScript standard

### 🔌 Frontend Libraries & Tools
- **React Router DOM 7.9** – Client-side routing and navigation
- **React i18next 16.5** – Internationalization (i18n) support
- **Framer Motion 12.23** – Smooth animations and transitions
- **React Icons 5.6** – Icon library (Lucide & more)
- **Recharts 3.8** – Interactive data visualization charts
- **Keen Slider 6.8** – Touch-friendly carousel/slider component
- **React Leaflet 5.0** – Interactive maps integration
- **Lightgallery 2.9** – Image gallery with zoom and thumbnail plugins
- **Firebase 12.11** – Authentication and real-time database
- **React Toastify 11.0** – Toast notifications
- **i18next 25.8** – Translation engine

### 🔧 Backend
- **Node.js + Express 5.2** – REST API framework
- **MongoDB 7.2** – NoSQL database
- **Mongoose 9.6** – ODM for MongoDB
- **Multer 2.1** – File upload middleware
- **CORS 2.8** – Cross-origin resource sharing
- **Dotenv 17.4** – Environment variable management

### 🤖 AI & External APIs
- **Google Generative AI (@google/generative-ai 0.24)** – Gemini AI for chat and insights
- **News API** – Latest agricultural news
- **Weather API** – Real-time weather data
- **Soil Analysis APIs** – Soil health and composition data
- **Market Data APIs** – Agricultural commodity prices

### 🐳 DevOps & Deployment
- **Docker & Docker Compose** – Containerization
- **GitHub** – Version control
- **ESLint 9.39** – Code quality and linting

---

## 📦 Project Structure

```
FarmMatrixAi/
├── frontend/                    # React + Vite frontend
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   │   ├── aiEngine/       # AI-powered features
│   │   │   ├── environment/    # Environmental data & dashboard
│   │   │   ├── market/         # Market insights & analysis
│   │   │   ├── news/           # News feed component
│   │   │   ├── chat/           # AI chat widget
│   │   │   ├── Navbar.jsx      # Navigation bar
│   │   │   └── SidebarLayout.jsx # Layout wrapper
│   │   ├── pages/              # Page components
│   │   │   ├── home/           # Home page with sections
│   │   │   ├── auth/           # Login/Register pages
│   │   │   └── ...
│   │   ├── context/            # React Context for state management
│   │   │   ├── LanguageContext.jsx
│   │   │   ├── AuthContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   ├── provider/           # Context providers
│   │   ├── locales/            # Translation files (i18n)
│   │   │   ├── en.json         # English translations
│   │   │   ├── bn.json         # Bengali translations
│   │   │   ├── hi.json         # Hindi translations
│   │   │   └── pa.json         # Punjabi translations
│   │   ├── routes/             # Route definitions
│   │   ├── firebase/           # Firebase configuration
│   │   ├── assets/             # Images & static files
│   │   ├── index.css           # Global styles
│   │   └── main.jsx            # Entry point
│   ├── vite.config.js          # Vite configuration
│   ├── tailwind.config.js       # Tailwind CSS config
│   ├── eslint.config.js         # ESLint rules
│   └── package.json
│
├── backend/                     # Express.js backend
│   ├── routes/                 # API endpoint definitions
│   │   ├── auth.js             # Authentication endpoints
│   │   ├── crops.js            # Crop recommendation API
│   │   ├── disease.js          # Disease detection API
│   │   ├── environment.js       # Weather & soil data API
│   │   ├── market.js           # Market insights API
│   │   ├── news.js             # News feed API
│   │   ├── recommend.js        # AI recommendations
│   │   └── chat.js             # Chatbot API
│   ├── controllers/            # Business logic
│   │   ├── authController.js
│   │   ├── cropController.js
│   │   ├── diseaseController.js
│   │   ├── environmentController.js
│   │   ├── marketController.js
│   │   └── newsController.js
│   ├── models/                 # MongoDB schemas
│   │   ├── User.js
│   │   ├── CropRecommendation.js
│   │   ├── DiseaseDetection.js
│   │   ├── Environment.js
│   │   ├── Market.js
│   │   └── News.js
│   ├── middleware/             # Custom middleware
│   │   ├── auth.js             # Authentication middleware
│   │   ├── errorHandler.js     # Error handling
│   │   └── validate.js         # Input validation
│   ├── services/               # External service integration
│   │   └── geminiService.js    # Google Gemini AI integration
│   ├── config/                 # Configuration files
│   ├── index.js                # Server entry point
│   ├── Dockerfile              # Docker image config
│   └── package.json
│
├── docker-compose.yml          # Docker orchestration
└── README.md                   # Documentation
```

---

## ✨ Key Features

### 🌱 Crop Recommendation Engine
- AI-powered crop suggestions based on soil conditions and weather
- Location-based recommendations using GPS
- Historical crop data and yield predictions
- Fertilizer and nutrient requirements

### 🔬 Disease Detection
- CNN-based leaf image analysis
- Plant disease identification from photos
- Disease management and treatment recommendations
- Early warning system for crop threats

### 🌦️ Environmental Dashboard
- Real-time weather forecasts
- Hyper-local weather data (beyond zip codes)
- Soil health and composition analysis
- Deep soil profile insights
- Weather alerts and warnings

### 📊 Market Intelligence
- Live agricultural commodity prices
- Market sentiment analysis
- Price trends and forecasting
- Crop comparison tools
- Asset strip overview

### 📰 Agricultural News Feed
- Latest agriculture industry news
- Research and innovation updates
- Policy and regulation updates
- Interactive news carousel

### 💬 AI Chat Widget
- Gemini AI-powered assistant
- Real-time agricultural guidance
- FAQ and knowledge base
- Multi-language support

### 🔐 User Management
- Secure authentication with Firebase
- User profile management
- Recommendation history
- Personalized dashboards

### 🌍 Multilingual Support
- English, Bengali, Hindi, Punjabi
- Dynamic language switching
- Context-aware translations

### 🌓 Dark Mode
- System-preference detection
- Manual theme toggle
- Persistent theme storage

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18+)
- **npm** or **yarn**
- **MongoDB** (local or Atlas cloud)
- **Docker & Docker Compose** (for containerized setup)
- **Git**

### Installation

#### Option 1: Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/FarmMatrixAi.git
   cd FarmMatrixAi
   ```

2. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   ```

3. **Setup Backend**
   ```bash
   cd ../backend
   npm install
   ```

4. **Configure Environment Variables**
   
   Create `.env` in the backend directory:
   ```
   NODE_ENV=development
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/farmmatrixai
   GEMINI_API_KEY=your_google_generative_ai_key
   PORT=5000
   ```

   Create `.env` in the frontend directory (or use vite.config.js):
   ```
   VITE_API_KEY=your_firebase_api_key
   VITE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_PROJECT_ID=your_firebase_project_id
   VITE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_MESSAGING_SENDER_ID=your_firebase_sender_id
   VITE_APP_ID=your_firebase_app_id
   ```

5. **Run Development Servers**
   
   Terminal 1 - Backend:
   ```bash
   cd backend
   npm run dev
   ```
   Backend runs on: `http://localhost:5000`

   Terminal 2 - Frontend:
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend runs on: `http://localhost:5173`

#### Option 2: Docker Compose (Recommended)

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/FarmMatrixAi.git
   cd FarmMatrixAi
   ```

2. **Create `.env` file** at the root with Firebase and API keys

3. **Build and run with Docker**
   ```bash
   docker-compose up --build
   ```

   - Backend: `http://localhost:5000`
   - Frontend: `http://localhost:3000`

---

## 📋 API Endpoints

### Authentication
- `POST /api/auth/register` – User registration
- `POST /api/auth/login` – User login
- `GET /api/auth/profile` – Get user profile
- `PUT /api/auth/profile` – Update user profile

### Crop Recommendation
- `POST /api/crops/recommend` – Get crop recommendations
- `GET /api/crops/history` – Get recommendation history
- `GET /api/crops/:cropId` – Get crop details

### Disease Detection
- `POST /api/disease/detect` – Upload leaf image for disease detection
- `GET /api/disease/history` – Get detection history
- `GET /api/disease/:id` – Get disease details

### Environment & Weather
- `GET /api/environment/weather` – Get weather data
- `GET /api/environment/soil` – Get soil analysis
- `POST /api/environment/alert` – Weather alert subscription

### Market Data
- `GET /api/market/prices` – Get commodity prices
- `GET /api/market/trends` – Get price trends
- `POST /api/market/compare` – Compare crop prices

### News Feed
- `GET /api/news` – Get agriculture news
- `GET /api/news/:id` – Get news article details

### Chat (Gemini AI)
- `POST /api/chat/message` – Send message to AI assistant

---

## 🛠️ Development Commands

### Frontend
```bash
cd frontend

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Backend
```bash
cd backend

# Development server
npm run dev

# Production server
npm start

# Run tests (when available)
npm test
```

---

## 🔧 Configuration

### Tailwind CSS & DaisyUI
- Located in `frontend/tailwind.config.js`
- Customize themes in `tailwind.config.js`
- DaisyUI components pre-configured

### i18n (Internationalization)
- Translation files in `frontend/src/locales/`
- Add new language: Create `xx.json` in locales folder
- Usage: `const { t } = useTranslation(); t('key.path')`

### Firebase Setup
- Configure in `frontend/src/firebase/firebase.config.js`
- Used for authentication and real-time data

### Gemini AI Integration
- Configured in `backend/services/geminiService.js`
- Used for chatbot and intelligent recommendations

---

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👨‍💻 Authors

- **Team Lead**: Development team
- **Contributors**: Open to contributions!

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### MongoDB Connection Issues
- Verify MongoDB URI in `.env`
- Ensure IP whitelist is configured in MongoDB Atlas
- Check network connectivity

### Vite Development Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Docker Build Failures
```bash
# Clean and rebuild
docker-compose down
docker system prune -a
docker-compose up --build
```

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [DaisyUI Components](https://daisyui.com)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [React i18next Guide](https://react.i18next.com)
- [Firebase Docs](https://firebase.google.com/docs)

---

## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Check existing issues and discussions
- Contact the development team

---

**Happy Farming with AI! 🚜🤖**

```bash
npm install
npm run dev


