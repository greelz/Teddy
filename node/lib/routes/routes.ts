import { Request, Response } from "express";

const api_key = 'NtfC4tBjVQzw3mYqWV0LfrOcsvogjvuDXiawfp9Z';
const request = require('request');

export class Routes {
    public routes(app): void {
        app.route("/")
        .get( (req: Request, res: Response) => {
            res.status(200).send({
                message: "GET request successful"
            })
        })

        app.route("/api_key")
        .get( (req: Request, res: Response, app) => {
            res.status(200).send({
                message: api_key
            })
        })

        app.route("/parks/:parkName")
        .get( (req: Request, resp: Response) => {
            request('https://api.nps.gov/api/v1/parks?parkCode=' + req.params.parkName, { json: true }, (err, res, body) => {
                if (err) { resp.send({ err }); }
                resp.send({ body });
            });
        })

        .put( (req: Request, res: Response) => {
            res.status(200).send({
                message: "POST request successful"
            })
        })

        .post( (req: Request, res: Response) => {
            res.status(200).send({
                message: "POST successful"
            })
        })

        .delete( (req: Request, res: Response) => {
            res.status(200).send({
                message: "DELETE successful"
            })
        })
    }
}
