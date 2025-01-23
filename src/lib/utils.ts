export function toUrlPath(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "")
    .replace(/-+/g, "-")
}

export function startViewTransition(callback: () => void) {
  if ((document as any).startViewTransition) {
    ;(document as any).startViewTransition(callback)
  } else {
    callback()
  }
}
