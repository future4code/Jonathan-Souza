import { athletesRouter } from './router/athletesRoute';
import { app } from "./controller/app";
import { competitionRouter } from './router/competitionRoute';

app.use("/athletes", athletesRouter)
app.use("/competition", competitionRouter)