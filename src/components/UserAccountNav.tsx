"use client";

import { User } from "@/payload-types";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import { ArrowLeft, LayoutDashboard, LogOutIcon } from "lucide-react";

interface UserAccountProps {
  user: User;
}

const UserAccountNav = ({ user }: UserAccountProps) => {
  const { signOut } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="overflow-visible" asChild>
        <Button variant={"ghost"} size={"sm"} className="relative">
          My account
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white w-60" align="start">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium text-sm text-black">{user.email}</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/sell">
            <LayoutDashboard className="h-4 w-4 text-muted-foreground mr-2" />{" "}
            Seller Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={signOut}>
          <LogOutIcon className="h-4 w-4 text-muted-foreground mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
