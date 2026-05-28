import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadDir = path.join(__dirname, "..", "public");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, uploadDir)
    },
    filename: function(req, file, cb){
        const safeOriginalName = file.originalname.replace(/[^a-zA-Z0-9._-]/g, "-");
        const filename = Date.now() + "-" + safeOriginalName;
        cb(null, filename)
    }
})


export const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: function(req, file, cb) {
        if (file.mimetype !== "application/pdf") {
            return cb(new Error("Only PDF resumes are allowed."));
        }
        cb(null, true);
    }
});