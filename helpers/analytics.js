import { BetaAnalyticsDataClient } from '@google-analytics/data';
import 'dotenv/config';

const analyticsDataClient = new BetaAnalyticsDataClient();



const propertyId = 467519422;

// Helper function to fetch data from GA4
async function fetchReport(metrics, dimensions) {
    try {
      const [response] = await analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        metrics,
        dimensions,
      });
  
      return response.rows.map(row => {
        const result = {};
        dimensions.forEach((dimension, index) => {
          result[dimension.name] = row.dimensionValues[index]?.value || 'Unknown';
        });
        metrics.forEach((metric, index) => {
          result[metric.name] = row.metricValues[index]?.value || 0;
        });
        return result;
      });
    } catch (error) {
      console.error('Error fetching analytics data:', error);
      throw new Error('Failed to fetch analytics data.');
    }
  }

  export default fetchReport;