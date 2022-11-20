function samplePromise() {
    return Promise.resolve('Wahyu Tampan')
}

async function run() {
    const name = await samplePromise();
    console.info(name);
}

run()
// salah:
// const name = await samplePromise();
// console.info(name)