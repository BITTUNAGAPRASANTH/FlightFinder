module.exports=(req,res,next)=>{

const role=req.headers.role;

if(role==="admin")

next();

else

res.send("Not Authorized");

}