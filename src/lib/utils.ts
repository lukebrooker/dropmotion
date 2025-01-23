export function toUrlPath(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "")
    .replace(/-+/g, "-")
}

interface ViewTransition {
  finished: Promise<void>
  ready: Promise<void>
  updateCallbackDone: Promise<void>
  skipTransition: () => void
}

interface DocumentWithViewTransition extends Document {
  startViewTransition?: (callback: () => void) => ViewTransition
}

export function startViewTransition(callback: () => void) {
  const doc = document as DocumentWithViewTransition
  if (doc.startViewTransition) {
    doc.startViewTransition(callback)
  } else {
    callback()
  }
}
