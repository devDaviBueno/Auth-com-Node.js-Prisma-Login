import jwt from "jsonwebtoken"

export default (req, res, next) => {
    const authHeader = req.headers.authorization

    const [,token] = authHeader && authHeader.split(" ")
    if(!token){
       return res.status(401).json({msg: "Acesso negado"})
    }
    try{
        const secret = process.env.SECRET
        const decodec = jwt.verify(token, secret)
        req.userId = decodec.id
        next()

    } catch (error) {
         return res.status(400).json({msg: "Token invalido"})
    }
}
