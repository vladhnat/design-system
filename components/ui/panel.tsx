"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { TextContentHeading } from "@/components/ui/text-content-heading"
import { Flex, FlexItem } from "@/components/ui/flex"
import Image from "next/image"

const panelVariants = cva("w-full", {
  variants: {
    type: {
      auto: "",
      half: "grid grid-cols-1 md:grid-cols-2",
      full: "w-full",
    },
    gap: {
      "600": "gap-6", // 24px
      "800": "gap-8", // 32px
      "1200": "gap-12", // 48px
    },
  },
  defaultVariants: {
    type: "auto",
    gap: "1200",
  },
})

export interface PanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof panelVariants> {
  children: React.ReactNode
}

const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ className, type, gap, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(panelVariants({ type, gap, className }))}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Panel.displayName = "Panel"

// Panel Image - Full-width image panel
export interface PanelImageProps extends Omit<PanelProps, "children"> {
  src: string
  alt: string
  aspectRatio?: "fill" | "4-3" | "16-9" | "1-1"
}

const PanelImage = React.forwardRef<HTMLDivElement, PanelImageProps>(
  ({ src, alt, aspectRatio = "fill", className, ...props }, ref) => {
    const aspectRatioClasses = {
      fill: "aspect-auto",
      "4-3": "aspect-[4/3]",
      "16-9": "aspect-video",
      "1-1": "aspect-square",
    }

    const [imageError, setImageError] = React.useState(false)

    return (
      <Panel ref={ref} type="full" className={className} {...props}>
        <div className={cn("relative w-full overflow-hidden rounded-lg bg-[#E3E3E3] flex items-center justify-center", aspectRatioClasses[aspectRatio])}>
          {!imageError && src ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
              unoptimized={src.startsWith('http')}
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 text-[#757575]">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-normal">{alt || "Image"}</span>
            </div>
          )}
        </div>
      </Panel>
    )
  }
)
PanelImage.displayName = "PanelImage"

// Panel Image Content - Image + content side-by-side
export interface PanelImageContentProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "content"> {
  src: string
  alt: string
  heading?: string
  subheading?: string
  content?: React.ReactNode
  aspectRatio?: "4-3" | "16-9" | "1-1"
  reverse?: boolean
  type?: "auto" | "half" | "full"
  gap?: "600" | "800" | "1200"
}

const PanelImageContent = React.forwardRef<HTMLDivElement, PanelImageContentProps>(
  ({ src, alt, heading, subheading, content, aspectRatio = "4-3", reverse = false, className, ...props }, ref) => {
    const aspectRatioClasses = {
      "4-3": "aspect-[4/3]",
      "16-9": "aspect-video",
      "1-1": "aspect-square",
    }

    const [imageError, setImageError] = React.useState(false)

    const imageElement = (
      <div className={cn("relative w-full overflow-hidden rounded-lg bg-[#E3E3E3] flex items-center justify-center", aspectRatioClasses[aspectRatio])}>
        {!imageError && src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            unoptimized={src.startsWith('http')}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-[#757575]">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-normal">{alt || "Image"}</span>
          </div>
        )}
      </div>
    )

    const contentElement = (
      <FlexItem size="half">
        <Flex direction="column" gap="600">
          {heading && (
            <TextContentHeading heading={heading} subheading={subheading} />
          )}
          {content && (
            <div className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
              {content}
            </div>
          )}
        </Flex>
      </FlexItem>
    )

    return (
      <Panel ref={ref} type="half" gap="1200" className={className} {...props}>
        {reverse ? (
          <>
            {contentElement}
            {imageElement}
          </>
        ) : (
          <>
            {imageElement}
            {contentElement}
          </>
        )}
      </Panel>
    )
  }
)
PanelImageContent.displayName = "PanelImageContent"

// Panel Image Double - Two images side-by-side
export interface PanelImageDoubleProps extends Omit<PanelProps, "children"> {
  src1: string
  alt1: string
  src2: string
  alt2: string
  aspectRatio?: "4-3" | "16-9" | "1-1"
}

const PanelImageDouble = React.forwardRef<HTMLDivElement, PanelImageDoubleProps>(
  ({ src1, alt1, src2, alt2, aspectRatio = "4-3", className, ...props }, ref) => {
    const aspectRatioClasses = {
      "4-3": "aspect-[4/3]",
      "16-9": "aspect-video",
      "1-1": "aspect-square",
    }

    const [image1Error, setImage1Error] = React.useState(false)
    const [image2Error, setImage2Error] = React.useState(false)

    return (
      <Panel ref={ref} type="half" gap="1200" className={className} {...props}>
        <div className={cn("relative w-full overflow-hidden rounded-lg bg-[#E3E3E3] flex items-center justify-center", aspectRatioClasses[aspectRatio])}>
          {!image1Error && src1 ? (
            <Image
              src={src1}
              alt={alt1}
              fill
              className="object-cover"
              onError={() => setImage1Error(true)}
              unoptimized={src1.startsWith('http')}
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 text-[#757575]">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-normal">{alt1 || "Image 1"}</span>
            </div>
          )}
        </div>
        <div className={cn("relative w-full overflow-hidden rounded-lg bg-[#E3E3E3] flex items-center justify-center", aspectRatioClasses[aspectRatio])}>
          {!image2Error && src2 ? (
            <Image
              src={src2}
              alt={alt2}
              fill
              className="object-cover"
              onError={() => setImage2Error(true)}
              unoptimized={src2.startsWith('http')}
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 text-[#757575]">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-normal">{alt2 || "Image 2"}</span>
            </div>
          )}
        </div>
      </Panel>
    )
  }
)
PanelImageDouble.displayName = "PanelImageDouble"

export { Panel, PanelImage, PanelImageContent, PanelImageDouble, panelVariants }

