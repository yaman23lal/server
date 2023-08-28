// console.log("hello");

// let stringAs="Raipur,धमतरी,कुरुद";
// console.log(stringAs.length);
// console.log("sambhag = "+ stringAs.slice(0,6));
//     console.log("district = "+ stringAs.slice(7,12));
//     console.log("bl = "+ stringAs.slice(13,18));


const tbody = document.getElementById("disttable");
const bbody = document.getElementById("blockTable");
const absD = document.getElementById("absDTable");
const AbsB = document.getElementById("AbsB");
const AbsD = document.getElementById("AbsD");
const absB = document.getElementById("absBTable");
const date = document.getElementById("date");
const Dhead = document.getElementById("DistHead");
const Bhead = document.getElementById("BlockHead");
const Alist = document.getElementById("Alist");
const totalD = document.getElementById("totalD");
const presentD = document.getElementById("presentD");
const totalB = document.getElementById("totalB");
const presentB = document.getElementById("presentB");


const sambhag = document.getElementById("sam");
const district = document.getElementById("dist");
const block = document.getElementById("block");

// console.log(sambhag);
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
            option.innerHTML = `${e.Name}`
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
            option.innerHTML = `${dist.Name}`
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
            option.innerHTML = `${b.Name}`
            block.appendChild(option)
        })

    })
}


// console.log(tbody);

// getData("Dhamtari","Kurud");


function getData(bl) {

    const block = bl.value;
    const dist = district.value;
    const detaAll= [];
    detaAll.push(sambhag.value)
    detaAll.push(district.value)
    detaAll.push(bl.value)
   
    // console.log(detaAll);

    // console.log( typeof(detaAll));

    if (bbody.hasChildNodes()) {
        bbody.innerHTML = "";
    }
    if (tbody.hasChildNodes()) {
        tbody.innerHTML = "";
    }
    if (absB.hasChildNodes()) {
        absB.innerHTML = "";
    }
    if (absD.hasChildNodes()) {
        absD.innerHTML = "";
    }
             AbsD.innerText = "";
            AbsB.innerText = "";

            totalD.innerText = "";
            presentD.innerText = "";
            totalB.innerText = "";
            presentB.innerText = "";

    Dhead.innerText = dist;
    Bhead.innerText = block;
    let day = new Date().getDate();
    const month = new Date().getMonth()
    const year = new Date().getFullYear()

    let today = `${day - 1}-${month + 1}-${year}`

    date.innerText = today;
    //   Alist.style.display="block";


    const reqst = new XMLHttpRequest();
    reqst.open("POST", "http://localhost:3000/report");
    reqst.setRequestHeader("content-type", "application/json")
    reqst.send(JSON.stringify({ Dist: dist, Block: block }));

    reqst.addEventListener("load", function () {
        let sts = reqst.status;
        if (sts == 200) {
            let a = 1;
            let b = 1;
            let c=1;
            let d=1;
            let y = "";
            //  let n="नहीं";

            let val = JSON.parse(reqst.responseText)
             console.log(val);


            val.Data.forEach(e => {
                if (e.Group === "जिला ग्रुप") {
                    if (e.Satsang) {
                        y = "हाँ";
                    } else {
                        y = "नहीं";
                    }
                    let sewaString="";
                    if (e.NoSewa) {
                       
                            sewaString=sewaString+"कोई सेवा नहीं किए"+",";
                
                    }
                    else{
                        if (e.FacebookSewa) {
                            sewaString=sewaString+"फेसबुक सेवा"+",";
                        }
                        if (e.InstagramSewa) {
                            sewaString=sewaString+"इंस्टाग्राम सेवा"+",";
                        }
                        if (e.TwitterSewa) {
                            sewaString=sewaString+"Twitter सेवा"+",";
                        }
                        if (e.PintrestSewa) {
                            sewaString=sewaString+"पिंटरेस्ट सेवा"+",";
                        }
                        if (e.YoutubeSewa) {
                            sewaString=sewaString+"यूट्यूब सेवा"+",";
                        }
                        if (e.ShareChatSewa) {
                            sewaString=sewaString+"शेयरचैट सेवा"+",";
                        }
                        if (e.DailyhuntSewa) {
                            sewaString=sewaString+"डेलीहंट सेवा"+",";
                        }
                        if (e.KooSewa) {
                            sewaString=sewaString+"कू सेवा"+",";
                        }
                        if (e.ReditSewa) {
                            sewaString=sewaString+"रेडिट सेवा"+",";
                        }
                        if (e.WhatsappSewa) {
                            sewaString=sewaString+"व्हाट्सप्प स्टेटस सेवा"+",";
                        }
                    }

                    // const sdbData=detaAll;
                    const trd = document.createElement("tr");
                    trd.innerHTML = `<td>${a}</td>
                        <td>${e.Name}</td>
                        <td>${sewaString}</td>
                        <td>${y}</td>
                        <td>${e.TotalSewa}</td>
                        <td><button   id="${e._id}"  onclick="window.location.href='/getSingleData/${e._id}';">View</button></td>`
                        
                        // <td>${e.Block}</td>
                    tbody.appendChild(trd);
                    a++;
                }
                else {
                    if (e.Satsang) {
                        y = "हाँ";
                    } else {
                        y = "नहीं";
                    }
                    let sewaString="";
                    if (e.AllSewa.length) {
                        e.AllSewa.forEach(se=>{
                            sewaString=sewaString+se+",";
                        })
                    }
                    // const sdbData=detaAll;

                    let trb = document.createElement("tr");
                    trb.innerHTML = `<td>${b}</td>
                        <td>${e.Name}</td>
                        <td>${sewaString}</td>
                        <td>${y}</td>
                        <td>${e.TotalSewa}</td>
                        <td><button   id="${e._id}"  onclick="window.location.href='/getSingleData/${e._id}';">View</button></td>`
                        
                        // <td>${e.Block}</td>
                    bbody.appendChild(trb);
                    b++;
                }
            });

            val.Absent.forEach(ab => {
                if (ab.Group === "जिला ग्रुप") {

                    const trd = document.createElement("tr");
                    trd.innerHTML = `<td>${c}</td>
                    <td>${ab.Name}</td>
                    <td>${val.AreaSewadar[ab.AreaSewadar-1].Name}</td>
                    <td>${ab.Block}</td>`

                    absD.appendChild(trd);
                    c++;
                }
                else {

                    let trb = document.createElement("tr");
                    trb.innerHTML = `<td>${d}</td>
                       <td>${ab.Name}</td>
                       <td>${val.AreaSewadar[ab.AreaSewadar-1].Name}</td>
                       <td>${ab.Block}</td>`

                    absB.appendChild(trb);
                    d++;
                }
            });
        if (val.Absent.length) {
            
            AbsD.innerText = `= ${c-1}`;
            AbsB.innerText = `= ${d-1}`;
        }
        else{
            AbsD.innerText = "";
            AbsB.innerText = "";
        }
        // if (val.Data.length) {
        //     totalD.innerText = `टोटल एक्टिव मेंबर - ${val.totald}`;
        //     presentD.innerText = `प्रेजेंट मेंबर - ${a - 1}`;
        //     totalB.innerText = `टोटल एक्टिव मेंबर - ${val.totalb}`;
        //     presentB.innerText = `प्रेजेंट मेंबर - ${b - 1}`;
        // } else {
        //     totalD.innerText = "";
        //     presentD.innerText = "";
        //     totalB.innerText = "";
        //     presentB.innerText = "";

        // }
        totalD.innerText = `टोटल एक्टिव मेंबर - ${val.totald}`;
        totalB.innerText = `टोटल एक्टिव मेंबर - ${val.totalb}`;
        presentD.innerText = `प्रेजेंट मेंबर - ${a - 1}`;
        presentB.innerText = `प्रेजेंट मेंबर - ${b - 1}`;


            

        }
        else {
            console.log(reqst.responseText);
        }

    })

            
        
   
}

function detail(btn) {
    let details= btn.value; 
    let id= btn.id;
    let samBha= details.slice(0,6);
    let DistC= details.slice(7,12);
    let BloK= details.slice(13,18);

    let AllDeta= {
        Sambhag:samBha,
        District:DistC,
        Block:BloK
    }
    
    const reqst = new XMLHttpRequest();
    reqst.open("GET", "http://localhost:3000/getSingleData");
    reqst.setRequestHeader("content-type", "application/json")
    reqst.send(JSON.stringify({ id: id }));

   
   

}

