// quicksort([]) = []
// quicksort(h::t) = concatenate (
//  quicksort(filter ((_\ x => x < h), t),
//  [h],
//  quicksort(filter ((_\ x -> x >= h), t)
// )