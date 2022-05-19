import * as fs from "fs";
import path from "path";

export default function getArticle(id: string) {
    try{
        const articleBuffer = fs.readFileSync(path.join(process.cwd(),`/data/press/${id}.json`))
        return JSON.parse(articleBuffer.toString())
    }catch (e){
        return null
    }
}