import Image from "next/image";
import Link from "next/link";
import { ContentfulImage } from "../../lib/types";

interface HeroProps {
  image: ContentfulImage;
  title: string;
  subtitle: string;
  cta: {
    action: any;
    text: string;
  };
}

const Hero: React.FC<HeroProps> = ({ image, title, subtitle, cta }) => {
  return (
    <div className="relative w-full grid h-96 my-8">
      <div className="absolute h-full right-16 flex flex-col justify-around items-center text-white z-10 gap-8">
        <h1 className="text-4xl">{title}</h1>
        <p className="text-2xl">{subtitle}</p>
        <div className="hover:text-red-600 text-xl">
          <Link href={cta.action}>
            <a>
              {cta.text} {"->"}
            </a>
          </Link>
        </div>
      </div>
      <div className="overflow-hidden object-cover object-center">
        <img
          // className="object-cover"
          src={`https:${image.fields.file.url}`}
          // layout="fill"
          // objectFit="contain"
          // objectPosition="center"
          // width={1280}
          alt={image.fields.description}
        />
      </div>
    </div>
  );
};

export default Hero;
