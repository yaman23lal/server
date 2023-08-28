const express = require("express")
const fs = require("fs")
const session = require('express-session')
const multer = require('multer')
const moment = require("moment")
const cors = require("cors")

const port = process.env.PORT || 3000;
const startDb = require("./database/init");
const adminModel = require("./database/models/admin");
const membermodel = require("./database/models/members");
const AdminControl = require("./controllers/admin/adminController")
const FormControl = require("./controllers/form/formController")
const ReportControl = require("./controllers/report/reportController")
const sambhagController= require("./controllers/sdistblockController")
const memberController= require("./controllers/member/memberController")
// const MemberControl = require("./controllers/member/memberController")
// const ReportControl = require("./controllers/report/reportController")




startDb();

const app = express();

app.use(express.static("public"));
app.use(express.static("uploads"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

const upload = multer({ dest: 'uploads' })

app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: false }

}))

app.set("view engine", "ejs");
app.set("views", "./views");


app.route("/").get((req,res)=>{
	res.render("Home");
})

// app.route("/admin").get(AdminControl.getAdmin)
app.route("/login").post(AdminControl.login).get(AdminControl.showLogin)
app.route("/signup").get(AdminControl.showSignup).post(upload.single("profilePic"),AdminControl.saveAdmin)
app.route("/form").get(FormControl.checkTime,FormControl.showForm).post(upload.single("profilePic"),FormControl.SaveAttandance)
app.route("/form/:id").get(FormControl.showFormUpdate).post(FormControl.UpdateAttandance)
app.route("/getmember").post(FormControl.SendMember)
app.route("/report").post(ReportControl.getReport).get(ReportControl.showReport)
app.route("/getSambhag").get(sambhagController.getSambhag)
app.route("/getSingleData/:id").get(ReportControl.getSingle)
app.route("/getDist").post(sambhagController.getDist)
app.route("/getBlock").post(sambhagController.getBlock)
app.route("/getAreaSewadar").post(sambhagController.getBlock)
app.route("/addmember").post(memberController.showForm).get(memberController.showForm)
app.route("/getAreaseawdar").post(memberController.getAreaseawdar)


// app.route("/report").get(ReportControl)
// app.route("/member").get(MemberControl)
// app.route("/form").get(FormControl)

// let date= new Date();
// console.log(date.getDate);
// console.log(new Date());


// const day = new Date().getDate();
// const month = new Date().getMonth()
// const year = new Date().getFullYear()



// let today = `${year}-${month+1}-${day}`

// const date1 = new Date(today)

// let tomorrow =new Date(date1.getTime()+19*60*60*1000-24*60*60*1000);
// let tod =new Date(date1.getTime()+6*60*60*1000)
// // console.log(new Date(date1.getTime()+5.5*60*60*1000));
// console.log(tomorrow);
// console.log(tod);
// console.log();
// console.log(moment().format());
// console.log(moment());
// console.log(moment().subtract(10, 'days').calendar()); // 11/30/2022
// console.log(moment().subtract(6, 'days').calendar());  // Last Sunday at 4:10 PM
// console.log(moment().subtract(3, 'days').calendar());  // Last Wednesday at 4:10 PM
// console.log(moment().subtract(1, 'days').calendar());  // Yesterday at 4:10 PM
// console.log(moment().calendar());                      // Today at 4:10 PM
// console.log(moment().add(1, 'days').calendar());       // Tomorrow at 4:10 PM
// console.log(moment().add(3, 'days').calendar());       // Tuesday at 4:10 PM
// console.log(moment().add(10, 'days').calendar()); 



app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

