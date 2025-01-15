


const start = Date.now();

console.log('starting timer...');

setTimeout(() => {
    const millsis = Date.now() - start;

    console.log(`seconds elpsed = ${Math.floor(millsis/1000)}`)
}, 2000);


