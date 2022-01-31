import range from 'lodash.range';

export function createPageRange(
  currentPage: number,
  numPages: number,
  pageRange: number,
): Array<string | number> {
  const availableSlots = (pageRange - 1) / 2;
  const oldPageCount = numPages - currentPage;
  const newPageCount = currentPage - 1;

  // note: plus 1 because of non inclusive
  if (newPageCount <= availableSlots && oldPageCount <= availableSlots) {
    // [1 => numPages]
    return range(1, numPages + 1);
  } else if (newPageCount <= availableSlots && oldPageCount > availableSlots) {
    // [1  => (currentPage + available - 2 + ava - newPages) , ... , numPages]
    return [
      ...range(
        1,
        currentPage + availableSlots - 2 + availableSlots - newPageCount + 1,
      ),
      '...',
      numPages,
    ];
  } else if (newPageCount > availableSlots && oldPageCount <= availableSlots) {
    // [1, ... , currentPage - (ava - 2) - (ava - oldPageCount)) => (numPages)]
    return [
      1,
      '...',
      ...range(
        currentPage - (availableSlots - 2) - (availableSlots - oldPageCount),
        numPages + 1,
      ),
    ];
  } else {
    // newPageCount > availableSlots && oldPageCount > availableSlots
    // [1, ..., (currentPage - (available slots - 2)) => (currentPage + available slots - 2) ,... ,numPages ]
    return [
      1,
      '...',
      ...range(
        currentPage - (availableSlots - 2),
        currentPage + (availableSlots - 2) + 1,
      ),
      '...',
      numPages,
    ];
  }
}
