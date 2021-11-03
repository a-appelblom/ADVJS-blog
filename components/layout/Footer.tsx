import Link from "next/link";
import { useEffect } from "react";

interface HeaderProps {
  data: any;
  layoutData: any;
}

const Footer: React.FC<HeaderProps> = ({ data, layoutData }) => {
  return (
    <footer className="p-8 mx-auto text-center flex items-center justify-around bg-gradient-to-t from-red-300">
      <div className="max-w-3xl flex flex-col gap-2 capitalize text-xl">
        <Link href="/">
          <a className="hover:text-red-500">home</a>
        </Link>
        <Link href="/posts">
          <a className="hover:text-red-500">posts</a>
        </Link>
        {data &&
          data.map((item: any) => {
            return (
              <Link key={item.fields.slug} href={item.fields.slug}>
                <a className="hover:text-red-500">{item.fields.slug}</a>
              </Link>
            );
          })}
      </div>
      <form className="flex flex-col gap-4 items-start" action="">
        <p>Get in touch</p>
        <div className="flex flex-col gap-1 items-start">
          <label>Name</label>
          <input
            className="px-4 py-1"
            type="text"
            defaultValue=""
            placeholder="Your name please"
          />
        </div>
      </form>
      {layoutData.fields && (
        <div>
          <p>{layoutData.fields.copyright}</p>
          <p>{layoutData.fields.createdBy}</p>
          <a
            href={layoutData.fields.linkToRepo}
            target="_blank"
            rel="noreferrer"
          >
            {layoutData.fields.linkToRepo}
          </a>
        </div>
      )}
    </footer>
  );
};

export default Footer;
