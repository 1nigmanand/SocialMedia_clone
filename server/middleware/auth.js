import jwt from 'jsonwebtoken'

export const varifyToken = async (req,res,next)=>{
    try{
        let token =req.header('Authorization');
        if(!token) return res.status(403).send('Access Denied');

        if (token.startsWith('Bearer')){
            token = token.slice(7,token.length).trimleft();
        }
        const varified = jwt.varify(token, process.env.JWT_SECRET)
        req.user = varified
        next()
    }catch(err){
        res.status(500).json({message:err.message});
    }
}