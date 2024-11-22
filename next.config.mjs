import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';
import { withPlausibleProxy } from 'next-plausible';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: { },
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'inline',
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.shields.io',
            },
        ],
    },
};

export default withPlausibleProxy({
    customDomain: 'https://plausible.qcoudeyr.dev',
})(
    withNextIntl(withMDX(nextConfig))
);
