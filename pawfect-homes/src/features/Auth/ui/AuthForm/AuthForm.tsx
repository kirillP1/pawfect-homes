import { LoginFormTabItem } from "./LoginFormTabItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { RegisterFormTabItem } from "./RegisterFormTabItem";

export const AuthForm = () => {
  return (
    <Tabs defaultValue="login">
      <TabsList>
        <TabsTrigger value="login">Login form</TabsTrigger>
        <TabsTrigger value="register">Register form</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginFormTabItem />
      </TabsContent>
      <TabsContent value="register">
        <RegisterFormTabItem />
      </TabsContent>
    </Tabs>
  );
};
