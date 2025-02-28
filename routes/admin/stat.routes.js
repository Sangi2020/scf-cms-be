import express from "express";
import { activeUsers, bounceRate, cityStats, countryAnalytics, engagedSessions, enquiryStats, fullPageData, pageViewsByPage, sessionDurationDistribution, totalBlogs, totalCounts, totalEnquiries, totalNewsletterSubscribers, totalPageViews,  trafficSources } from "../../controllers/stat.controller.js";
import verifyJwtToken from "../../middlewares/verifyJwtToken.js";




const router = express.Router();

//analytics statistics
router.get("/country-analytics",verifyJwtToken,countryAnalytics )
router.get("/active-users",verifyJwtToken, activeUsers )
router.get('/engaged-sessions',verifyJwtToken,engagedSessions)
router.get('/city-stats',verifyJwtToken,cityStats)
router.get('/total-page-views',verifyJwtToken,totalPageViews)
router.get('/bounce-rate',verifyJwtToken,bounceRate)
router.get('/page-views-by-page',verifyJwtToken,pageViewsByPage)
router.get('/full-page-data',verifyJwtToken,fullPageData)
router.get('/traffic-sources',verifyJwtToken,trafficSources)
router.get('/session-duration',verifyJwtToken,sessionDurationDistribution)


// 

router.get('/total-enquiries',verifyJwtToken,totalEnquiries)
router.get('/total-subscribers',verifyJwtToken,totalNewsletterSubscribers)
router.get('/total-blogs',verifyJwtToken,totalBlogs)
router.get('/enquiries/last-7-days',verifyJwtToken,enquiryStats)


router.get('/',verifyJwtToken,totalCounts)




export default router;