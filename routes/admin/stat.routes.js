import express from "express";
import { activeUsers, bounceRate, cityStats, countryAnalytics, engagedSessions, fullPageData, pageViewsByPage, totalPageViews, trafficSources } from "../../controllers/stat.controller.js";




const router = express.Router();

router.get("/country-analytics", countryAnalytics )
router.get("/active-users", activeUsers )
router.get('/engaged-sessions',engagedSessions)
router.get('/city-stats',cityStats)
router.get('/total-page-views',totalPageViews)
router.get('/bounce-rate',bounceRate)
router.get('/page-views-by-page',pageViewsByPage)
router.get('/full-page-data',fullPageData)
router.get('/traffic-sources',trafficSources)


export default router;