import { SitemapStream, streamToPromise } from 'sitemap';
import {NextApiRequest, NextApiResponse} from "next";

export const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
    try {
        const smStream = new SitemapStream({
            hostname: `https://${req.headers.host}`
        });

        // List of links

        const links = [
            {
                name: "/"
            },
            {
                name: "/about"
            },
            {
                name: "/testimonials"
            },
            {
                name: "/conditions"
            },
            {
                name: "/female-orgasm-system"
            },
            {
                name: "/videos",
                changefreq: "daily"
            },
            {
                name: "/press",
                changefreq: "daily"
            },
            {
                name: "/contact"
            }
        ];
        const numOfPress = 2
        const press = []
        for(let i=0; i<numOfPress; i++) press.push({name: `/press/${i+1}`})
        const linksSitemap = [
            ...links,
            ...press
        ]

        // Create each URL row
        linksSitemap.forEach(link => {
            smStream.write({
                url: link.name,
                changefreq: link.changefreq !== undefined ? link.changefreq: "monthly",
                priority: 0.9
            });
        });

        // End sitemap stream
        smStream.end();

        // XML sitemap string
        const sitemapOutput = (await streamToPromise(smStream)).toString();

        // Change headers
        res.writeHead(200, {
            'Content-Type': 'application/xml'
        });

        // Display output to user
        res.end(sitemapOutput);
    } catch(e) {
        console.log(e)
        res.send(JSON.stringify(e))
    }
}
export default handler