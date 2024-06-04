"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import GoogleIcon from "../../../public/google_icon.svg";

export default function GoogleLoginButton(props: { nextUrl?: string }) {
  const supabase = createClient();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_REDIRECT_URL}`,
      },
    });
  };

  return <button className='btn btn-outline' onClick={handleLogin}><Image height={35} src={GoogleIcon} alt={"Google Icon"}/>Login with Google</button>;
}