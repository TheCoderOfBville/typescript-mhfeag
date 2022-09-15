
function canFill(onHand:number, pending:number, requested:number):boolean {
  try {
    if(requested<1) {
      throw new Error("Requested cannot be less than 1");
    }
    if(onHand<0 || pending<0) {
      throw new Error("Values cannot be negative");
    }
    const able = onHand - pending -requested >= 0;
    console.log("Can fill: " + able);
  } catch(error) {
    console.log(error.message);
    return false;
  } 
}

function test():void {
  canFill(10, 5, 5);
  canFill(10, 11, 1);
  canFill(-1, 1, 0);
  canFill(-1, 1, -1);
}

test();