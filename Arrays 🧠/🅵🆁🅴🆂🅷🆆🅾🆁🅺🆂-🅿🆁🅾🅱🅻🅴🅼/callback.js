const groupBy = (values, callback) => {
    let category = new Map();
    for(let i=0;i<values.length;i++) {
        let value = callback(values[i]);
        category.set(value, [...category.get(value) || [], values[i]]);
    }
    return category;
}

const words = ["one", "two"];
let myvalues = groupBy(words,(value) => {
    return value.length;
})
console.log(myvalues);