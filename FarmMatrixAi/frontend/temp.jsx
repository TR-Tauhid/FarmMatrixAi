


 

Searched for files matching `FarmMatrixAi` · `backend/routes/*.js`, 6 matches




 

Read [](file:///d%3A/Projects/capstone/FarmMatrixAi/backend/routes/auth.js)




 

Read [](file:///d%3A/Projects/capstone/FarmMatrixAi/backend/routes/crops.js)




 

Read [](file:///d%3A/Projects/capstone/FarmMatrixAi/backend/routes/disease.js)




 

Read [](file:///d%3A/Projects/capstone/FarmMatrixAi/backend/routes/environment.js)




 

Read [](file:///d%3A/Projects/capstone/FarmMatrixAi/backend/routes/market.js)




 

Read [](file:///d%3A/Projects/capstone/FarmMatrixAi/backend/routes/news.js)



## Backend API Routes

### `/api/auth` (Authentication)
- **GET** `/profile/:firebaseUid` - Get user profile
- **POST** `/profile` - Create new user profile
- **PUT** `/profile/:firebaseUid` - Update user profile
- **DELETE** `/profile/:firebaseUid` - Delete user profile
- **POST** `/verify` - Verify Firebase token

### `/api/crops` (Crop Recommendations)
- **POST** `/recommend` - Get crop recommendations
- **GET** `/history/:userId` - Get user's crop recommendation history
- **GET** `/:id` - Get specific recommendation
- **DELETE** `/:id` - Delete a recommendation

### `/api/disease` (Disease Detection)
- **POST** `/analyze` - Analyze image for disease
- **GET** `/history/:userId` - Get user's disease detection history
- **GET** `/:id` - Get specific detection
- **DELETE** `/:id` - Delete a detection record

### `/api/environment` (Environment Data)
- **POST** `/` - Get environmental data
- **GET** `/soil/:region` - Get soil health summary
- **GET** `/weather/:region` - Get weather summary
- **GET** `/history/:userId` - Get environmental history
- **POST** `/save` - Save environmental data

### `/api/market` (Market Data)
- **GET** `/overview` - Get market overview
- **GET** `/trends` - Get market trends
- **GET** `/sentiment` - Get market sentiment
- **GET** `/performance/:commodity` - Get performance metrics
- **GET** `/analysis` - Get trend analysis chart data

### `/api/news` (News)
- **GET** `/` - Get all news with filters
- **GET** `/categories` - Get category filters
- **GET** `/trending` - Get trending news
- **GET** `/category/:category` - Get news by category
- **GET** `/:id` - Get specific news article
- **POST** `/` - Create news article (admin)You've used 61% of your session rate limit. Your session rate limit will reset on April 30 at 2:26 AM. [Learn More](https://aka.ms/github-copilot-rate-limit-error)


### **API Endpoints Summary**

* **Crop Diagnostics (`POST /diagnostics/`)**
    * **Request:** JSON containing Nitrogen, Phosphorus, Potassium, Temperature, Humidity, pH, and Rainfall.
    * **Response:** `success`, `crop`, `image`, and `error`.

* **Contact Form (`POST /send-contact/`)**
    * **Request:** JSON containing `name`, `email`, `subject`, and `message`.
    * **Response:** `success`, `message`, and `error`.

* **Weather Retrieval (`POST /weather/get-weather/`)**
    * **Request:** JSON containing `city`.
    * **Response:** `success`, `city`, `country`, `temperature`, `humidity`, `pressure`, `description`, `icon`, and `wind_speed`.

* **Disease Detection (`POST /api/disease-detect`)**
    * **Request:** Multipart form data containing an `image`.
    * **Response:** `success`, `disease`, `confidence`, `treatment`, and `image_url`.

* **Environment Status (`GET /api/environment`)**
    * **Request:** JSON information.
    * **Response:** `Weather status`, `temperature`, `Humidity`, `Air Quality`, and `Precipitation`.

* **Chatbot Interaction (`POST /chatbot/send-message/`)**
    * **Request:** JSON containing `message`.
    * **Response:** `success`, `response`, and `timestamp`.

* **Alerts Information (`GET /alerts/get-alerts/`)**
    * **Request:** Query parameters for `crop` and `location`.
    * **Response:** `success`, `alerts` (array), and `weather`.