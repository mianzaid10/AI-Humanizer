// Vercel Speed Insights Integration
// This script initializes Speed Insights for the static HTML site

import { injectSpeedInsights } from 'https://cdn.jsdelivr.net/npm/@vercel/speed-insights@2.0.0/dist/index.mjs';

// Initialize Speed Insights
// This will automatically track web vitals and performance metrics
injectSpeedInsights({
  // Enable debug mode in development (defaults to true in dev)
  debug: false,
  // Sample rate controls what percentage of events are sent (1 = 100%)
  sampleRate: 1
});
