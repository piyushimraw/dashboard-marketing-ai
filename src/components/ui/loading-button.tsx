"use client";
import { Loader2 } from "lucide-react"

import { Button, ButtonProps } from "@/components/ui/button"
import { PropsWithChildren } from "react"
import { useFormStatus } from "react-dom"


type Props  =  PropsWithChildren<{
}> & ButtonProps
export function SubmitButton({
    children,
    ...props
}: Props) {
  
const {pending} = useFormStatus()
  return (
    <Button  disabled={pending} {...props}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  )
}
