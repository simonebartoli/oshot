import { SitemapStream, streamToPromise } from 'sitemap';
import {NextApiRequest, NextApiResponse} from "next";

export const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
    try {
        const smStream = new SitemapStream({
            hostname: `https://${req.headers.host}`
        });

        // List of links
        type LinkType = {
            name: string
            priority: number
            changefreq?: string
        }
        const links: LinkType[] = [
            {
                name: "/",
                priority: 1.0
            },
            {
                name: "/about",
                priority: 0.7
            },
            {
                name: "/testimonials",
                priority: 0.8
            },
            {
                name: "/awards",
                priority: 0.7
            },
            {
                name: "/sexual-dysfunction",
                priority: 0.7
            },
            {
                name: "/incontinence",
                priority: 0.7
            },
            {
                name: "/lichen-sclerosus",
                priority: 0.7
            },
            {
                name: "/female-orgasm-system",
                priority: 0.7
            },
            {
                name: "/videos",
                changefreq: "daily",
                priority: 0.8
            },
            {
                name: "/press",
                changefreq: "daily",
                priority: 0.3
            },
            {
                name: "/training",
                priority: 0.7
            },
            {
                name: "/contact",
                priority: 0.7
            }
        ];
        const numOfPress = 2
        const press: LinkType[] = []
        for(let i=0; i<numOfPress; i++) {
            press.push({
                name: `/press/${i + 1}`,
                priority: 0.3
            })
        }
        const linksSitemap = [
            ...links,
            ...press
        ]

        // Create each URL row
        linksSitemap.forEach(link => {
            smStream.write({
                url: link.name,
                changefreq: link.changefreq !== undefined ? link.changefreq: "monthly",
                priority: link.priority
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