const getResult = () => {
    question1();
    let pTag = document.createElement("P");
    pTag.classList.add("question")
    let textNode = document.createTextNode("Solution 2");
    pTag.appendChild(textNode);
    main.appendChild(pTag);
    question2();
}

const question1 = () => {
    const conversation = document.getElementById("conversation").innerHTML;
    let sentences = conversation.split(/(?=[.?!])|(?<=[.?!])/);
    const main = document.getElementById("main");
    let i = 1;
    sentences.forEach((sentence, index) => {
        if(sentence.trim().split(/[,\s]/).length>3){
            let pTag = document.createElement("P");
            sentence = maskPersonalData(sentence);
            let textNode = document.createTextNode(`${i}. ${sentence}${sentences[index+1]}`);
            pTag.appendChild(textNode);
            main.appendChild(pTag);
            i++;
        }
    });
}

const maskPersonalData = (sentence) => {
    return sentence.replace(/[0123456789]/g,'X');
}


// Question 2

const question2 = () => {
    const qTeams = {
        aaiec: 400, 
        aaiwc: 60, 
        qai: 200, 
        poc: 100,
        gtm: 50,
        hr: 10
    };
    let arr = [];
    for (let team in qTeams) {
        arr.push([team, qTeams[team]]);
    }
    arr.sort((a,b) => b[1]-a[1]);
    arr.forEach(ele => {
        let pTag = document.createElement("P");
        let textNode = document.createTextNode(`${ele[0]}: ${ele[1]}`);
        pTag.appendChild(textNode);
        main.appendChild(pTag);
    });
}