import fs from "fs";
import path from "path";

export default function getTestimonials() {
    try{
        const testimonialsBuffer = fs.readFileSync(path.join(process.cwd(),`/data/testimonials.json`))
        return JSON.parse(testimonialsBuffer.toString())
    }catch (e){
        return null
    }
}