export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="mt-14 font-bold text-2xl text-center">Opinio</h1>
      {children}
    </>
  );
}
