import express from "express";
import routes from "./routes/routes.js"
import authMiddlewares from "./app/middlewares/auth.js"

class App{
    constructor(){
        this.server = express()
        this.server.listen(4040)
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.server.use(express.json())
    }

    routes(){
        this.server.use(routes)
    }
}

export default new App().server
