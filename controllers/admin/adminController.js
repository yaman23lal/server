const adminService =require("../../services/admin/adminService")
const adminModel=require("../../database/models/admin")
const membermodel =require("../../database/models/members")
// const adminModelf=require("")


const showLogin = async function(req,res){
    res.render("login",{ error: "" })

}
const getAdmin = async function(req,res){
    res.render("login",{ error: "" })

}
const showSignup = async function(req,res){
 res.render("signup",{massage:0})
}
const saveAdmin = async function(req,res){
    // console.log(req.file);
    user = {
        Name: req.body.Name,
        Mobile: req.body.mobnumber,
        UserId:req.body.userid,
        Password: req.body.password,
        profile_pic: req.file.filename,
        Block:req.body.block,
        Sambhag:req.body.sambhag,
        Dist:req.body.dist,
        isVerified: true,
        type:req.body.type
		    
	}		

	try
	{
		adminService.createAdmin(user);

		res.render("signup",{massage:1})
	}
	catch(err)
	{
		console.log(err)
        console.log("error aaya");
	}

}
const login= async function(req,res){
    const mobile=req.body.mobile;
    const password=req.body.password;
    try {
        const user =await adminModel.find({Mobile:mobile,Password:password});

        if (user.length) {
            req.session.isLoggedIn = true;
            req.session.user = user[0];
            if(!user[0].isVerified)
        {   
            
            const err={code:400,massage:"Please Verify Your Account"}
            // res.render("login",{error:err });
            res.send(err)
            return
        }  
        if (user[0].type==="Admin") {
            adminService.loginAdmin(user[0],res)
            return
            }   
        else if(user[0].type==="Block") {
            adminService.loginBlock(user[0],res)
            return
            }   
        else if(user[0].type==="District") {
            adminService.loginDistrict(user[0],res)
            return
            }   
        else if(user[0].type==="Sambhag") {
            adminService.loginAdmin(user[0],res)
            return
            }   
        
        }
        else{
            res.send("User not found")
        }

    } catch (error) {
        console.log(error);
        const err={code:400,massage:"User Not Found"}
            res.render("login", { error:err });
    }
    
       
}


module.exports={
getAdmin,
saveAdmin,
login,
showSignup,
showLogin
} 