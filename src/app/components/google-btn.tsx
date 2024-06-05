"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import GoogleIcon from "../../../public/google_icon.svg";

export default function GoogleLoginButton(props: { nextUrl?: string }) {
  const supabase = createClient();

  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      'http://localhost:3000/auth/callback'
    // Make sure to include `https://` when not localhost.
    url = url.includes('http') ? url : `https://${url}`
    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
    return url
  }

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: getURL(),
      },
    });
  };

  return <button className='btn btn-outline' onClick={handleLogin}><Image height={35} src={GoogleIcon} alt={"Google Icon"} />Login with Google</button>;
}