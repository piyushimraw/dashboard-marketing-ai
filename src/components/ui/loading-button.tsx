import { Loader2 } from "lucide-react"

import { Button, ButtonProps } from "@/components/ui/button"
import { PropsWithChildren } from "react"


type Props  =  PropsWithChildren<{
    isLoading?: boolean
}> & ButtonProps
export function ButtonLoading({
    isLoading = false,
    children,
    ...props
}: Props) {
  return (
    <Button disabled={isLoading}>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  )
}