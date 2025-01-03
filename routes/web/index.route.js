import express from "express";

import webBlogRoutes from "./blog.routes.js";
import webEnquiriesRoutes from "./enquiries.routes.js";
import webContentsRoutes from "./contents.routes.js";
import webTeamRoutes from "./team.routes.js";
import webQnaRoutes from "./qna.routes.js";
import webClientRoutes from "./client.routes.js";
import webCatalogueRoutes from "./catalogue.routes.js";
import webNewsletterRoutes from "./newsletter.routes.js";
import webSocialRoutes from "./social.routes.js";


const router = express.Router();

router.use("/blog", webBlogRoutes);
router.use("/team", webTeamRoutes);
router.use("/enquiries", webEnquiriesRoutes);
router.use("/contents", webContentsRoutes);
router.use("/client", webClientRoutes);
router.use("/qna", webQnaRoutes);
router.use("/catalogue", webCatalogueRoutes);
router.use("/newsletter", webNewsletterRoutes);
router.use('/social', webSocialRoutes);


export default router;