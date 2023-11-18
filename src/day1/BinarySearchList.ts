export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const mid = Math.floor((low + high) / 2);
        const val = haystack[mid];

        if (val === needle) return true;
        if (val < needle) {
            low = mid + 1;
        } else {
            high = mid;
        }
    } while (low < high);

    return false;
}
