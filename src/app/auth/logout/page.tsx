import { getAuthenticatedUser } from "@/utils/amplify.server";
import { redirect } from "next/navigation";

export default async function LogoutPage() {
  //   const user = await getAuthenticatedUser();
  //   if (user) {
  //     await logoutUser();
  //   } else {
  //     redirect("/");
  //   }
  return <>Logging Out</>;
}
