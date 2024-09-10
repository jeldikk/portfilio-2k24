import LoginComponent from "@/components/login/login.component";
import { getAuthenticatedUser } from "@/utils/amplify.server";

export default async function LoginPage() {
  //   const user = await getAuthenticatedUser();
  return (
    <div className="login-page">
      <LoginComponent></LoginComponent>
    </div>
  );
}
