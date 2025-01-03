import express from "express";

import authRoutes from "./auth.routes.js";
import adminBlogRoutes from "./blog.routes.js";
import adminEnquiriesRoutes from "./enquiries.routes.js";
import adminContentsRoutes from "./contents.routes.js";
import adminTeamRoutes from "./team.routes.js";
import adminQnaRoutes from "./qna.routes.js";
import adminClientRoutes from "./client.routes.js";
import adminCatalogueRoutes from "./catalogue.routes.js";
import adminNewsletterRoutes from "./newsletter.routes.js";
import adminSocialRoutes from "./social.routes.js";
import adminStatRoutes from "./stat.routes.js";
import adminEmailConfigRoutes from "./emailConfig.routes.js";
import adminNotificationRoutes from "./notification.routes.js";
import adminDocumentRoutes from "./document.routes.js"
import adminUserRoutes from "./user.routes.js"



const router = express.Router();

router.use("/auth", authRoutes);
router.use("/blog", adminBlogRoutes);
router.use("/team", adminTeamRoutes);
router.use("/enquiries", adminEnquiriesRoutes);
router.use("/contents", adminContentsRoutes);
router.use("/client", adminClientRoutes);
router.use("/qna", adminQnaRoutes);
router.use("/catalogue", adminCatalogueRoutes);
router.use("/newsletter", adminNewsletterRoutes);
router.use('/social', adminSocialRoutes);
router.use('/config', adminEmailConfigRoutes)
router.use('/notification', adminNotificationRoutes)
router.use('/document', adminDocumentRoutes)
router.use('/users', adminUserRoutes)
router.use("/stats", adminStatRoutes);


export default router;