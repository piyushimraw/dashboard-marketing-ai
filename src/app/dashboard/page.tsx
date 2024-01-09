import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import { TextIcon } from "@/components/ui/icons/text"
import { GlobeIcon } from "@/components/ui/icons/globe"
import { SearchIcon } from "@/components/ui/icons/search"
import { ImageIcon } from "@/components/ui/icons/image"

 function Dashboard() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6">
          <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">
            <GlobeIcon className="w-6 h-6" />
            <span className="sr-only">AI Campaign Planner</span>
          </Link>
          <Link className="font-bold" href="#">
            Dashboard
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Campaigns
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Analytics
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
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
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">AI-Powered Caption Generation</CardTitle>
              <TextIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                Generate engaging captions for your marketing campaigns. Customize the word count, tone, and number of
                hashtags to match your brands voice.
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Image Generation</CardTitle>
              <ImageIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                Generate visually stunning images for your campaign posts. Customize the style and color theme to align
                with your brands aesthetics.
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-8">
          <Button className="mr-4" variant="default">
            Start a New Campaign
          </Button>
          <Button variant="outline">View Campaign Analytics</Button>
        </div>
      </main>
    </div>
  )
}

export default Dashboard