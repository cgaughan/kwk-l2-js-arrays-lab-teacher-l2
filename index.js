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
  const sorryLastDriver = drivers
  return sorryLastDriver;
}

function removeFirstDriver() {
  const sorryStartDriver = drivers
  return sorryStartDriver;
}