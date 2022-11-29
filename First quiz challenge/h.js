document.getElementById("table-button").onclick = makeTable();

function makeTable() {
    const matchContainer = document.getElementById("match-container");
    let opponentName = ['saeed', 'reza.optic', 'it3reza', 'farid4510', 'zahra56', 'maryam70', 'narges48'];
    let matchResult = ['13/14 بردی', 'باختی', 'مساوی', 'بازی بدون اشتباه', 'مساوی', '15/10 باختی', 'مساوی'];
    let medalGet = [2, 4, 5, 1, 3, 5, 2];
    let matchNumber = 7;

    for(let i = 1; i<=matchNumber; i++){
        let matchItem = document.createElement("div");
        matchItem.setAttribute('class', 'match-item');
        matchContainer.appendChild(matchItem);
        let star = document.createElement("div");
        star.setAttribute('class', 'star');
        matchItem.appendChild(star);
        let divResult = document.createElement("div");
        divResult.setAttribute('class', 'result');
        matchItem.appendChild(divResult);
        let span1 = document.createElement("span");
        
        let span2 = document.createElement("span");
        span1.innerHTML = matchResult[i-1];
        let vs = document.createElement("div");
        vs.setAttribute('class', 'vs');
        matchItem.appendChild(vs);
        span2.innerHTML = opponentName[i-1];
        divResult.appendChild(span1);
        vs.appendChild(span2);


        let starPic1 = document.createElement("div");
        starPic1.setAttribute('class', 'star-pic');
        star.appendChild(starPic1);

        let starPic2 = document.createElement("div");
        starPic2.setAttribute('class', 'star-pic');
        star.appendChild(starPic2);

        let starPic3 = document.createElement("div");
        starPic3.setAttribute('class', 'star-pic');
        star.appendChild(starPic3);

        let starPic4 = document.createElement("div");
        starPic4.setAttribute('class', 'star-pic');
        star.appendChild(starPic4);

        let starPic5 = document.createElement("div");
        starPic5.setAttribute('class', 'star-pic');
        star.appendChild(starPic5);
        
            if(medalGet[i-1]<6 && medalGet[i-1]>0){
                starPic1.setAttribute("class", "golden-medals");
            }
            if(medalGet[i-1]<6 && medalGet[i-1]>1){
                starPic2.setAttribute("class", "golden-medals");
            }
            if(medalGet[i-1]<6 && medalGet[i-1]>2){
                starPic3.setAttribute("class", "golden-medals");
            }
            if(medalGet[i-1]<6 && medalGet[i-1]>3){
                starPic4.setAttribute("class", "golden-medals");
            }
            if(medalGet[i-1]<6 && medalGet[i-1]>4){
                starPic5.setAttribute("class", "golden-medals");
            }

    }

}
