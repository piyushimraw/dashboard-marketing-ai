import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import Image from "next/image"


export default function PostDetails() {
  return (
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
  )
}
