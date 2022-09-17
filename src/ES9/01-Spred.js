const userDate = {
    user : 'Sebastian',
    age: 24,
    country: 'Colombia',
};

const {
    user, ...values
} = userDate;

console.log(user);
console.log(values);