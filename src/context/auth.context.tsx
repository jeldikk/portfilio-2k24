"use client";
import { AuthUser, signOut } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export interface IAuthDetails {
  isAuthenticated: boolean;
  user: AuthUser | null;
}

export type IAuthDetailsContextType = {
  authDetails: IAuthDetails | null;
  signOut: () => void;
};

export const AuthDetailsContext = createContext<IAuthDetailsContextType | null>(
  null
);

type Props = {
  details: IAuthDetails;
  children: React.ReactNode;
};

export function AuthDetailsContextProvider(props: Props) {
  const router = useRouter();
  const [authDetails, setAuthDetails] = useState<IAuthDetails>(props.details);
  useEffect(() => {
    const authSub = Hub.listen("auth", (data) => {
      const { payload } = data;
      switch (payload.event) {
        case "signedIn":
          setAuthDetails({
            isAuthenticated: true,
            user: payload.data,
          });
          break;
        case "signedOut":
          setAuthDetails({ isAuthenticated: false, user: null });
          break;
      }
      router.push("/");
    });

    return () => {
      console.log("unsubscribing from the auth channel");
      authSub();
    };
  }, [router]);

  return (
    <AuthDetailsContext.Provider value={{ authDetails, signOut }}>
      {props.children}
    </AuthDetailsContext.Provider>
  );
}
