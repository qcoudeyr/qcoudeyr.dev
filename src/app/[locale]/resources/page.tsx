import { Flex, Heading, Feedback } from "@/once-ui/components";
import { ResourcesTable } from "@/components/resources/ResourcesTable";
import { resources as resourcesList } from "@/app/resources/resourcesList";
import { baseURL, renderContent } from "@/app/resources";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations();
  return {
    title: 'Resources',
    description: 'Curated list of useful resources and projects',
  };
}

export default function Resources({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const { resources } = renderContent(t);

  return (
    <Flex
      fillWidth
      direction="column"
      gap="l">
      {/* Header section */}
      <Flex
        fillWidth
        maxWidth="l">
        <Heading variant="display-strong-l">{resources.title}</Heading>
      </Flex>
      <Feedback
      variant="warning"
      icon
      title={t('warning.title')}
      description=""
      />
      {/* Table section with responsive container */}
      <Flex
        fillWidth
        direction="column"
        background="surface"
        radius="l"
        border="neutral-medium"
        borderStyle="solid-1"
        overflowX="auto">
        <ResourcesTable resources={resourcesList} />
      </Flex>
    </Flex>
  );
}
