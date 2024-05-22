import NextTopLoader from "nextjs-toploader";

export default function AnotherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <NextTopLoader 
        speed={10000}
      />
      {children}
    </>
  );
}
