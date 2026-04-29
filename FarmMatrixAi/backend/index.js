const express = require("express");
const cors = require("cors");
const path = require("path");

// Import routes
const authRoutes = require("./routes/auth");
const cropRoutes = require("./routes/crops");
const diseaseRoutes = require("./routes/disease");
const environmentRoutes = require("./routes/environment");
const marketRoutes = require("./routes/market");
const newsRoutes = require("./routes/news");

// Import middleware
const authMiddleware = require("./middleware/auth");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// ============================================
// MongoDB Connection Placeholder
// ============================================

const { MongoClient, ServerApiVersion } = require("mongodb");

// MongoDB Connection - using environment variables or fallback
const getMongoUri = () => {
  const user = process.env.DB_USER || "";
  const password = process.env.DB_PASSWORD || "";
  const cluster = process.env.DB_CLUSTER || "fmaicluster.msho0uu.mongodb.net";
  
  if (user && password) {
    return `mongodb+srv://${encodeURIComponent(user)}:${encodeURIComponent(password)}@${cluster}/?appName=FMAICluster`;
  }
  // Fallback for local development without credentials
  return `mongodb+srv://${cluster}/?appName=FMAICluster`;
};

const uri = getMongoUri();
console.log("MongoDB URI configured:", uri.replace(/\/\/.*:.*@/, "//[credentials]@"));

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

// ============================================

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")));

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "FarmMatrixAI Backend Running",
    version: "1.0.0",
    endpoints: {
      health: "/",
      auth: "/api/auth",
      crops: "/api/crops",
      disease: "/api/disease",
      environment: "/api/environment",
      market: "/api/market",
      news: "/api/news",
    },
    mongodb: "Integration pending - MongoDB placeholder active",
  });
});

// Apply auth middleware to all API routes
app.use("/api", authMiddleware);

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/crops", cropRoutes);
app.use("/api/disease", diseaseRoutes);
app.use("/api/environment", environmentRoutes);
app.use("/api/market", marketRoutes);
app.use("/api/news", newsRoutes);

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
  });
});

// Error handling middleware
app.use(errorHandler);

// Server configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API Base URL: http://localhost:${PORT}/api`);
  console.log(`MongoDB: Placeholder mode - integration pending`);
});

module.exports = app;
