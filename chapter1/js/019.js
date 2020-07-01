/*
for(let index = 0; index < 100; index++){
  if(index % 4 === 0){
    continue;
  }
  console.log(index);
}
console.log('loop end');
*/

/*
function myFunction(flgA){
  for(let index = 0; index < 10; index++){
    if(flgA === true){
      if(index % 2 !== 0){
        console.log(index);
      }
    }
  }
}
myFunction(true);
*/

function myFunction(flgA){
  for(let index = 0; index < 10; index++){
    if(flgA === false){
      continue;
    }

    if(index % 2 === 0){
      continue;
    }

    console.log(index);
  }
}
myFunction(true);
