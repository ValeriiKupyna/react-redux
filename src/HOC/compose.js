const compose = (...fn) => (component) => {
    return fn.reduceRight((prevRes, fn) => fn(prevRes), component)
}

export default compose;