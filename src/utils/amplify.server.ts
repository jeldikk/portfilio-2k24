import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import outputs from "@/../amplify_outputs.json";
import { cookies } from "next/headers";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { type Schema } from "../../amplify/data/resource";
import { AuthUser, signOut } from "aws-amplify/auth";
import { getCurrentUser } from "aws-amplify/auth/server";
import { redirect } from "next/navigation";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs,
});

export const cookiesClient = generateServerClientUsingCookies<Schema>({
  config: outputs,
  cookies,
});

export async function getAuthenticatedUser() {
  try {
    const user = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: async (contextSpec) => {
        return getCurrentUser(contextSpec);
      },
    });
    const isAuthenticated = !!(user && user.userId);
    return {
      isAuthenticated,
      user,
    };
  } catch (err) {
    throw err;
  }
}

// export async function logoutUser() {
//   try {
//     await runWithAmplifyServerContext({
//       nextServerContext: { cookies },
//       operation: async (contextSpec) => {
//         console.log({ contextSpec });
//         const response = await signOut({

//         });
//         console.log({ response });
//       },
//     });
//     redirect("/auth/login");
//   } catch (err) {
//     throw err;
//   }
// }
