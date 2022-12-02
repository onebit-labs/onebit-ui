import { safeGet } from '../get'

export const catchError = (e: any, title?: string) => {
  e = safeGet(() => e.error) || e
  const errors: any[] = safeGet(() => e.body.errors) || [e.body]
  let message = safeGet(() => errors[0].message)
  message = title ? `${title}, ${message}` : message

  return {
    errors: errors.reduce((obj, e) => {
      safeGet(() => {
        const { field, message } = e
        obj[field] = message
      })
      return obj
    }, {} as any),
    message: message || 'rejected 🤯',
  }
}
