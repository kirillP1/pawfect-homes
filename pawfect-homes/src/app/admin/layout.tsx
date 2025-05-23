import { AuthProvider } from '../_providers/AuthProvider/auth-provider'

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<AuthProvider>
			{children}
		</AuthProvider>
  );
}
