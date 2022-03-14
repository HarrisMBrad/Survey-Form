const contactForm = document.getElementById("form");


// person object
// these are key: 'value-pairs', 
// thus they are called getters and setters in the dev comunity.
// 
const person = {
  firstName: 'Tester',
  lastName: 'Harris',
  // calling this function inside the function means it's a method.
  testName() {
    return `${person.firstName} ${person.lastName}`;
  }
};

console.log(person.testName());

function contact() {

  return ['', null];

}
contact([], console.log('null'));

export default contactForm;

// const fetchData = () => {
//   fect('https://api.github.com').then(resp => {
//     resp.json().then(data => {
//       console.log(data);
//     });
//   });
// };

fectchData();

async

const fetchData = async () => {
  const resp = await fetch('https://api.github.com');

  const data = await resp.json();

  console.log(data);
};
fecthData();

