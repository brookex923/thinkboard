import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    // Implement rate limiting logic here, e.g., using a library like express-rate-limit
    try{
        const {success} = await ratelimit.limit("my-limit-key")

        if(!success){
            return res.status(429).json({message: "Too many requests, please try again later."})
        }

        next();
    }
    catch(error){
        console.error("Rate limiting error:", error);
        res.status(500).json({message: "Internal server error"});
    }
    
}

export default rateLimiter;