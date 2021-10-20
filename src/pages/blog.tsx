import Image from "next/image";

import Instagram from "instagram-web-api";

import { BlogStyled } from "@styles/components/Blog";

const Blog = ({ igPosts }: any) => {
    const igUrl = "https://www.instagram.com";

    return (
        <BlogStyled>
            <h1>
                <a
                    href={`${igUrl}/soynaturnia/`}
                    target="_blank"
                    rel="noreferrer"
                >
                    Siguenos en instagram
                </a>
            </h1>

            <ul>
                {igPosts.map(({ src, desc, shortcode }: any, index: number) => {
                    return (
                        <li key={index}>
                            <a
                                href={`${igUrl}/p/${shortcode}`}
                                aria-label="Ver post en instagram"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    className="image"
                                    src={src}
                                    alt={desc}
                                    width={400}
                                    height={400}
                                />

                                <p>{desc}</p>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </BlogStyled>
    );
};

export default Blog;

export async function getStaticProps() {
    const client = new Instagram({
        username: process.env.IG_USERNAME,
        password: process.env.IG_PASSWORD,
    });

    let posts = [];

    try {
        await client.login();
        const instagram = await client.getPhotosByUsername({
            username: "soynaturnia",
            first: 9,
        });

        if (instagram?.user?.edge_owner_to_timeline_media?.count > 0) {
            posts = instagram.user.edge_owner_to_timeline_media.edges;

            posts = posts.map(({ node }: any) => ({
                src: node.thumbnail_src,
                desc: node.edge_media_to_caption?.edges[0]?.node?.text
                    .replace(/(#\w+)+/g, "")
                    .trim()
                    .substring(0, 100)
                    .concat(" ..."),
                shortcode: node.shortcode,
            }));
        }
    } catch {}

    return {
        props: {
            igPosts: posts,
        },
    };
}
