import fetchReport from "../helpers/analytics.js";

// Helper function to handle date range from request or default
const getDateRange = (req) => {
    const { startDate, endDate } = req.query;
    return {
        startDate: startDate || '30daysAgo',
        endDate: endDate || 'today',
    };
};

export const countryAnalytics = async (req, res) => {
    try {
        const dateRange = getDateRange(req);
        const result = await fetchReport(
            [{ name: 'totalUsers' }],
            [{ name: 'country' }],
            dateRange
        );

        if (!result?.length) {
            return res.status(404).json({ 
                success: false, 
                message: 'No data found for country analytics.' 
            });
        }

        res.json({ success: true, data: result });
    } catch (error) {
        console.error('Error fetching country analytics data:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to fetch country analytics data.'
        });
    }
};

export const activeUsers = async (req, res) => {
    try {
        const dateRange = getDateRange(req);
        const result = await fetchReport(
            [{ name: 'activeUsers' }],
            [],
            dateRange
        );

        if (!result?.length) {
            return res.status(404).json({ 
                success: false, 
                message: 'No active users data found.' 
            });
        }

        res.json({ success: true, data: result });
    } catch (error) {
        console.error('Error fetching active users:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to fetch active users.' 
        });
    }
};

export const engagedSessions = async (req, res) => {
    try {
        const dateRange = getDateRange(req);
        const result = await fetchReport(
            [{ name: 'engagedSessions' }],
            [],
            dateRange
        );

        if (!result?.length) {
            return res.status(404).json({ 
                success: false, 
                message: 'No engaged sessions data found.' 
            });
        }

        res.json({ success: true, data: result });
    } catch (error) {
        console.error('Error fetching engaged sessions:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to fetch engaged sessions.' 
        });
    }
};

export const cityStats = async (req, res) => {
    try {
        const dateRange = getDateRange(req);
        const result = await fetchReport(
            [{ name: 'activeUsers' }],
            [{ name: 'city' }],
            dateRange
        );

        if (!result?.length) {
            return res.status(404).json({ 
                success: false, 
                message: 'No city statistics found.' 
            });
        }

        res.json({ success: true, data: result });
    } catch (error) {
        console.error('Error fetching city stats:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to fetch city-wise stats.' 
        });
    }
};

export const totalPageViews = async (req, res) => {
    try {
        const dateRange = getDateRange(req);
        const result = await fetchReport(
            [{ name: 'screenPageViews' }],
            [],
            dateRange
        );

        if (!result?.length) {
            return res.status(404).json({ 
                success: false, 
                message: 'No page view data found.' 
            });
        }

        res.json({ success: true, data: result });
    } catch (error) {
        console.error('Error fetching page views:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to fetch total page views.' 
        });
    }
};

export const bounceRate = async (req, res) => {
    try {
        const dateRange = getDateRange(req);
        const result = await fetchReport(
            [{ name: 'bounceRate' }],
            [],
            dateRange
        );

        if (!result?.length) {
            return res.status(404).json({ 
                success: false, 
                message: 'No bounce rate data found.' 
            });
        }

        res.json({ success: true, data: result });
    } catch (error) {
        console.error('Error fetching bounce rate:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to fetch bounce rate.' 
        });
    }
};

export const pageViewsByPage = async (req, res) => {
    try {
        const dateRange = getDateRange(req);
        const result = await fetchReport(
            [{ name: 'screenPageViews' }], // Changed to array for consistency
            [{ name: 'pagePath' }],
            dateRange
        );

        if (!result?.length) {
            return res.status(404).json({ 
                success: false, 
                message: 'No page-wise view data found.' 
            });
        }

        res.json({ success: true, data: result });
    } catch (error) {
        console.error('Error fetching page views by page:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to fetch page views by page.' 
        });
    }
};

export const fullPageData = async (req, res) => {
    try {
        const dateRange = getDateRange(req);
        const result = await fetchReport(
            [
                { name: 'screenPageViews' },
                { name: 'sessions' },
                { name: 'activeUsers' },
                { name: 'eventCount' },
                { name: 'engagementRate' },
            ],
            [
                { name: 'pagePath' },
                { name: 'pageTitle' },
            ],
            dateRange
        );

        if (!result?.length) {
            return res.status(404).json({ 
                success: false, 
                message: 'No full page data found.' 
            });
        }

        res.json({ success: true, data: result });
    } catch (error) {
        console.error('Error fetching full page data:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to fetch full page data.' 
        });
    }
};