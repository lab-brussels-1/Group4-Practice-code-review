const obj = {
  name: 'Ricardo',
  age: 33,
  city: 'Antwerp',
};

const separateObject = (obj) => {
  const res = [];
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    res.push({
      key: obj[key],
    });
  });
  return res;
};
console.log(separateObject(obj));
