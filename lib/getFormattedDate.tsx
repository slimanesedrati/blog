// export default function getFormattedDate(dateString: string): string {
//     return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dateString))
// }

// utils/dateFormatter.js
import { format } from 'date-fns';

// Format a date using date-fns
export default function (dateString: string, formatString = 'yyyy-MM-dd') {
  try {
    return format(new Date(dateString), formatString);
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
};