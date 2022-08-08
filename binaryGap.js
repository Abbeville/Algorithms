function solution(N) {
  
    let binary = (N >> 0).toString(2);

    if(!/0/.test(binary)) {
        return 0
    }
    let zeroCounter = 0;
    let max = 0;
    let openingOne = false;

    for(let i = 0; i < binary.length; i++) {
        if(binary[binary.length - 1] == 0 && i == binary.length - 1){
            break;
        }
        if(!openingOne && binary[i] == 0){
            continue;
        }else if(binary[i] == 1){
            openingOne = true;
            max = max >= zeroCounter ? max : zeroCounter;
            zeroCounter = 0;
        }else[
            zeroCounter++
        ]
    }

    return max;
}
