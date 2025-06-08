import { AdminSidebar } from "@/widgets/sidebar";
import { AuthProvider } from "../_providers/AuthProvider/auth-provider";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <AdminSidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
        {children}
      </main>
    </AuthProvider>
  );
}
