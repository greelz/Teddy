import * as express from "express";
import * as bodyParser from "body-parser"
import { Routes } from "./routes/routes"

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();
    private np_api = 'NtfC4tBjVQzw3mYqWV0LfrOcsvogjvuDXiawfp9Z';

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        // support applicaiton/json type post data
        this.app.use(bodyParser.json());

        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;
