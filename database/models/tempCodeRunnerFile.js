db();

SambhagModel.insertMany(sambhag).then(()=>{
    console.log("saved Succse sambhag");
}).catch(()=>{
    console.log("not savsed");
})