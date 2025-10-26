"use client";

import { useEffect } from "react";
import { ClerkProvider } from "@clerk/nextjs";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  // Wrap the client-side tree with ClerkProvider so client hooks like useAuth/useSession work.
  // If you prefer to pass a publishable key explicitly, set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY in your env.
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <div className="antialiased">{children}</div>
    </ClerkProvider>
  );
}
