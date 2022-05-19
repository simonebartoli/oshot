import fs from "fs";
import path from "path";

export default function getFaqs() {
    try{
        const faqsBuffer = fs.readFileSync(path.join(process.cwd(),`/data/faqs.json`))
        return JSON.parse(faqsBuffer.toString())
    }catch (e){
        return null
    }
}