const contactForm = document.getElementById("form");


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

// fectchData();

// async

const fetchData = async () => {
  const resp = await fetch('https://api.github.com');

  const data = await resp.json();

  console.log(data);
};
fecthData();

