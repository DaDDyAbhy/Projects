const express = require("express");
const authMiddleware = require("../middlewares/auth");
const router = express.Router();
const upload = require ("../config/multer.config");
const supabase = require("../config/supabase");
const {v4: uuidv4} = require("uuid");
const fileModel = require("../models/files.models");

router.get("/home", authMiddleware,async (req, res,)=>{
    // console.log(req.user); --> This will send and console the logged in user information to the server.
    const userFiles = await fileModel.find({
        user: req.user.userID
    });

    console.log(userFiles)
    res.render("home", {
        files: userFiles
    })
})


router.post("/upload",upload.single("file"),authMiddleware, async (req, res)=>{
    const fileName = `${uuidv4()}-${req.file.originalname}`;
    const {data, error} = await supabase.storage
    .from("drive")
    .upload(fileName, req.file.buffer, { /*req.file.originalname --> fileName ki jagah isko likhna pada kyoonnki agar 2 same naam ki files upload karenge toh wo add nahi hoti thi bucket mein toh ye karke ab add ho paayengi wo files bucket mein chaahe kitnni bhi baar add karo.*/ 
        contentType: req.file.mimetype
    });

    if(error) {
        return res.status(500).send(error);
    }

    const newFile = await fileModel.create({
        path: data.path,
        originalname: req.file.originalname,
        user: req.user.userID,
    });
    // res.status(200).send(data);

    res.json(newFile);
})


router.get("/download/:path", authMiddleware, async (req, res) => {

    const loggedInUserId = req.user.userID;
    const path = req.params.path;

    const file = await fileModel.findOne({
        user: loggedInUserId,
        path: path
    })

    if(!file) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    const { data, error } = await supabase.storage
        .from("drive")
        .download(path);

    if(error) {
        return res.status(500).send(error);
    }

    res.setHeader(
        "Content-Disposition",
        `attachment; filename="${file.originalname}"`
    );

    res.setHeader(
        "Content-Type",
        data.type || "application/octet-stream"
    );

    const buffer = Buffer.from(await data.arrayBuffer());

    res.send(buffer);
})

module.exports = router;