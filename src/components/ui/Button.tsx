import { cn } from "@/lib/cn"

export const Button = ({
  variant = "primary",
  size = "md",
  className,
  ...props
}: {
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

  const variantClasses = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90",
    outline:
      "border border-border hover:bg-primary/10",
    ghost:
      "hover:bg-primary/10",
  }

  const sizeClasses = {
    sm: "h-8 py-1 px-2 text-sm",
    md: "h-9 py-2 px-3 text-base",
    lg: "h-10 py-3 px-4 text-lg",
  }

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  )
}