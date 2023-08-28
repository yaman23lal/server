let tday= new Date(new Date().getTime()+21*60*60*1000);
 tday= new Date();
const day = new Date().getDate();
const month = new Date().getMonth()
const year = new Date().getFullYear()

let today = `${month+1}/${day}/${year}`
// console.log(today);
const date1 = new Date(today)
    let endTime =new Date(date1.getTime()+20.95*60*60*1000)
   console.log("Today is "+ new Date());
   console.log("End Time Is is "+ endTime);

const mdiv=document.getElementById("mobile");

    const div =document.querySelector('#massage')
    // div.setAttribute("class", "alert alert-danger alert-dismissible fade show");
    // div.setAttribute("role", "alert");
    // div.innerHTML='<strong>wrong</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
    const fullname = document.querySelector("#fullname");
    const District = document.querySelector("#District");
    const Block = document.querySelector("#Block");
    const Group = document.querySelector("#Group");
    const Team = document.querySelector("#Team");
    const teamDiv = document.querySelector("#team");
    const Gender = document.querySelector("#gender");
    const bookSewaDiv = document.querySelector("#bookSewaDiv");
    const DeptSewaDiv = document.querySelector("#deptSewaDiv");
    const bookSewaMessage = document.querySelector("#bookSewaMessage");
    const bookSewaPost = document.querySelector("#fbBookpost");
    const bookSewaEvent = document.querySelector("#fbBookevent");
    const bookSewaIndian = document.querySelector("#Nationalbook");
    const bookSewaInternational = document.querySelector("#InterNationalbook");




async function GetAllDetail(id) {
    
    const reqst = new XMLHttpRequest();
    reqst.open("GET", `http://localhost:3000//getAllDetail/${id}`);
    reqst.send();

   reqst.addEventListener("load", function () {
         let sts =reqst.status;
         if (sts==200) {
            if (number.hasAttribute("class")) {
                number.removeAttribute("class");
            }
         
             let val = JSON.parse(reqst.responseText)
    
            fullname.value=val.Name;
            District.value=val.Dist;
            Block.value=val.Block;
            Group.value=val.Group;
            Gender.value=val.Gender;
              
            
            if (val.DepartmentSewa) {
                DeptSewaDiv.style.display="block";

            }
            if (val.BookSewa) {

                if (tday>endTime) {
                    console.log("Im true block");
                    bookSewaMessage.style.display="block";


                   } else {
                    teamDiv.style.display="flex";
                    bookSewaDiv.style.display="block";
                   }
                bookSewaDiv.style.display="block";
            }

        }
         })
        }

   





    async function getM(number){
        const mobile =number.value;
   
        const p = number.parentElement;
        const form = p.parentElement;
        const body =form.parentElement;
    
    
    if (mobile.length==10) {
        
        const reqst = new XMLHttpRequest();
        reqst.open("POST", "http://localhost:3000/getmember");
        reqst.setRequestHeader("content-type", "application/json")
        reqst.send(JSON.stringify({ Mobile: mobile}));
    
       reqst.addEventListener("load", function () {
             let sts =reqst.status;
             if (sts==200) {
                if (number.hasAttribute("class")) {
                    number.removeAttribute("class");
                }
                let tag = mdiv.lastElementChild.tagName;
                // console.log(tag);
                if (tag=="DIV") {
                    mdiv.removeChild(mdiv.lastElementChild);
                 } 
                number.setAttribute("class", "form-control is-valid border border-success border-2");
                // number.style.border="2px solid green";
                 let val = JSON.parse(reqst.responseText)
                //  console.log(val);
                 

                fullname.value=val.Name;
                District.value=val.Dist;
                Block.value=val.Block;
                Group.value=val.Group;
                // console.log(val.Team);
                Gender.value="Male"
                if (val.TrendMember) {
                    Team.value=val.Team;
                    
                    if (tday>endTime) {
                        console.log("Im true block");
                        bookSewaMessage.style.display="block";


                       } else {
                        teamDiv.style.display="flex";
                        bookSewaDiv.style.display="block";
                       }
                   
                }
                if (val.Department) {
                   DeptSewaDiv.style.display="block";
                }
             }
             else{
                if (number.hasAttribute("class")) {
                    number.removeAttribute("class");
                }
                let tag = mdiv.lastElementChild.tagName;
                // console.log(tag);
                if (tag=="DIV") {
                    mdiv.removeChild(mdiv.lastElementChild);
                 } 
                // console.log(reqst.responseText);
                number.setAttribute("class", "form-control is-invalid");
                const massage=document.createElement("div");
                massage.setAttribute("class","invalid-feedback")
                massage.setAttribute("id","validationServerUsernameFeedback")
                massage.innerText="आपका नंबर Registered नहीं हैं अपने ब्लॉक सेवादार से सम्पर्क करे"
                mdiv.appendChild(massage);


             }
    
        })
    }
    else{
        fullname.value="";
        District.value="";
        Block.value="";
        Group.value="";
        Team.value="";
        Gender.value="Select gender";
        teamDiv.style.display="none";
        bookSewaDiv.style.display="none";
        DeptSewaDiv.style.display="none";
        bookSewaMessage.style.display="none";
        


        let tag = mdiv.lastElementChild.tagName;
                // console.log(tag);
         if (tag=="DIV") {
            mdiv.removeChild(mdiv.lastElementChild);
         }  
         
         if (number.hasAttribute("class")) {
            number.removeAttribute("class");
        }
    }
}



function myFunction(checkBox){
     
    const idv="#"+checkBox.id+"1";
    // console.log(idv);

    const twitter = document.querySelector(idv);
    // console.log(twitter);
    
    if (checkBox.checked == true){
        twitter.style.display = "flex";
      } else {
        twitter.style.display = "none";
      }
}



function checkForm() {
    // const submit= true;
    let f;
    let s;
    const sewaplatform= document.getElementById("sewaplatform")
    const satsangplatform= document.getElementById("satsangplt")
    const sewaDiv= document.getElementById("sewaDiv")
    const satsangDiv= document.getElementById("satsangDiv")
    const massage1=sewaDiv.lastElementChild;
    const massage2=satsangDiv.lastElementChild;
    let checkboxsewa=sewaplatform.querySelectorAll('input[type="checkbox"]');
    let checkboxsatsang=satsangplatform.querySelectorAll('input[type="checkbox"]');

   
            let sewa_checkboxes = [];
            
             checkboxsewa.forEach((check_box,index) => { 
                if(check_box.checked){

                    sewa_checkboxes.push(check_box);
                }
            });
            let satsang_checkboxes = [];
            
            checkboxsatsang.forEach((check_box,index) => { 
                if(check_box.checked){

                    satsang_checkboxes.push(check_box);
                }
            });

            if (sewa_checkboxes.length==0){
                
                    
                    massage1.innerHTML=`<label  class="text-danger">Please कोई भी एक ऑप्शन चुने</label> `;
                    document.getElementById("fb").focus(); 
                    sewaplatform.focus();
                     sewaplatform.setAttribute("class","fields border border-danger border-2")
                     f=false;
            
            }
            else{
                massage1.innerHTML="";
                 sewaplatform.setAttribute("class","fields")
                 f=true;
            }


            if (satsang_checkboxes.length==0){
                
                    
                    massage2.innerHTML=`<label  class="text-danger">Please कोई भी एक ऑप्शन चुने</label> `;
                    document.getElementById("sudarshan").focus(); 
                    satsangplatform.focus();
                    satsangplatform.setAttribute("class","fields border border-danger border-2")
                    s=false;
            
            }
            else{
                massage2.innerHTML="";
                satsangplatform.setAttribute("class","fields")
                s=true;
            }
            
            if (f&&s) {
                return true;
            }
           
            return false;
}


const bookSewaDetails=document.getElementById("bmain");
const deptS=document.getElementById("dmain");
// const =document.querySelector("#dmain")
// deptSewaDetails.innerText="jj"
// console.log(deptSewaDetails);

function bookSewa(B){
    
  if (B.value=="true") {
    
    bookSewaDetails.style.display ="block";
    
  } else  
 {
    bookSewaDetails.style.display ="none";
    
  }
}
function deptSewa(B){
    // console.log(B.value);
    if (B.value=="true") {
    //   console.log("true block");
      
      deptS.style.display ="block";
      
    } else  
    // console.log("else block");
 {
    deptS.style.display ="none";
    
  }
}

