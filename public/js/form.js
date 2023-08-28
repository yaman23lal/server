

async function getM(number){
    const mobile =number.value;
    if (mobile.length==5){
        console.log(mobile);

    }
    const p = number.parentElement;
    const form = p.parentElement;
    const body =form.parentElement;
    const div =body.querySelector('#massage')
    // div.setAttribute("class", "alert alert-danger alert-dismissible fade show");
    // div.setAttribute("role", "alert");
    // div.innerHTML='<strong>wrong</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
    const fullname = form.querySelector("#fullname");
    const District = form.querySelector("#District");
    const Block = form.querySelector("#Block");
    const Group = form.querySelector("#Group");
    const Team = form.querySelector("#Team");
    
    
    if (mobile.length==10) {
        
        const reqst = new XMLHttpRequest();
        reqst.open("POST", "http://localhost:3000/getmember");
        reqst.setRequestHeader("content-type", "application/json")
        reqst.send(JSON.stringify({ Mobile: mobile}));
    
       reqst.addEventListener("load", function () {
             let sts =reqst.status;
             if (sts==200) {
                 let val = JSON.parse(reqst.responseText)
                fullname.value=val.Name;
                District.value=val.Dist;
                Block.value=val.Block;
                Group.value=val.Group;
                Team.value=val.Team;
                console.log(val.Team);
             }
             else{
                console.log(reqst.responseText);
             }
    
        })
    }
    else{
        fullname.value="";
        District.value="";
        Block.value="";
        Group.value="";
        Team.value="";
    }
}

