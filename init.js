const mongoose=require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(()=>{
        console.log("connection successful");
    })
    .catch((err)=> console.log(err));

    async function main(){
        await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
    }

    let allChats=[
        {
        from: "neha",
        to: "priya",
        msg: "send me your exam sheets",
        created_at: new Date(),
    },
    {
        from: "Prince",
        to: "piyush",
        msg: "send me  exam syllabus",
        created_at: new Date(),
    },
    {
        from: "armaan",
        to: "druv",
        msg: "send me details of hackathon",
        created_at: new Date(),
    },
    {
        from: "prince",
        to: "noor",
        msg: "send me reels",
        created_at: new Date(),
    },
];
    Chat.insertMany(allChats);