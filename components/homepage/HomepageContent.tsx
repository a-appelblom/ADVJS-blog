import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface HomePageContentProps {
  title: string;
  content: any;
}
const HomepageContent: React.FC<HomePageContentProps> = ({
  title,
  content,
}) => {
  const renderContent = documentToReactComponents(content);
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 my-8">
      <h3 className="text-4xl">{title}</h3>
      <div>{renderContent && renderContent}</div>
    </div>
  );
};

export default HomepageContent;
