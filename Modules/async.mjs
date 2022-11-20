function samplePromise() {
    return Promise.resolve('Wahyu Tampan')
}

// benar:
const name = await samplePromise();
console.info(name)