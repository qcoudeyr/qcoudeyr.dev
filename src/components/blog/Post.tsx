"use client";

import { Flex, Heading, SmartImage, SmartLink, Tag, Text } from '@/once-ui/components';
import styles from './Posts.module.scss';
import { formatDate } from '@/app/utils/formatDate';

interface PostMetadata {
    title: string;
    publishedAt: string;
    image?: string;
    tag?: string | string[];
}

interface PostProps {
    post: {
        slug: string;
        metadata: PostMetadata;
    };
    thumbnail: boolean;
}

export default function Post({ post, thumbnail }: PostProps) {
    // Convert tag to array if it's a string or undefined
    const tags = !post.metadata.tag ? []
        : Array.isArray(post.metadata.tag) ? post.metadata.tag
        : [post.metadata.tag];

	const displayTags = tags.slice(0, 3); // Limit to 3 tags

    return (
        <SmartLink
            className={styles.hover}
            style={{
                textDecoration: 'none',
                margin: '0',
                height: 'fit-content',
            }}
            key={post.slug}
            href={`/blog/${post.slug}`}>
            <Flex
                position="relative"
                mobileDirection="column"
                fillWidth paddingY="12" paddingX="16" gap="32">
                {post.metadata.image && thumbnail && (
                    <Flex
                        maxWidth={20} fillWidth
                        className={styles.image}>
                        <SmartImage
                            priority
                            sizes="640px"
                            style={{
                                cursor: 'pointer',
                                border: '1px solid var(--neutral-alpha-weak)'
                            }}
                            radius="m"
                            src={post.metadata.image}
                            alt={'Thumbnail of ' + post.metadata.title}
                            aspectRatio="16 / 9"
                        />
                    </Flex>
                )}
                <Flex
                    position="relative"
                    fillWidth gap="8"
                    direction="column" justifyContent="center">
                    <Heading
                        as="h2"
                        variant="heading-strong-l"
                        wrap="balance">
                        {post.metadata.title}
                    </Heading>
                    <Text
                        variant="label-default-s"
                        onBackground="neutral-weak">
                        {formatDate(post.metadata.publishedAt, false)}
                    </Text>
					<Flex
						direction="row"
						gap="8"
						alignItems="center">
						{displayTags.map((tag, index) => (
							<Tag
								key={index}
								label={tag}
								variant="neutral" />
						))}
					</Flex>
                </Flex>
            </Flex>
        </SmartLink>
    );
}
