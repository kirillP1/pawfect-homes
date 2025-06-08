import "../globals.css";
import { Sidebar } from "@/widgets/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
        {children}
      </main>
    </>
  );
}
