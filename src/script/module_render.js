const pic = document.querySelector('.brand-list')

function render() {
    let ajax = new XMLHttpRequest();
    ajax.open('get', 'http://localhost/tainmao/php/tianmaonavimg.php', true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            if (ajax.status === 200) {
                let picarr = JSON.parse(ajax.responseText);
                console.log(picarr);
                let htmlstr = '<ul>';
                for (let value of picarr) {
                    htmlstr += `
                   <li>
                   <a href="${value.urls}">
                   <img src="${value.url}" alt="">
                   </a>
                   </li>
                            `;
                }
                htmlstr += '</ul>';
                pic.innerHTML = htmlstr;
            } else {
                throw new Error('接口地址有误');
            }
        }
    }
}
render();

export { render }