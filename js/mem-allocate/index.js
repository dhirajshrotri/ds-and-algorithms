class SimpleMemory {

    constructor (size) {
        this.memory = new Array(size).fill(0)
        this.fieldset = []
    }

    alloc(blockSize) {
        let startIndex = -1
       for (let index = 0; index < this.memory.length; index++) {
           // if memory is available, allocate it
           let len = index + blockSize;
           let block = this.memory
               .slice(index, len)
               .filter(el => !el)
               .length
           if (block === blockSize) {
               startIndex = index
                this.fieldset.push([index, blockSize])
                this.memory = [...this.memory.slice(0, index),
                    ...new Array(blockSize).fill(1),
                    ...this.memory.slice(index + blockSize,
                        this.memory.length)]
                break
           }
       }

       return startIndex
    }

    free(memLocation) {
        let [index, block] = this.fieldset
            .filter(el => el[0] === memLocation)[0]

        this.memory = [
            ...this.memory.slice(0, index),
            ...new Array(block).fill(0),
            ...this.memory.slice(index + block, this.memory.length)
        ]

        return this.memory
    }
}

mem = new SimpleMemory (16)
mem.alloc (5)
mem.alloc (8)
mem.alloc(3)

console.log(mem.free(5))
