export const routes = {
  // Public routes
  public: [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/about',
      name: 'About',
    },
	],

  // Auth routes
  auth: [
    {
      path: '/login',
      name: 'Login',
    },
    {
      path: '/register',
      name: 'Register',
    },
	],

  // Protected routes (require authentication)
  protected: [
    {
      path: '/dashboard',
      name: 'Dashboard',
    },
    {
      path: '/profile',
      name: 'Profile',
    },
	],
  
  api: [
		{
      path: '/api/users',
      name: 'Users',
    },
		{
      path: '/api/posts',
      name: 'Posts',
    }
	]
} as const; 