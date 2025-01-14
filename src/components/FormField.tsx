import { ComponentProps } from "react"

type FormFieldProps = {
  label: string
  name: string
  type?: "text" | "email" | "textarea"
  required?: boolean
  placeholder?: string
} & Omit<ComponentProps<"input">, "type" | "className">

const baseClasses =
  "w-full bg-transparent px-0 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-0 focus:outline-none transition-colors"

export function FormField({
  label,
  name,
  type = "text",
  required,
  placeholder,
  ...props
}: FormFieldProps) {
  const isTextarea = type === "textarea"

  return (
    <div className='group'>
      <label
        htmlFor={name}
        className='block text-sm text-gray-500 dark:text-gray-400 mb-2'
      >
        {label}
      </label>
      {isTextarea ? (
        <div className='relative border-b border-gray-200 dark:border-white/20'>
          <textarea
            id={name}
            name={name}
            rows={4}
            required={required}
            className={`${baseClasses} resize-none`}
            placeholder={placeholder}
            {...(props as ComponentProps<"textarea">)}
          />
          <div className='absolute bottom-0 left-0 h-px w-0 bg-gray-400 dark:bg-white/60 transition-all duration-300 group-focus-within:w-full' />
        </div>
      ) : (
        <div className='relative'>
          <input
            type={type}
            id={name}
            name={name}
            required={required}
            className={`${baseClasses} border-b border-gray-200 dark:border-white/20`}
            placeholder={placeholder}
            {...props}
          />
          <div className='absolute bottom-0 left-0 h-px w-0 bg-gray-400 dark:bg-white/60 transition-all duration-300 group-focus-within:w-full' />
        </div>
      )}
    </div>
  )
}
