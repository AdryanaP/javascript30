const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string", "idiot")

// Styled
console.log("%c I am some great text", "font-size:50px;background-color:red")

// warning!
console.warn("OH NO")

// Error :|
console.error("PUTS")

// Info
console.info("cansada sabe")

// Testing
console.assert( 1 === 2, "errado")

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('p')
console.log(p)
console.dir(p)

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`)
  console.log(`This is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`)
  console.groupEnd(`${dog.name}`)
})

// counting
console.count("wes");
console.count("wes");
console.count("wes");
console.count("wes");

// timing
console.time('fetching data');
fetch("https://api.github.com/users/wesbos")
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data')
    console.log(data)
  })

console.table(dogs)