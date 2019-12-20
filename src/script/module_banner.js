let banner = (function() {
    const oBox = document.querySelector('.box');
    const moveUl = document.querySelector('.box ul');
    let picLi = document.querySelectorAll('.box ul li');
    const btnLi = document.querySelectorAll('.box ol li');
    let index = 0;
    let flag = true;
    let timer = null;
    let firstLi = picLi[0].cloneNode(true);
    let lastLi = picLi[picLi.length - 1].cloneNode(true);


    moveUl.appendChild(firstLi);
    moveUl.insertBefore(lastLi, moveUl.children[0]);
    picLi = document.querySelectorAll('.box ul li');
    let liwidth = picLi[0].offsetWidth;
    moveUl.style.width = picLi.length * liwidth + 'px';
    moveUl.style.left = -liwidth + 'px';


    for (let i = 0; i < btnLi.length; i++) {
        btnLi[i].onmouseover = function() {
            index = i;
            tabswitch();
            btnLi[index].className = 'active';
        }
    }

    function tabswitch() {
        for (let j = 0; j < btnLi.length; j++) {
            btnLi[j].className = '';
        }
        bufferMove(moveUl, {
            left: -liwidth * (index + 1)
        }, function() {
            if (index > btnLi.length - 1) {
                moveUl.style.left = -liwidth + 'px';
                index = 0;
            }
            if (index < 0) {
                moveUl.style.left = -liwidth * btnLi.length + 'px';
                index = btnLi.length - 1;
            }
            flag = true;
        });
    }
    timer = setInterval(function() {
        index++
        tabswitch()
        if (index > btnLi.length - 1) {
            btnLi[0].className = 'active';
        } else {
            btnLi[index].className = 'active';
        }
    }, 5000)
    oBox.onmouseover = function() {
        clearInterval(timer)
    }
    oBox.onmouseout = function() {
        timer = setInterval(function() {
            index++
            tabswitch()
            if (index > btnLi.length - 1) {
                btnLi[0].className = 'active';
            } else {
                btnLi[index].className = 'active';
            }
        }, 5000)
    }
})()
export { banner }