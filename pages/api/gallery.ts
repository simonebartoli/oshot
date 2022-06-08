import fs from "fs";
import path from "path";

export default function getGallery() {
    try{
        const galleryBuffer = fs.readFileSync(path.join(process.cwd(),`/data/gallery.json`))
        return JSON.parse(galleryBuffer.toString())
    }catch (e){
        return null
    }
}