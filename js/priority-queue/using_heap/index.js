class BinaryHeap {
    // left child - 2*k index
    // right child - 2*k+1 index
    // parent k/2 index
    constructor () {
        this.arr = []
    }

    insert (element) {
        this.arr.push(element)
        let pos = this.arr.length - 1
        while (pos > 0) {
            let parent = Math.floor(pos/2)
            if (this.arr[pos] < this.arr[parent]) {
                let temp = this.arr[pos]
                this.arr[pos] = this.arr[parent]
                this.arr[parent] = temp
            }
            pos = parent
        }
    }
}
const bh = new BinaryHeap()
bh.insert(23)
bh.insert(43)
bh.insert(12)
bh.insert(76)

console.log(bh.arr)
