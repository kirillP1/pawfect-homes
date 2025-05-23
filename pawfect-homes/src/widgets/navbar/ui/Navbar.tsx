import { AuthForm } from '@/features/Auth'
import { ButtonSize, ButtonVariant, Button } from '@/shared/ui/button'
import { CustomDialog } from '@/shared/ui/dialog'

export const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.SM}>
          Notifications
        </Button>
        <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.SM}>
          Profile
        </Button>
        <CustomDialog
          title='Sign up / Sign in'
          trigger={
            <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.SM}>
              Sign up / Sign in
            </Button>
          }
          content={<AuthForm/>}
        />
      </div>
    </header>
  );
};