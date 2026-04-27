// filepath: backend/middleware/validate.js
/**
 * Request Validation Middleware
 * Validates incoming request data
 */

const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    
    if (error) {
      const errors = error.details.map(detail => ({
        field: detail.path.join('.'),
        message: detail.message
      }));
      
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }
    
    next();
  };
};

// Validation schemas (placeholder - can be expanded with Joi or Zod)
const schemas = {
  cropRecommendation: {
    validate: (data) => {
      const required = ['soilType', 'climate', 'season'];
      const missing = required.filter(field => !data[field]);
      return { error: missing.length ? `Missing required fields: ${missing.join(', ')}` : null };
    }
  },
  diseaseDetection: {
    validate: (data) => {
      if (!data.imageName && !data.imageUrl) {
        return { error: 'Image is required' };
      }
      return { error: null };
    }
  },
  environment: {
    validate: (data) => {
      if (!data.latitude && !data.longitude && !data.region) {
        return { error: 'Location is required' };
      }
      return { error: null };
    }
  }
};

module.exports = { validate, schemas };