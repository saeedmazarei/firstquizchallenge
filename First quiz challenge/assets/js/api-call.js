// show landing
const getData = async() => {
    try {
        loading.classList.remove('display');
        page.classList.add('display');
        const response = await fetch(landingUrl);
         if(response.ok) {
            const jsResponse = await response.json();
            if(jsResponse.data.registered){
                loading.classList.remove('display');
                page.classList.add('display');
                let missions = jsResponse.data.missions;
                let score = missions.score;
                score = (score * 100) / 60;
                changeProgress.style.width = score + "%";
                missions.forEach((mission, index) => {
                    if(mission.reward_status == 'Unlocked') {
                        document.querySelectorAll(`.box-${index+1} img`)[1].style.display = "block";
                        document.querySelectorAll(`.box-${index+1} img`)[1].addEventListener('click', ()=> {
                            claim(index);
                        });
                    }
                    else if(mission.reward_status == 'Claimed') {
                        document.querySelectorAll(`.box-${index+1} img`)[2].style.display = "block";
                    }
                    else document.querySelectorAll(`.box-${index+1} img`)[0].style.display = "block";
                });
            }
            }
         else throw new Error('request failed');
        }
        catch(err) {
            console.log(err)
            loading.classList.remove('display');
            page.classList.add('display');
        }
}

// claimig
const claim = async (elementId) => {
    try {
        document.querySelectorAll(`.box-${elementId+1} img`)[1].style.display = "none";
        document.querySelectorAll(`.box-${elementId+1} img`)[2].style.display = "block";
        let formdata = new FormData();
        formdata.append("mission_id", `m${elementId+1}`);
        formdata.append("hash_id", "nj0pg9");
        formdata.append("challenge", "MedalOfHonor");
        let requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };
        const response = await fetch('https://quizofkings.com/challenge-api/v1/challenge/claim', requestOptions);
        if(response.ok) {
            const jsResponse = await response.json();
        }
        else throw new Error('request failed');
    }
    catch(error) {
        console.log(error)
    }
}