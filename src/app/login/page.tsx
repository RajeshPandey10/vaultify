"use client";

import React, { useEffect } from "react";
import { SignIn, useAuth } from "@clerk/nextjs";

export default function LoginPage() {
  const { isSignedIn, getToken } = useAuth();

  useEffect(() => {
    let mounted = true;
    async function sendToken() {
      try {
        if (!mounted) return;
        if (isSignedIn) {
          const token = await getToken({ template: "standard" });
          const backend =
            process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
          await fetch(`${backend}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
        }
      } catch (err) {
        // silent fail; frontend styling must not change
        console.error("backend auth ping failed", err);
      }
    }
    sendToken();
    return () => {
      mounted = false;
    };
  }, [isSignedIn, getToken]);

  return (
    <div>
      <SignIn />
    </div>
  );
}
