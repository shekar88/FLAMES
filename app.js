let firstString, secondString, fStrTemp, sStrTemp, fStrLeng, sStrLeng, fStrCount, sStrCount;
let firArr, secArr,firstCount, secondCount, flames;
   

function myFlamesFun() {
    firstString = document.getElementById('fname').value;
    secondString = document.getElementById('sname').value;
    fStrCount = 0;
    sStrCount = 0;
    fStrLeng = firstString.length;
    sStrLeng = secondString.length;
    
    firArr = firstString.toLowerCase().split('');
    secArr = secondString.toLowerCase().split('');
    
    document.getElementById('fname-result').value = `${firstString}`;
    document.getElementById('sname-result').value = `${secondString}`;

    document.getElementById('fresult').innerHTML = `${fStrLeng}`;
    document.getElementById('sresult').innerHTML = `${sStrLeng}`;
    
    document.getElementById('fresarr').innerHTML = `${firArr}`;
    console.log(`${firArr}`);

    document.getElementById('sresarr').innerHTML = `${secArr}`;
    console.log(`${secArr}`);

    let alphabets = ['a','b','c','d','e','f','g','h','i','j','k', 'l', 'm','n','o','p','q','r','s',
    't','u','v','w','x','y','z'];

    let frCount = ['aFrCount', 'bFrCount', 'cFrCount', 'dFrCount', 'eFrCount', 'fFrCount', 
        'gFrCount', 'hFrCount', 'iFrCount', 'jFrCount', 'kFrCount', 'lFrCount', 'mFrCount', 
        'nFrCount', 'oFrCount', 'pFrCount', 'qFrCount', 'rFrCount', 'sFrCount', 'tFrCount', 
        'uFrCount', 'vFrCount', 'wFrCount', 'xFrCount', 'yFrCount', 'zFrCount'];

    let secCount = ['aSecCount', 'bSecCount', 'cSecCount', 'dSecCount', 'eSecCount', 'fSecCount', 
        'gSecCount', 'hSecCount', 'iSecCount', 'jSecCount', 'kSecCount', 'lSecCount', 'mSecCount', 
        'nSecCount', 'oSecCount', 'pSecCount', 'qSecCount', 'rSecCount', 'sSecCount', 'tSecCount', 
        'uSecCount', 'vSecCount', 'wSecCount', 'xSecCount', 'ySecCount', 'zSecCount'];


    for(let i = 0; i < 26; i++) {
        // count[i] = 0;
        frCount[i] = 0;
        secCount[i] = 0;
    }
    
    for(let i = 0; i < fStrLeng; i++) {
        for( let j = 0; j < 26; j++) {
            if(`${firArr[i]}` == `${alphabets[j]}`) {
                frCount[j]++;
                fStrCount++;
            }
        }
    }
    console.log(frCount);

    for(let i = 0; i < sStrLeng; i++) {
        for( let j = 0; j < 26; j++) {
            if(`${secArr[i]}` == `${alphabets[j]}`) {
                secCount[j]++;
                sStrCount++;
            }
        }
    }
    console.log(secCount);
    
    let count = ['aCount', 'bCount', 'cCount', 'dCount', 'eCount', 'fCount', 'gCount', 'hCount',
        'iCount','jCount', 'kCount', 'lCount', 'mCount', 'nCount', 'oCount', 'pCount', 'qCount',
        'rCount','sCount', 'tCount', 'uCount', 'vCount', 'wCount', 'xCount', 'yCount', 'zCount'];

    firstCount = secondCount = 0;
    for(let i = 0; i < 26; i++) {
        if(frCount[i] == secCount[i]) {
            frCount[i]=0;
            // console.log(`${frCount[i]} === ${secCount[i]}`);
            firstCount = firstCount+frCount[i];
        }
        else if(frCount[i] > secCount[i]) {
            frCount[i] = frCount[i]-secCount[i];
            // console.log(`${frCount[i]} > ${secCount[i]}`);
            firstCount = firstCount+frCount[i];
        }
        else if(frCount[i] < secCount[i]) {
            frCount[i] = secCount[i] - frCount[i];
            // console.log(`${frCount[i]} < ${secCount[i]}`);
            firstCount = firstCount+frCount[i];
        }
    }
    // console.log(`${firstCount}`);
    console.log(`my first count -> ${firstCount}`);
    document.getElementById('first-count').innerHTML = `After Cross the Letters -> ${firstCount}`;

    secondCount = firstCount % 6;
    if(secondCount == 0) {
        secondCount = 6;
    }
    document.getElementById('second-count').innerHTML = `Remaining Count - > ${secondCount}`;

    flames = '';
    if(secondCount == 1) {
        flames = 'Friends';
    }
    else if(secondCount == 2) {
        flames = 'Lovers';
    }
    else if(secondCount == 3) {
        flames = 'Angry';
    }
    else if(secondCount == 4) {
        flames = 'Marriage';
    }
    else if(secondCount == 5) {
        flames = 'Engagement';
    }
    else if(secondCount == 6 || secondCount == 0) {
        flames = 'Soulmates';
    }
    else {
        flames = 'missed';
    }
 
    document.getElementById('result-string').innerHTML = `Relation is -> ${flames}`;
}