function createSitemap(){
    const baseLink = process.env.NODE_ENV == 'production'
        ? 'https://ayocpa.ca/'
        : 'http://localhost:3000/';

    const links = [
        'about',
        'contact',
        'service',
        'resource',
        'book-an-appointment',
        'file-my-taxes',
        'make-payment-as-guest',
        'submit-document',
        'remote-access',
        'accessibility',
        'terms-of-use',
        'privacy'
    ];

    return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>${baseLink}</loc>
            </url>
            ${links
            .map((link) => {
                return `
            <url>
                <loc>${`${baseLink}${link}`}</loc>
            </url>
            `;
            })
            .join('')}
        </urlset>`
}

function SiteMap() {
}

export async function getServerSideProps({ res }) {
    const sitemap = createSitemap();

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;