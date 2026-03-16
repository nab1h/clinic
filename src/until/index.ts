/**
 * Slices a string to a specified limit and appends '...' if it exceeds the limit.
 * @param {string} string - The input string to slice.
 * @param {number} limit - The maximum number of characters.
 * @returns {string} The sliced string with '...' or the original string.
 */
export const descSlice =(string:string,limt:number)=>{
    if(string.length >= limt){
        return string.slice(0,limt)+'...';
    }return string;
}

/**
 * Formats an ISO date string to 'day/month/year' format.
 * @param {string} dateString - The ISO date string (e.g., '2026-03-08T15:51:08.000000Z').
 * @returns {string} The formatted date (e.g., '8/3/2026').
 */
export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
