// register check

const changeProgress = document.getElementById("pr-bars");
const firstTik = document.getElementById("first-tik");
const secondTik = document.getElementById("second-tik");
const thirdTik = document.getElementById("third-tik");
const loading = document.getElementById("loading");
const page = document.getElementById('holepage');


// show loading
page.classList.remove('display');
                setTimeout(() => {
                    page.classList.add('display');
                }, 2000);
                loading.classList.add('display');
                setTimeout(() =>{
                    loading.classList.remove('display');
                }, 2000);


// request to api for showing progress bar
let landingUrl = 'https://quizofkings.com/challenge-api/v1/challenge/landing'
let playerId = '?player_id=nj0pg9';
const urlParams = new URLSearchParams(playerId);
const url = urlParams.get('player_id');
landingUrl += `?hash_id=${url}&challenge=MedalOfHonor`;
const getData = async() => {
    try {
        const response = await fetch(landingUrl);
         if(response.ok) {
            const jsResponse = await response.json();
            if(jsResponse.data.registered){
                let missions = jsResponse.data.missions;
                let score = 25;
                missions[0].reward_status = "Unlocked";
                missions[1].reward_status = "Unlocked";
                missions[2].reward_status = "Unlocked";
                score = (score * 100) / 60;
                
                changeProgress.style.width = score + "%";
                
                
            
                if(score<25) {
                    firstTik.classList.add("blue-logo");
                    secondTik.classList.add("blue-logo");
                    thirdTik.classList.add("blue-logo");
                    secondTik.style.backgroundImage = "url('./images/blue\ 1-min.png')";
                    secondTik.style.backgroundImage = "url('./images/blue\ 2-min.png')";
                    thirdTik.style.backgroundImage = "url('./images/blue\ 3-min.png')";
                }
            
                if(score===25 && missions[0].reward_status=="Unlocked"){
                    firstTik.classList.add("blue-logo");
                    secondTik.classList.add("blue-logo");
                    thirdTik.classList.add("blue-logo");
                    firstTik.style.backgroundImage = "url('./images/gold\ 1-min.png')"
                    secondTik.style.backgroundImage = "url('./images/blue\ 2-min.png')";
                    thirdTik.style.backgroundImage = "url('./images/blue\ 3-min.png')";
                    firstTik.style.zIndex = "2";
                    firstTik.addEventListener('click', claim(this.id));
                }
                
                if(score===25 && missions[0].reward_status=="Claimed"){
                    secondTik.style.backgroundImage = "url('./images/blue\ 2-min.png')";
                    thirdTik.style.backgroundImage = "url('./images/blue\ 3-min.png')";
                    firstTik.classList.add("green-logo");
                    secondTik.classList.add("blue-logo");
                    thirdTik.classList.add("blue-logo");
                    firstTik.style.marginLeft = "19.5%";
                    secondTik.style.marginLeft = "-2.5%";
                    thirdTik.style.marginLeft = "10%";
                }

                if(score>25 && score<50 && missions[0].reward_status=="Unlocked"){
                    firstTik.classList.add("blue-logo");
                    secondTik.classList.add("blue-logo");
                    thirdTik.classList.add("blue-logo");
                    firstTik.style.backgroundImage = "url('./images/gold\ 1-min.png')"
                    secondTik.style.backgroundImage = "url('./images/blue\ 2-min.png')";
                    thirdTik.style.backgroundImage = "url('./images/blue\ 3-min.png')";
                    firstTik.style.zIndex = "2";
                    firstTik.addEventListener('click', claim(this.id));
                }

                if(score>25 && score<50 && missions[0].reward_status=="Claimed"){
                    secondTik.style.backgroundImage = "url('./images/blue\ 2-min.png')";
                    thirdTik.style.backgroundImage = "url('./images/blue\ 3-min.png')";
                    firstTik.classList.add("green-logo");
                    secondTik.classList.add("blue-logo");
                    thirdTik.classList.add("blue-logo");
                    firstTik.style.marginLeft = "19.5%";
                    secondTik.style.marginLeft = "-2.5%";
                    thirdTik.style.marginLeft = "10%";
                }
            
                if(score==50 && missions[0].reward_status=="Claimed" && missions[1].reward_status=="Unlocked"){
                    firstTik.classList.add("green-logo");
                    secondTik.classList.add("blue-logo");
                    thirdTik.classList.add("blue-logo");
                    secondTik.style.backgroundImage = "url('./images/gold\ 2-min.png')";
                    thirdTik.style.backgroundImage = "url('./images/blue\ 3-min.png')";
                    secondTik.addEventListener('click', claim(this.id));
                    secondTik.style.zIndex = "2";
                    firstTik.style.marginLeft = "19.5%";
                    secondTik.style.marginLeft = "-2.5%";
                    thirdTik.style.marginLeft = "10%";
                }
            
                if(score==50 && missions[0].reward_status=="Unlocked" && missions[1].reward_status=="Unlocked"){
                    firstTik.classList.add("blue-logo");
                    secondTik.classList.add("blue-logo");
                    thirdTik.classList.add("blue-logo");
                    firstTik.style.backgroundImage = "url('./images/gold\ 1-min.png')";
                    secondTik.style.backgroundImage = "url('./images/gold\ 2-min.png')";
                    thirdTik.style.backgroundImage = "url('./images/blue\ 3-min.png')";
                    firstTik.addEventListener('click', claim(this.id));
                    secondTik.addEventListener('click', claim(this.id));
                }

                if(score==50 && missions[0].reward_status=="Claimed" && missions[1].reward_status=="Claimed"){
                    thirdTik.style.backgroundImage = "url('./images/blue\ 3-min.png')";
                    firstTik.classList.add("green-logo");
                    secondTik.classList.add("green-logo");
                    thirdTik.classList.add("blue-logo");
                    firstTik.style.marginLeft = "19.5%";
                    secondTik.style.marginLeft = "2.5%";
                    thirdTik.style.marginLeft = "15%";
                }

                if(score>50 && score<100 && missions[0].reward_status=="Unlocked" && missions[1].reward_status=="Unlocked") {
                    firstTik.classList.add("blue-logo");
                    secondTik.classList.add("blue-logo");
                    thirdTik.classList.add("blue-logo");
                    firstTik.style.backgroundImage = "url('./images/gold\ 1-min.png')";
                    secondTik.style.backgroundImage = "url('./images/gold\ 2-min.png')";
                    thirdTik.style.backgroundImage = "url('./images/blue\ 3-min.png')";
                    firstTik.addEventListener('click', claim(this.id));
                    secondTik.addEventListener('click', claim(this.id));
                }

                if(score>50 && score<100 && missions[0].reward_status=="Claimed" && missions[1].reward_status=="Unlocked") {
                    secondTik.style.backgroundImage = "url('./images/gold\ 2-min.png')";
                    thirdTik.style.backgroundImage = "url('./images/blue\ 3-min.png')";
                    firstTik.classList.add("green-logo");
                    secondTik.classList.add("blue-logo");
                    thirdTik.classList.add("blue-logo");
                    secondTik.addEventListener('click', claim(this.id));
                    firstTik.style.marginLeft = "19.5%";
                    secondTik.style.marginLeft = "-2.5%";
                    thirdTik.style.marginLeft = "10%";
                }

                if(score>50 && score<100 && missions[0].reward_status=="Claimed" && missions[1].reward_status=="Claimed") {
                    thirdTik.style.backgroundImage = "url('./images/blue\ 3-min.png')";
                    firstTik.classList.add("green-logo");
                    secondTik.classList.add("green-logo");
                    thirdTik.classList.add("blue-logo");
                    firstTik.style.marginLeft = "19.5%";
                    secondTik.style.marginLeft = "2.5%";
                    thirdTik.style.marginLeft = "15%";
                }

                if(score >= 100 && missions[0].reward_status=="Unlocked" && missions[1].reward_status=="Unlocked" && missions[2].reward_status=="Unlocked"){
                    firstTik.classList.add("blue-logo");
                    secondTik.classList.add("blue-logo");
                    thirdTik.classList.add("blue-logo");
                    secondTik.style.backgroundImage = "url('./images/gold\ 1-min.png')";
                    secondTik.style.backgroundImage = "url('./images/gold\ 2-min.png')";
                    thirdTik.style.backgroundImage = "url('./images/gold\ 3-min.png')";
                    firstTik.addEventListener('click', claim(this.id));
                    secondTik.addEventListener('click', claim(this.id));
                    thirdTik.addEventListener('click', claim(this.id));
                }

                if(score >= 100 && missions[0].reward_status=="Claimed" && missions[1].reward_status=="Unlocked" && missions[2].reward_status=="Unlocked"){
                    secondTik.style.backgroundImage = "url('./images/gold\ 2-min.png')";
                    thirdTik.style.backgroundImage = "url('./images/blue\ 3-min.png')";
                    firstTik.classList.add("green-logo");
                    secondTik.classList.add("blue-logo");
                    thirdTik.classList.add("blue-logo");
                    secondTik.addEventListener('click', claim);
                    firstTik.style.marginLeft = "19.5%";
                    secondTik.style.marginLeft = "-2.5%";
                    thirdTik.style.marginLeft = "10%";
                }
                
                if(score >= 100 && missions[0].reward_status=="Claimed" && missions[1].reward_status=="Claimed" && missions[2].reward_status=="Unlocked"){
                    thirdTik.style.backgroundImage = "url('./images/gold\ 3-min.png')";
                    firstTik.classList.add("green-logo");
                    secondTik.classList.add("green-logo");
                    thirdTik.classList.add("blue-logo");
                    firstTik.style.marginLeft = "19.5%";
                    secondTik.style.marginLeft = "2.5%";
                    thirdTik.style.marginLeft = "15%";
                    thirdTik.addEventListener('click', claim(this.id));
                }

                if(score >= 100 && missions[0].reward_status=="Claimed" && missions[1].reward_status=="Claimed" && missions[2].reward_status=="Claimed"){
                    firstTik.classList.add("green-logo");
                    secondTik.classList.add("green-logo");
                    thirdTik.classList.add("green-logo");
                    firstTik.style.marginLeft = "19.5%";
                    secondTik.style.marginLeft = "2.5%";
                    thirdTik.style.marginLeft = "20.5%";
                }
            }
            }
         else throw new Error('request failed');
        }
        catch(err) {
            console.log(err)
        }
}
getData();



// request to api for claim reward
const claim = async (elementId) => {
    try {
        if(elementId == 'm1') {
            missionId = 'm1';
        }
        else if(elementId == 'm2') {
            missionId = 'm2';
        }
        else missionId = 'm3';

        console.log(missionId)
        const response = await fetch('https://quizofkings.com/challenge-api/v1/challenge/claim', {
        method: 'POST',
        body: {
            mission_id: `${missionId}`,
            challenge: 'MedalOfHonor',
            hash_id: `${url}`
        }})
        if(response.ok) {
            const jsResponse = await response.json();
        }
        else throw new Error('request failed');
    }
    catch(error) {
        console.log(error)
    }
}

