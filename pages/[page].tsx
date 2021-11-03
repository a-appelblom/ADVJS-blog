import { NextPage } from "next";
import Hero from "../components/common/Hero";
import { client } from "../lib/cms";

interface PageProps {
  page: any;
}
const Page: NextPage<PageProps> = ({ page }) => {
  return (
    <>
      {page?.fields && (
        <div>
          <Hero
            image={page.fields.heroImage}
            subtitle={page.fields.subtitle}
            title={page.fields.pageTitle}
            cta={{
              action: page.fields.callToAction.fields.action,
              text: page.fields.callToAction.fields.text,
            }}
          />
        </div>
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  const data = await client
    .getEntries({
      content_type: "page",
      select: "fields.slug",
    })
    .then((response: any) => response.items)
    .catch(console.error);

  const paths = data.map((page: any) => ({
    params: {
      page: page.fields.slug,
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const page = await client
    .getEntries({ content_type: "page", "fields.slug[match]": params.page })
    .then((response: any) => response)
    .catch(console.error);

  return {
    props: {
      page: page.items[0],
    },
  };
};

export default Page;
