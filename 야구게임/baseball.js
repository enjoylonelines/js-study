        const container = document.querySelector('.cont');
        const inputEl = document.querySelector('.input');
        const btnEl = document.querySelector('.button');
        
        const ansArr = [];
        let  cmpArr = [];
        const tries = [];
        let ball = 0;
        let strike = 0;
        let out = 0;
        for(let i = 0; i < 4; i++){
            let randomNum = Math.floor(Math.random()*9)+1;
            if(ansArr.indexOf(randomNum) === -1){ //중복없이 뽑기
                ansArr.push(randomNum);
            }
            else i--;
            
        }

        console.log(ansArr);

        function cmpNum(){
            ansArr.forEach((item, idx)=>{
                cmpArr.forEach((cmpItem, cmpIdx)=>{
                    if(item == cmpItem){
                        ball++;
                        if(idx == cmpIdx) strike++;
                    } 
                })
            })
            
            container.innerHTML = '';
            const logDiv = document.createElement('div');
            logDiv.innerText = `${ball} ball`
            logDiv.innerText += `${strike} strike`
            if(strike == 4 && ball == 4) logDiv.innerHTML += '<br> Home Run !!';
            container.append(logDiv);
        }
        
        function checkInput(input){
            if(input.length !== 4) return alert('4글자를 입력해라'); //너네 false야? undefined는 false다 ;;
            else if(new Set(input).size != 4) return alert('중복없게 해라');
            else if(tries.includes(input)) return alert('이미 시도한 값이다'); //연속된 문자열 포함 여부를 확인하려면 문자열자체로 저장해야함~ 
            else true;
        }
        function isOut(input){
            if(ball == 0 && strike == 0) out++;
            if(out < 3) container.append(document.createElement('div').innerHTML = `${out} out !`)
            else if(out == 3) container.append(document.createElement('div').innerHTML = `삼진 아웃 ! 정답은 ${ansArr.join('')}`)
        }

        btnEl.addEventListener('click', function(e){
            //초기화
            ball = 0;
            strike = 0;
            const input = inputEl.value;
            inputEl.value = '';
            cmpArr = [...input];
            if(checkInput(input)){
                console.log(ok)
            tries.push(input);
            cmpNum();
            isOut(input);
            }
        }, true)