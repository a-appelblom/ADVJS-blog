import type { NextPage } from "next";

import { client } from "../lib/cms";
import { ContentfulImage } from "../lib/types";
import Hero from "../components/common/Hero";
import HomepageContent from "../components/homepage/HomepageContent";

interface HomeProps {
  data: {
    fields: {
      heroImage: ContentfulImage;
      pageTitle: string;
      subtitle: string;
      contentTitle: string;
      homepageContent: any;
    };
  }[];
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const { heroImage, pageTitle, subtitle, contentTitle, homepageContent } =
    data[0].fields;
  return (
    <div className="flex flex-col justify-center gap-8 w-full">
      <Hero
        image={heroImage}
        title={pageTitle}
        subtitle={subtitle}
        cta={{ action: "/posts", text: "read the blog" }}
      />
      <HomepageContent title={contentTitle} content={homepageContent} />
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await client
    .getEntries({
      content_type: "homepage",
    })
    .then((response) => response.items)
    .catch(console.error);

  return {
    props: { data },
  };
};

export default Home;
