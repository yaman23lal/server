const member = require("../../database/models/members")
const Attandance =require("../../database/models/attandance")
const showForm =(req,res)=>{
res.render("form1",{Message:""})
}
const showFormUpdate = async(req,res)=>{
 const id = req.params.id;
  const Member= await Attandance.find({_id:id})

  console.log("Member data is : "+MemberData);

 if (Member) {
  
 } res.render("updateForm",{id:id})
}

const SaveAttandance= async (req,res)=>{


  let WhatsappStatus=Number(req.body.WhatsappSewa)||0;

        let fPost=Number(req.body.fbpost)||0;
        let fStory=Number(req.body.fbstory)||0;
        let fComment=Number(req.body.fbcomment)||0 ;
        let iPost=Number(req.body.instapost)||0;
        let iStory=Number(req.body.instastory)||0;
        let iComment=Number(req.body.instacomment)||0;  
        let tTweet=Number(req.body.tTweet)||0;
        let tReply=Number(req.body.tReply)||0 ; 
        let yVideoViral=Number(req.body.YTvviral)||0;
        let yComment=Number(req.body.YTcomment)||0 ;  
        let sPost=Number(req.body.sharechatPost)||0;
        let sComment=Number(req.body.sharechatComment)||0 ; 
        let Pin=Number(req.body.pPin)||0;
        let Ripin=Number(req.body.pRipin)||0; 
        let dPost=Number(req.body.Dailyhuntpost)||0;
        let dComment=Number(req.body.Dailyhuntcomment)||0 ; 
        let kPost=Number(req.body.kooPost)||0;
        let kComment=Number(req.body.kooReply)||0;
        let rPost=Number(req.body.reditPost)||0;
        let rComment=Number(req.body.reditComment)||0;  
        let jantantra=Number(req.body.jantantra)||0;
        let ishwar=Number(req.body.ishwar)||0;
        let sudarshan=Number(req.body.sudarshan)||0;
        let nepal=Number(req.body.nepal)||0;
        let shradha=Number(req.body.shradha)||0;
        let sadhana=Number(req.body.sadhna)||0;
        let subharti=Number(req.body.subharti)||0;
        let C10news=Number(req.body.c10)||0 ; 
        let fDPost=Number(req.body.fbdpost)||0;
        let fDStory=Number(req.body.fbdstory)||0;
        let fDComment=Number(req.body.fbdcomment)||0;
        let iDPost=Number(req.body.instadpost)||0;
        let iDStory=Number(req.body.instadstory)||0;
        let iDComment=Number(req.body.instadcomment)||0;
        let DTweet=Number(req.body.tdtweet)||0;
        let DReply=Number(req.body.tdreply)||0;
        let yDVideoViral=Number(req.body.ytdviral)||0;
        let yDComment= Number(req.body.ytdcomment)||0;
        let Satsang=Number(req.body.Satsang)||0;
        let BookEvent=Number(req.body.fbBookevent)||0;
        let BookPost=Number(req.body.fbBookpost)||0;
        let BookNational=Number(req.body.Nationalbook)||0;
        let BookInterNational=Number(req.body.InterNationalbook)||0;




        let total =fPost+fStory+fComment+iPost+iStory+iComment+tTweet+tReply+yVideoViral+yComment+sPost+sComment+Pin+Ripin+dPost+dComment + kPost+ kComment+ rPost+ rComment  + WhatsappStatus+ jantantra+ ishwar+ sudarshan+ nepal+ shradha+ sadhana+ subharti+ C10news+ fDPost+ fDStory+ fDComment+ iDPost+ iDStory+ iDComment+ DTweet+ DReply+ yDVideoViral+yDComment+ Satsang;
        let TotalOrder= BookNational+BookInterNational;
    // console.log(req.body);

    const formdata= {
  Name:req.body.Name,
  Mobile:req.body.Mobnumber,
  Dist:req.body.Dist,
  Block:req.body.Block,
  Gender:req.body.gender,
  Group:req.body.Group,
  Team:req.body.Team,
  FacebookSewa:req.body.FacebookSewa||false,
  InstagramSewa:req.body.InstagramSewa||false,
  TwitterSewa:req.body.TwitterSewa||false,
  YoutubeSewa:req.body.YouTubeSewa||false,
  ShareChatSewa:req.body.ShareChatSewa||false,
  PintrestSewa:req.body.PintrestSewa||false,
  DailyhuntSewa:req.body.DailyhuntSewa||false,
  KooSewa:req.body.KooSewa||false,
  ReditSewa:req.body.ReditSewa||false,
  WhatsappSewa:req.body.WhatsappSewa||false,
  NoSewa:req.body.NoSewa||false,
  Facebook: 
    {
        fPost:fPost,
        fStory:fStory,
        fComment:fComment
    },
  Instagram:
    {
        iPost:iPost,
        iStory:iStory,
        iComment:iComment
    },
  Twitter:
    {
        tTweet:tTweet,
        tReply:tReply
    }
,
  Youtube:
    {
        yVideoViral:yVideoViral,
        yComment:yComment
    },
  ShareChat:
    {
        sPost:sPost,
        sComment:sComment
    },
  Pintrest:
    {
        Pin:Pin,
        Ripin:Ripin
    },
  Dailyhunt:
    {
        dPost:dPost,
        dComment:dComment
    },
  Koo: 
    {
        kPost:kPost,
        kComment:kComment
    },
  Redit: 
    {
        rPost:rPost,
        rComment:rComment
    },
  SatsangShare:
    {
      jantantra:jantantra,
      ishwar:ishwar,
      sudarshan:sudarshan,
      nepal:nepal,
      shradha:shradha,
      sadhana:sadhana,
      subharti:subharti,
      C10news:C10news,
      NoShare:req.body.NoShare
  },
  FacebookD:
    {
        fDPost:fDPost,
        fDStory:fDStory,
        fDComment:fDComment
    },
  InstagramD:
    {
        iDPost:iDPost,
        iDStory:iDStory,
        iDComment:iDComment
    },
  TwitterD:
    {
        DTweet:DTweet,
        DReply:DReply
    },
  YoutubeD:
    {
        yDVideoViral:yDVideoViral,
        yDComment:yDComment
    },

  Satsang:Satsang,
  Book:req.body.book,
  OtherSewa:req.body.other||"",
  BookPost:BookPost,
  BookEvent:BookEvent,
  NationalOrder:BookNational,
  InterNationalOrder:BookInterNational,
  TotalBookOrder:TotalOrder,
  TotalSewa:total,
  // date: new Date(new Date().getTime()+5.5*60*60*1000)
    }



   let day = new Date().getDate();
   const month = new Date().getMonth()
   const year = new Date().getFullYear()
   
   let today = `${year}-${month+1}-${day}`

   let date1 = new Date(today)

       let Now =new Date(new Date().getTime()+5.5*60*60*1000)
      //  Now=new Date(date1.getTime()+22*60*60*1000)
       let endTime1 =new Date(date1.getTime()+6*60*60*1000)
       let StartTime =new Date(date1.getTime()+19*60*60*1000)

       if (Now>date1&&Now<endTime1) {
        today=`${year}-${month+1}-${day-1}`;
        date1 = new Date(today);
        StartTime =new Date(date1.getTime()+19*60*60*1000)
       }

console.log(formdata);
      // console.log(Now);
      // console.log(endTime1);
      // console.log(StartTime);
      // console.log(date1);

    const PrevAtten= await Attandance.find({Mobile:req.body.Mobnumber,date:{$gt:StartTime,$lt:Now}})
    // console.log("Previos Attendance : ");
    // console.log(PrevAtten);
    if (PrevAtten.length) {

      res.send("You Have already submited");
      // res.render("form1",{Message:"आप सेवा फॉर्म डाल चुके हैं , कृपया दोबारा न फॉर्म डालने का प्रयास  न करें |"})

    }
    else{
      const newData= new Attandance(formdata);
      newData.save().then((data)=>{
        // res.send(data._id);
      // res.send("Form Submited");
      let sewa={
        s:false,
        m:""
      };
      if (!data.Satsang) {
        sewa.s=true;
        sewa.m="आज आपने सत्संग नहीं सुना , गुरु जी का आदेश है हमको प्रतिदिन एक घंटे सत्संग सुनना हैं ";
      }
        res.render("form2",{sewa:sewa})
      })
    }

    //  const newData= new Attandance(formdata);
    //  newData.save().then(()=>{

    //  }).catch((err)=>{
    //     console.log(err);
    //  });

   

}
const UpdateAttandance= async (req,res)=>{



        let WhatsappStatus=Number(req.body.WhatsappSewa)||0;
        let fPost=Number(req.body.fbpost)||0;
        let fStory=Number(req.body.fbstory)||0;
        let fComment=Number(req.body.fbcomment)||0 ;
        let iPost=Number(req.body.instapost)||0;
        let iStory=Number(req.body.instastory)||0;
        let iComment=Number(req.body.instacomment)||0;  
        let tTweet=Number(req.body.tTweet)||0;
        let tReply=Number(req.body.tReply)||0 ; 
        let yVideoViral=Number(req.body.YTvviral)||0;
        let yComment=Number(req.body.YTcomment)||0 ;  
        let sPost=Number(req.body.sharechatPost)||0;
        let sComment=Number(req.body.sharechatComment)||0 ; 
        let Pin=Number(req.body.pPin)||0;
        let Ripin=Number(req.body.pRipin)||0; 
        let dPost=Number(req.body.Dailyhuntpost)||0;
        let dComment=Number(req.body.Dailyhuntcomment)||0 ; 
        let kPost=Number(req.body.kooPost)||0;
        let kComment=Number(req.body.kooReply)||0;
        let rPost=Number(req.body.reditPost)||0;
        let rComment=Number(req.body.reditComment)||0;  
        let jantantra=Number(req.body.jantantra)||0;
        let ishwar=Number(req.body.ishwar)||0;
        let sudarshan=Number(req.body.sudarshan)||0;
        let nepal=Number(req.body.nepal)||0;
        let shradha=Number(req.body.shradha)||0;
        let sadhana=Number(req.body.sadhna)||0;
        let subharti=Number(req.body.subharti)||0;
        let C10news=Number(req.body.c10)||0 ; 
        let fDPost=Number(req.body.fbdpost)||0;
        let fDStory=Number(req.body.fbdstory)||0;
        let fDComment=Number(req.body.fbdcomment)||0;
        let iDPost=Number(req.body.instadpost)||0;
        let iDStory=Number(req.body.instadstory)||0;
        let iDComment=Number(req.body.instadcomment)||0;
        let DTweet=Number(req.body.tdtweet)||0;
        let DReply=Number(req.body.tdreply)||0;
        let yDVideoViral=Number(req.body.ytdviral)||0;
        let yDComment= Number(req.body.ytdcomment)||0;
        let Satsang=Number(req.body.Satsang)||0;
        let BookEvent=Number(req.body.fbBookevent)||0;
        let BookPost=Number(req.body.fbBookpost)||0;
        let BookNational=Number(req.body.Nationalbook)||0;
        let BookInterNational=Number(req.body.InterNationalbook)||0;




        let total =fPost+fStory+fComment+iPost+iStory+iComment+tTweet+tReply+yVideoViral+yComment+sPost+sComment+Pin+Ripin+dPost+dComment + kPost+ kComment+ rPost+ rComment  + WhatsappStatus+ jantantra+ ishwar+ sudarshan+ nepal+ shradha+ sadhana+ subharti+ C10news+ fDPost+ fDStory+ fDComment+ iDPost+ iDStory+ iDComment+ DTweet+ DReply+ yDVideoViral+yDComment+ Satsang;
        let TotalOrder= BookNational+BookInterNational;
    // console.log(req.body);

    const formdata= {
  Name:req.body.Name,
  Mobile:req.body.Mobnumber,
  Dist:req.body.Dist,
  Block:req.body.Block,
  Gender:req.body.gender,
  Group:req.body.Group,
  Team:req.body.Team,
  FacebookSewa:req.body.FacebookSewa||false,
  InstagramSewa:req.body.InstagramSewa||false,
  TwitterSewa:req.body.TwitterSewa||false,
  YoutubeSewa:req.body.YouTubeSewa||false,
  ShareChatSewa:req.body.ShareChatSewa||false,
  PintrestSewa:req.body.PintrestSewa||false,
  DailyhuntSewa:req.body.DailyhuntSewa||false,
  KooSewa:req.body.KooSewa||false,
  ReditSewa:req.body.ReditSewa||false,
  WhatsappSewa:req.body.WhatsappSewa||false,
  NoSewa:req.body.NoSewa||false,
  Facebook: 
    {
        fPost:fPost,
        fStory:fStory,
        fComment:fComment
    },
  Instagram:
    {
        iPost:iPost,
        iStory:iStory,
        iComment:iComment
    },
  Twitter:
    {
        tTweet:tTweet,
        tReply:tReply
    }
,
  Youtube:
    {
        yVideoViral:yVideoViral,
        yComment:yComment
    },
  ShareChat:
    {
        sPost:sPost,
        sComment:sComment
    },
  Pintrest:
    {
        Pin:Pin,
        Ripin:Ripin
    },
  Dailyhunt:
    {
        dPost:dPost,
        dComment:dComment
    },
  Koo: 
    {
        kPost:kPost,
        kComment:kComment
    },
  Redit: 
    {
        rPost:rPost,
        rComment:rComment
    },
  SatsangShare:
    {
      jantantra:jantantra,
      ishwar:ishwar,
      sudarshan:sudarshan,
      nepal:nepal,
      shradha:shradha,
      sadhana:sadhana,
      subharti:subharti,
      C10news:C10news,
      NoShare:req.body.NoShare
  },
  FacebookD:
    {
        fDPost:fDPost,
        fDStory:fDStory,
        fDComment:fDComment
    },
  InstagramD:
    {
        iDPost:iDPost,
        iDStory:iDStory,
        iDComment:iDComment
    },
  TwitterD:
    {
        DTweet:DTweet,
        DReply:DReply
    },
  YoutubeD:
    {
        yDVideoViral:yDVideoViral,
        yDComment:yDComment
    },

  Satsang:Satsang,
  Book:req.body.book,
  OtherSewa:req.body.other||"",
  BookPost:BookPost,
  BookEvent:BookEvent,
  NationalOrder:BookNational,
  InterNationalOrder:BookInterNational,
  TotalBookOrder:TotalOrder,
  TotalSewa:total,
 
    }


      const newData= new Attandance(formdata);
      newData.save().then((data)=>{
        // res.send(data._id);
      // res.send("Form Submited");
        res.render("form2",{id:data._id})
      })
     
      console.log(formdata);
}

const SendMember= async (req,res)=>{
 const data = req.body.Mobile;
try {

    const user = await member.findOne({Mobile:data})
    if (user) {
        res.status(200).send(user);      
    }
    else{
        res.status(400).send("Your Number Is Incorrect")
    }
    
} catch (error) {
    console.log(error);
}


}
const getAllDetail= async (req,res)=>{
 const id = req.params.id;
 console.log(id);
try {

    const user = await Attandance.findOne({_id:id})
    if (user) {
        res.status(200).send(user)
        
    }
    else{
        res.status(400).send("User Not Found")
    }
    
} catch (error) {
    console.log(error);
}


}
const checkTime= async (req,res,next)=>{
 
  let day = new Date().getDate();
   const month = new Date().getMonth()
   const year = new Date().getFullYear()
   
   let today = `${year}-${month+1}-${day}`
  //  let today2 = `${year}-${month+1}-${day+1}`

   let date1 = new Date(today)
  //  let date2 = new Date(today2)
  //  console.log(date1);
  //  console.log(date2);
   let tod =new Date(date1.getTime()+6*60*60*1000);
   let endTime,StartTime;


       let Now =new Date(new Date().getTime()+5.5*60*60*1000)
       if (Now>=date1&&Now<tod) {
         endTime =new Date(date1.getTime()+6*60*60*1000)
         StartTime =new Date(date1.getTime()-5*60*60*1000)
        
       } else {
        endTime =new Date(date1.getTime()+6*60*60*1000+24*60*60*1000)
        StartTime =new Date(date1.getTime()+19*60*60*1000)
  
       }


      //  console.log(Now>=StartTime);
      //  console.log(Now<endTime);

    if (Now>=StartTime&&Now<endTime) {
        return next();

    } else {
      res.render("comingform")
    }
}



module.exports={

    showForm,
    SendMember,
    SaveAttandance,
    UpdateAttandance,
    getAllDetail,
    showFormUpdate,
    checkTime
}