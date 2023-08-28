const areaDiv= document.getElementById("areaSDiv")
const AreacheckYes= document.getElementById("isSYes")
const AreacheckNo= document.getElementById("isSNo")
const areasewaCountdiv= document.getElementById("areasewaCount")
const areaSInput= document.getElementById("areaSname")
const trendNO= document.getElementById("trendTNo")
const trendYes= document.getElementById("trendTYes")
const trendTeamDiv= document.getElementById("trendTeamDiv")

const sambhag = document.getElementById("sambhag");
const district = document.getElementById("jila");
const block = document.getElementById("block");
const areaSname= document.getElementById("areaSname")

getSambhag();

// console.log(bbody.hasChildNodes());
async function getSambhag() {
    const reqst = new XMLHttpRequest();
    reqst.open("GET", "http://localhost:3000/getSambhag");
    reqst.setRequestHeader("content-type", "application/json")
    reqst.send();

    reqst.addEventListener("load", function () {
        let val = JSON.parse(reqst.responseText)
        //  console.log(val);
        val.forEach(e => {
            const option = document.createElement("option");
            option.setAttribute("value", `${e.eName}`)
            option.innerText = `${e.Name}`
            sambhag.appendChild(option)
        })
    })
}


async function getDist(s) {
    const sam = s.value;
    // console.log(sam);
    const len = district.children.length;
    if (len > 1) {
        district.innerHTML = `<option disabled selected >अपना जिला चुने</option>`
    }

    const reqst = new XMLHttpRequest();
    reqst.open("POST", "http://localhost:3000/getDist");
    reqst.setRequestHeader("content-type", "application/json")
    reqst.send(JSON.stringify({ Sam: sam }));

    reqst.addEventListener("load", function () {
        let val = JSON.parse(reqst.responseText)
        // console.log(val);
        val.forEach(dist => {
            const option = document.createElement("option");
            option.setAttribute("value", `${dist.Name}`)
            option.innerText = `${dist.Name}`
            district.appendChild(option)
        })

    })
}
async function getBlock(d) {
    const dist = d.value;
    // console.log(dist);
    const len = block.children.length;
    if (len > 1) {
        block.innerHTML = `<option disabled selected >अपना ब्लॉक चुने</option>`
    }

    const reqst = new XMLHttpRequest();
    reqst.open("POST", "http://localhost:3000/getBlock");
    reqst.setRequestHeader("content-type", "application/json")
    reqst.send(JSON.stringify({ Dist: dist }));

    reqst.addEventListener("load", function () {
        let val = JSON.parse(reqst.responseText)
        // console.log(val);
        val.forEach(b => {
            const option = document.createElement("option");
            option.setAttribute("value", `${b.Name}`)
            option.innerText = `${b.Name}`
            block.appendChild(option)
        })

    })
} 
async function getAreaSewadar(b) {
    const block = b.value;
    const dist= district.value;
    const len = areaSname.children.length;
    if (len > 1) {
        areaSname.innerHTML = `<option disabled selected >अपने एरिया सेवादार का नाम चुने</option>`
    }

    const reqst = new XMLHttpRequest();
    reqst.open("POST", "http://localhost:3000/getAreaseawdar");
    reqst.setRequestHeader("content-type", "application/json")
    reqst.send(JSON.stringify({ Block: block ,Dist:dist}));

    reqst.addEventListener("load", function () {
        let val = JSON.parse(reqst.responseText)
        // console.log(val);
        val.forEach(are => {
            const option = document.createElement("option");
            option.setAttribute("value", `${are.Sewadar.Count}`)
            option.innerText = `${are.Name}`
            areaSname.appendChild(option)
        })

    })
}

function show(a) {
    console.log(a.value);
    
}


AreacheckYes.addEventListener("click",()=>{  
    areaDiv.style.display = "none";
    areasewaCountdiv.setAttribute("class","mb-3 collapse show")
      
})
AreacheckNo.addEventListener("click",()=>{  
    areaDiv.style.display = "flex";    
    areasewaCountdiv.setAttribute("class","collapse mb-3 ")   
})

trendYes.addEventListener("click",()=>{  
    trendTeamDiv.setAttribute("class","mb-3 collapse show")
      
})
trendNO.addEventListener("click",()=>{      
    trendTeamDiv.setAttribute("class","collapse mb-3 ")   
})

function areSewadarnumber(area) {

    // console.log(area.value);
    areaSInput.value=area.value;
    
    
    console.log(areaSInput.value);
}


