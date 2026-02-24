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
