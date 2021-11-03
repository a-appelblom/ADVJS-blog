import Link from "next/link";

interface HeaderProps {
  data: any;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className="mx-auto text-center h-16 flex items-center justify-center bg-gradient-to-b from-red-300">
      <nav className="max-w-3xl flex mx-auto gap-8 capitalize text-2xl">
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
      </nav>
    </header>
  );
};

export default Header;
