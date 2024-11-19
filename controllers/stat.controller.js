import fetchReport from "../helpers/analytics.js";




export const countryAnalytics = async (req, res) => {
    try {
        const result = await fetchReport(
          [{ name: 'totalUsers' }], 
          [{ name: 'country' }],
          { startDate: '30daysAgo', endDate: 'today' }  // Date range: last 30 days
        );
        
        if (!result || result.length === 0) {
          return res.status(404).json({ success: false, message: 'No data found for country analytics.' });
        }
        
        res.json({ success: true, data: result });
      } catch (error) {
        console.error('Error fetching country analytics data:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch country analytics data.' });
      }
}