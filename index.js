const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
  return drivers;
}

function destructivelyPrependDriver() {
  drivers.unshift("Bob");
  return drivers;
}