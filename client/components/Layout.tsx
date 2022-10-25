import Head from "next/head";

type LayoutProps = {
  title?: string;
  description?: string;
  keywords?: string;
  children?: React.ReactNode;
};

export default function Layout({ title, description, keywords, children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      {children}
    </div>
  );
}

Layout.defaultProps = {
  title: "Foodie | Home",
  description: "The Food Lover Paradise",
  keywords: "food, recipe, housewives, blog",
};
