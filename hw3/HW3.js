function max(iterable, key) {
  var maximum = 0;
  for (var i in iterable) {
    var size = key(i);
    if (size >= maximum) {
      maximum = iterable[i];
    }
  }
  return maximum;
}


const reverser = (x) => -x;


function changer(object, key, value) {
  var prev = object[key];
  if (Array.isArray(prev)) {
    prev.push(value);
  } else if (typeof prev == 'object' && prev != null) {
    prev[key] = value;
  } else {
    object[key] = value;
  }
  return null;
}

async function promise_me(truthy) {
  const a = new Promise((resolve, reject) => {
    console.log(1);
    resolve(5);
  });
  console.log(2);
  console.log(3);
  console.log(4);
  const five = await a;
  console.log(five);
  return five;
}