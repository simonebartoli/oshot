import fs from "fs";
import path from "path";

export default function getVideos() {
    try{
        const videosBuffer = fs.readFileSync(path.join(process.cwd(),`/data/videos.json`))
        return JSON.parse(videosBuffer.toString())
    }catch (e){
        return null
    }
}