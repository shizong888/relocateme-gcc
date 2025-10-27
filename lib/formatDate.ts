/**
 * Format a date string to display format
 * e.g., "2025-01-15" -> "Jan 15, 2025"
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  return date.toLocaleDateString('en-US', options)
}
