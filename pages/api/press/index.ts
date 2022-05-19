import fs from "fs";
import path from "path";

export default function getArticles() {
    try{
        const articleBuffer = fs.readFileSync(path.join(process.cwd(),`/data/press.json`))
        return JSON.parse(articleBuffer.toString())
    }catch (e){
        return null
    }
}