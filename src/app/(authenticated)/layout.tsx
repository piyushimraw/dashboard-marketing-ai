import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GlobeIcon } from "@/components/ui/icons/globe";
import { SearchIcon } from "@/components/ui/icons/search";

import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;
export default function AuthenticatedLayout({ children }: Props) {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-900">
      <header className="flex items-center h-16 px-4 border-b border-gray-200 dark:border-gray-700 shrink-0 md:px-6">
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6">
          <Link
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            href="#"
          >
            <GlobeIcon className="w-6 h-6" />
            <span className="sr-only">AI Campaign Planner</span>
          </Link>
          <Link className="font-bold text-green-400" href="#">
            Dashboard
          </Link>
          <Link className="text-gray-200 dark:text-gray-400" href="#">
            Campaigns
          </Link>
          <Link className="text-gray-200 dark:text-gray-400" href="#">
            Analytics
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-200 dark:text-gray-400" />
              <Input
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                placeholder="Search campaigns..."
                type="search"
              />
            </div>
          </form>
          <Button className="rounded-full" size="icon" variant="ghost">
            <Image
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 bg-white dark:bg-gray-800 rounded-t-3xl shadow-lg">
        {children}
      </main>
    </div>
  );
}
