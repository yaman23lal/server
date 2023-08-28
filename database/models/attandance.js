const mongoose = require('mongoose');
const { Schema } = mongoose;



const AttandanceSchema = new Schema({
  Name:String,
  Mobile:Number,
  Dist:String,
  Block:String,
  Gender:String,
  Group:String,
  Team:String,
  BookSewa:{
    type:Boolean,
    default:false
  },
  FacebookSewa:{
    type:Boolean,
    default:false
  },
  InstagramSewa:{
    type:Boolean,
    default:false
  },
  TwitterSewa:{
    type:Boolean,
    default:false
  },
  PintrestSewa:{
    type:Boolean,
    default:false
  },
  YoutubeSewa:{
    type:Boolean,
    default:false
  },
  ShareChatSewa:{
    type:Boolean,
    default:false
  },
  DailyhuntSewa:{
    type:Boolean,
    default:false
  },
  KooSewa:{
    type:Boolean,
    default:false
  },
  ReditSewa:{
    type:Boolean,
    default:false
  },
  NoSewa:{
    type:Boolean,
    default:false
  },
  WhatsappSewa:{
    type:Boolean,
    default:false
  },
  DepartmentSewa:{
    type:Boolean,
    default:false
  },
  date: { type: Date, default: new Date(new Date().getTime()+5.5*60*60*1000) },
  Facebook: 
    {
        fPost:{type:Number,default: 0 },
        fStory:{type:Number,default: 0 },
        fComment:{type:Number,default: 0 }
    },
  Instagram:
    {
        iPost:{type:Number,default: 0 },
        iStory:{type:Number,default: 0 },
        iComment:{type:Number,default: 0 }
    },
  Twitter:
    {
        tTweet:{type:Number,default: 0 },
        tReply:{type:Number,default: 0 }
    }
,
  Youtube:
    {
        yVideoViral:{type:Number,default: 0 },
        yComment:{type:Number,default: 0 }
    },
  ShareChat:
    {
        sPost:{type:Number,default: 0 },
        sComment:{type:Number,default: 0 }
    },
  Pintrest:
    {
        Pin:{type:Number,default: 0 },
        Ripin:{type:Number,default: 0 }
    },
  Dailyhunt:
    {
        dPost:{type:Number,default: 0 },
        dComment:{type:Number,default: 0 }
    },
  Koo: 
    {
        kPost:{type:Number,default: 0 },
        kComment:{type:Number,default: 0 }
    },
  Redit: 
    {
        rPost:{type:Number,default: 0 },
        rComment:{type:Number,default: 0 }
    },
  SatsangShare:
    {
      jantantra:{type:Number,default: 0 },
      ishwar:{type:Number,default: 0 },
      sudarshan:{type:Number,default: 0 },
      nepal:{type:Number,default: 0 },
      shradha:{type:Number,default: 0 },
      sadhana:{type:Number,default: 0 },
      subharti:{type:Number,default: 0 },
      C10news:{type:Number,default: 0 },
      NoShare:{type:Number,default: 0 }
  },
  FacebookD:
    {
        iS:{type:Boolean,default:false},
        fDPost:{type:Number,default: 0 },
        fDStory:{type:Number,default: 0 },
        fDComment:{type:Number,default: 0 }
    },
  InstagramD:
    { 
      iS:{type:Boolean,default:false},
        iDPost:{type:Number,default: 0 },
        iDStory:{type:Number,default: 0 },
        iDComment:{type:Number,default: 0 }
    },
  TwitterD:
    {
      iS:{type:Boolean,default:false},
        DTweet:{type:Number,default: 0 },
        DReply:{type:Number,default: 0 }
    },
  YoutubeD:
    { 
        iS:{type:Boolean,default:false},
        yDVideoViral:{type:Number,default: 0 },
        yDComment:{type:Number,default: 0 }
    },

  Satsang:{
    type:Number,
    default:0
  },
  Book:{
    type:String,
    default:""
  },
  OtherSewa:{
    type:String,
    default:""
  },
  BookPost:{
    type:Number,
    default:0
  },
  BookEvent:{
    type:Number,
    default:0
  },
  NationalOrder:{
    type:Number,
    default:0
  },
  InterNationalOrder:{
    type:Number,
    default:0
  },
  TotalSewa:{
    type:Number,
    required:true
  },
  TotalBookOrder:{
    type:Number,
    default:0
  }
});

const AttandanceModel = new mongoose.model("Attandance", AttandanceSchema);

module.exports = AttandanceModel;



