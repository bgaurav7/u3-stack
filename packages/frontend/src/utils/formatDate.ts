/**
 * Format date options for cross-platform compatibility
 */
export interface FormatDateOptions {
  locale?: string;
  dateStyle?: 'full' | 'long' | 'medium' | 'short';
  timeStyle?: 'full' | 'long' | 'medium' | 'short';
  includeTime?: boolean;
}

/**
 * Cross-platform date formatting utility
 * Works consistently on web and React Native
 */
export function formatDate(
  date: Date | string | number,
  options: FormatDateOptions = {}
): string {
  const {
    locale = 'en-US',
    dateStyle = 'medium',
    timeStyle = 'short',
    includeTime = false,
  } = options;

  const dateObj = new Date(date);

  // Check if date is valid
  if (Number.isNaN(dateObj.getTime())) {
    return 'Invalid Date';
  }

  try {
    // Use Intl.DateTimeFormat for consistent formatting across platforms
    const formatOptions: Intl.DateTimeFormatOptions = {
      dateStyle,
      ...(includeTime && { timeStyle }),
    };

    return new Intl.DateTimeFormat(locale, formatOptions).format(dateObj);
  } catch (_error) {
    // Fallback for environments that don't support Intl.DateTimeFormat
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');

    if (includeTime) {
      const hours = String(dateObj.getHours()).padStart(2, '0');
      const minutes = String(dateObj.getMinutes()).padStart(2, '0');
      return `${month}/${day}/${year} ${hours}:${minutes}`;
    }

    return `${month}/${day}/${year}`;
  }
}

/**
 * Format date for relative display (e.g., "2 hours ago")
 */
export function formatRelativeDate(date: Date | string | number): string {
  const dateObj = new Date(date);
  const now = new Date();
  const diffInMs = now.getTime() - dateObj.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes < 1) {
    return 'Just now';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
  } else if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
  } else {
    return formatDate(dateObj, { dateStyle: 'short' });
  }
}
