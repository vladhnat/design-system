"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { TextContentTitle } from "@/components/ui/text-content-title"
import { ButtonGroup } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import { FormBox } from "@/components/ui/form-box"
import { InputField } from "@/components/ui/input-field"
import { TextareaField } from "@/components/ui/textarea-field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const heroVariants = cva(
  "flex flex-col items-center justify-center w-full px-4 min-h-screen pt-16",
  {
    variants: {
      variant: {
        subtle: "bg-[hsl(var(--bg-secondary))]",
        image: "relative bg-cover bg-center",
        default: "bg-[hsl(var(--bg-default))]",
      },
    },
    defaultVariants: {
      variant: "subtle",
    },
  }
)

export interface HeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof heroVariants> {
  title?: string
  subtitle?: string
  src?: string
  alt?: string
  children?: React.ReactNode
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ className, variant, title, subtitle, src, alt, children, ...props }, ref) => {
    const hasImage = variant === "image" && src
    const [imageError, setImageError] = React.useState(false)

    return (
      <div
        ref={ref}
        className={cn(heroVariants({ variant, className }))}
        {...props}
      >
        {hasImage && !imageError && (
          <div className="absolute inset-0 z-0">
            <Image
              src={src!}
              alt={alt || ""}
              fill
              className="object-cover"
              priority
              onError={() => setImageError(true)}
              unoptimized={src!.startsWith('http')}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}
        <div className={cn(
          "relative z-10 flex flex-col items-center gap-6 max-w-4xl w-full",
          variant === "image" && "text-white"
        )}>
          {title && (
            <TextContentTitle
              title={title}
              subtitle={subtitle}
              align="center"
              className={variant === "image" ? "[&_h1]:text-white [&_p]:text-white/90" : ""}
            />
          )}
          {children}
        </div>
      </div>
    )
  }
)
Hero.displayName = "Hero"

// Hero Actions - Hero with action buttons
export interface HeroActionsProps extends Omit<HeroProps, "children"> {
  primaryAction?: {
    label: string
    onClick?: () => void
  }
  secondaryAction?: {
    label: string
    onClick?: () => void
  }
}

const HeroActions = React.forwardRef<HTMLDivElement, HeroActionsProps>(
  ({ primaryAction, secondaryAction, ...props }, ref) => {
    return (
      <Hero ref={ref} {...props}>
        <ButtonGroup align="center">
          {secondaryAction && (
            <Button variant="subtle" onClick={secondaryAction.onClick}>
              {secondaryAction.label}
            </Button>
          )}
          {primaryAction && (
            <Button onClick={primaryAction.onClick}>
              {primaryAction.label}
            </Button>
          )}
        </ButtonGroup>
      </Hero>
    )
  }
)
HeroActions.displayName = "HeroActions"

// Hero Form - Hero with form
export interface HeroFormProps extends Omit<HeroProps, "children" | "onSubmit"> {
  formFields?: Array<{
    type: "input" | "textarea"
    label: string
    placeholder?: string
    name: string
  }>
  submitLabel?: string
  onSubmit?: (data: Record<string, string>) => void
}

const HeroForm = React.forwardRef<HTMLDivElement, HeroFormProps>(
  ({ formFields, submitLabel = "Submit", onSubmit, ...props }, ref) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const data = Object.fromEntries(formData.entries()) as Record<string, string>
      onSubmit?.(data)
    }

    return (
      <Hero ref={ref} {...props}>
        <FormBox onSubmit={handleSubmit} className="w-full max-w-md">
          {formFields?.map((field) => {
            if (field.type === "textarea") {
              return (
                <TextareaField
                  key={field.name}
                  label={field.label}
                  placeholder={field.placeholder}
                  name={field.name}
                />
              )
            }
            return (
              <InputField
                key={field.name}
                label={field.label}
                placeholder={field.placeholder}
                name={field.name}
              />
            )
          })}
          <ButtonGroup align="justify">
            <Button type="submit">{submitLabel}</Button>
          </ButtonGroup>
        </FormBox>
      </Hero>
    )
  }
)
HeroForm.displayName = "HeroForm"

// Hero Newsletter - Hero with newsletter form
export interface HeroNewsletterProps extends Omit<HeroProps, "children" | "onSubmit"> {
  emailPlaceholder?: string
  submitLabel?: string
  onSubmit?: (email: string) => void
}

const HeroNewsletter = React.forwardRef<HTMLDivElement, HeroNewsletterProps>(
  ({ emailPlaceholder = "you@example.com", submitLabel = "Submit", onSubmit, ...props }, ref) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const email = formData.get("email") as string
      onSubmit?.(email)
    }

    return (
      <Hero ref={ref} {...props}>
        <Form singleLine onSubmit={handleSubmit} className="w-full max-w-md">
          <Input
            type="email"
            name="email"
            placeholder={emailPlaceholder}
            defaultValue={emailPlaceholder}
            className="flex-1"
          />
          <Button type="submit">{submitLabel}</Button>
        </Form>
      </Hero>
    )
  }
)
HeroNewsletter.displayName = "HeroNewsletter"

export { Hero, HeroActions, HeroForm, HeroNewsletter, heroVariants }

