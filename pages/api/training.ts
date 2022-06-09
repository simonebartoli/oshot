import fs from "fs";
import path from "path";

export function getTrainingVideos() {
    try{
        const videosBuffer = fs.readFileSync(path.join(process.cwd(),`/data/training/videos.json`))
        return JSON.parse(videosBuffer.toString())
    }catch (e){
        return null
    }
}
export function getTrainingCitations() {
    try{
        const videosBuffer = fs.readFileSync(path.join(process.cwd(),`/data/training/citations.json`))
        return JSON.parse(videosBuffer.toString())
    }catch (e){
        return null
    }
}