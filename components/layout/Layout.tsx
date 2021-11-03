import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { client } from "../../lib/cms";
interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [data, setData] = useState([]);
  const [layoutData, setLayoutData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const getData = async () => {
      const data = await client
        .getEntries({
          content_type: "page",
          select: "fields.slug",
        })
        .then((response: any) => response.items)
        .catch(console.error);

      const layoutData = await client
        .getEntry("10eO5x8cbLzaJkTMYJuiT1")
        .then((response: any) => response)
        .catch(console.error);
      setData(data);
      setLayoutData(layoutData);
    };
    getData();
  }, []);

  return (
    <>
      <Header data={data} />
      <main className="min-h-screen max-w-7xl mx-auto">{children}</main>
      <Footer data={data} layoutData={layoutData ? layoutData : null} />
    </>
  );
};

export default Layout;
