const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver() {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const newEndDriver = [...drivers, "Broom"];
  return newEndDriver;
}

function prependDriver(name) {
  const newStartDriver = ["Arnold", ...drivers];
  return newStartDriver;
}

function removeLastDriver() {
  const sorryLastDriver = drivers.slice(0, drivers.length - 1)
  return sorryLastDriver;
}

function removeFirstDriver() {
  const sorryStartDriver = drivers.slice(1);
  return sorryStartDriver;
}
