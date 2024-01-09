
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import Image from "next/image"

export function CampaignDetailsV2() {
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
              <CardTitle className="text-sm font-medium">Campaign Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="font-bold">
                  Campaign Name: <span className="font-normal">AI Awareness</span>
                </p>
                <p className="font-bold">
                  Campaign Duration: <span className="font-normal">8 weeks</span>
                </p>
                <p className="font-bold">
                  Target Audience Group: <span className="font-normal">Adults</span>
                </p>
                <p className="font-bold">
                  Audience Profession: <span className="font-normal">IT Professionals</span>
                </p>
                <p className="font-bold">
                  Audience Demography: <span className="font-normal">North America</span>
                </p>
                <p className="font-bold">
                  Campaign Channel: <span className="font-normal">LinkedIn</span>
                </p>
                <p className="font-bold">
                  Campaign Age Group: <span className="font-normal">25-45</span>
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Campaign Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="font-bold">
                  Theme: <span className="font-normal">AI in Everyday Life</span>
                </p>
                <p className="font-bold">
                  Number of Posts: <span className="font-normal">16</span>
                </p>
                <p className="font-bold">
                  Schedule: <span className="font-normal">Twice a week</span>
                </p>
                <p className="font-bold">
                  Post Outline:{" "}
                  <span className="font-normal">AI in Healthcare, AI in Transportation, AI in Education, etc.</span>
                </p>
                <p className="font-bold">
                  Outcome: <span className="font-normal">Increase in brand awareness and website traffic</span>
                </p>
                <p className="font-bold">
                  Campaign Age Group: <span className="font-normal">25-45</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 mt-8">
          <Card className="col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Campaign Timeline</CardTitle>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <FilterIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input
                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                    placeholder="Filter posts..."
                    type="search"
                  />
                </div>
                <div className="relative">
                  <FilterIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <select className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]">
                    <option value="">Filter by status...</option>
                    <option value="done">Done</option>
                    <option value="yet-to-come">Yet to Come</option>
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date and Time</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>12th Jan 2024, 10:00 AM</TableCell>
                    <TableCell>AI in Healthcare</TableCell>
                    <TableCell className="text-green-500">Done</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>15th Jan 2024, 10:00 AM</TableCell>
                    <TableCell>AI in Transportation</TableCell>
                    <TableCell className="text-red-500">Yet to Come</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>18th Jan 2024, 10:00 AM</TableCell>
                    <TableCell>AI in Education</TableCell>
                    <TableCell className="text-red-500">Yet to Come</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="flex justify-center mt-4">
                <Button className="mx-2" variant="outline">
                  Previous
                </Button>
                <Button className="mx-2" variant="outline">
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}


function GlobeIcon(props: any) {
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


function SearchIcon(props: any) {
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


function FilterIcon(props: any) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}
