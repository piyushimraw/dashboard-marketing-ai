import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import Image from "next/image"

export function PostDetails() {
  return (
    <div key="1" className="flex flex-col w-full min-h-screen">
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
              <CardTitle className="text-sm font-medium">Generate Post Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="font-bold">Theme:</p>
                <Input className="w-full" placeholder="Enter theme..." type="text" />
                <p className="font-bold">Post Outline:</p>
                <Input className="w-full" placeholder="Enter post outline..." type="text" />
                <p className="font-bold">Post Outcome:</p>
                <Input className="w-full" placeholder="Enter post outcome..." type="text" />
                <p className="font-bold">Targeted Age Group:</p>
                <Input className="w-full" placeholder="Enter targeted age group..." type="text" />
                <p className="font-bold">Include Hashtags:</p>
                <Switch className="ml-auto" id="hashtags" />
                <p className="font-bold">Caption Tone:</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="informative">Informative</SelectItem>
                  </SelectContent>
                </Select>
                <p className="font-bold">Image Style:</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="vintage">Vintage</SelectItem>
                    <SelectItem value="classic">Classic</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="mt-4 bg-gray-900 text-white" variant="default">
                  Generate Content
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Generated Post Previews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border p-4 rounded-lg">
                  <h3 className="font-bold">Preview 1:</h3>
                  <Image
                    alt="Generated Post Image 1"
                    className="object-cover w-full h-60"
                    height={300}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <p className="font-normal mt-2">
                    AI is transforming everyday life. From healthcare to transportation to education, the possibilities
                    are endless. #AI #Innovation
                  </p>
                </div>
                <div className="border p-4 rounded-lg">
                  <h3 className="font-bold">Preview 2:</h3>
                  <Image
                    alt="Generated Post Image 2"
                    className="object-cover w-full h-60"
                    height={300}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <p className="font-normal mt-2">
                    Discover how AI is making a difference in our daily lives. Join us as we explore AI in healthcare,
                    transportation, education, and more. #AI #FutureTech
                  </p>
                </div>
                <div className="border p-4 rounded-lg">
                  <h3 className="font-bold">Preview 3:</h3>
                  <Image
                    alt="Generated Post Image 3"
                    className="object-cover w-full h-60"
                    height={300}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <p className="font-normal mt-2">
                    AI is not just a buzzword. Its a reality thats changing the world. Stay tuned as we delve into the
                    impact of AI on various sectors. #AI #TechImpact
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}


function GlobeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}


function SearchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
