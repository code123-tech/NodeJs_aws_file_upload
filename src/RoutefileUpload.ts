import express,{ Router ,Request,Response} from "express";
const multer = require("multer");

const router : express.Router = Router();
const { HomePageRequest,FileUpload } = require("./fileUpload");
const upload = multer({dest:"uploads/"});

router.get("/",HomePageRequest);

router.post("/upload",upload.single("image"),async (req:Request,res:Response)=>{
    const file:Express.Multer.File = req.file;
    const result = await FileUpload(file);
    res.status(200).json(result);
});

module.exports = router;