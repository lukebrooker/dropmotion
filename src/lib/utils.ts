export function toUrlPath(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "")
    .replace(/-+/g, "-")
}

export function startViewTransition(callback: () => void) {
  if (typeof window === "undefined") {
    callback()
    return
  }

  if ("startViewTransition" in document) {
    ;(
      document as Document & {
        startViewTransition: (callback: () => void) => {
          finished: Promise<void>
          ready: Promise<void>
          updateCallbackDone: Promise<void>
          skipTransition(): void
        }
      }
    ).startViewTransition(callback)
  } else {
    callback()
  }
}
