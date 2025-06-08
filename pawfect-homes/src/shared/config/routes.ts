interface IRoute {
  path: string;
  name: string;
}

export const routes: Record<string, IRoute[]> = {
  // Public routes
  public: [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
  ],

  // Auth routes
  auth: [
    {
      path: "/login",
      name: "Login",
    },
    {
      path: "/register",
      name: "Register",
    },
  ],

  // Protected routes (require authentication)
  protected: [
    {
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      path: "/profile",
      name: "Profile",
    },
  ],

  // Admin routes
  admin: [
    {
      path: "/admin/chat",
      name: "Chat",
    },
  ],
};
