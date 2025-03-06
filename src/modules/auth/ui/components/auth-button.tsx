"use client";

import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const AuthButton = () => {
  // TODO: Añadir auth states diferentes
  return (
    <>
      <SignedIn>
        <UserButton />
        {/* Añadir items de Studio y perfil */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button 
            variant="outline" 
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500 rounded-full shadow-none"
          >
            <UserCircleIcon className="size-4" />
            Iniciar sesión
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};