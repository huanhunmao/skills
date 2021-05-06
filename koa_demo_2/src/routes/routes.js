import combineRoutes from "koa-combine-routers";

import publicRouter from "./publicRouter";

export default combineRoutes(publicRouter);
