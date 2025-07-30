import { Router } from "express";
const router: Router = Router();

import * as controller from "../../controllers/client/order.controller";

router.get("/", controller.order);

export const orderRoutes: Router = router;
