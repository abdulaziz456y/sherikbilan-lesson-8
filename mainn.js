const inp = document.getElementById('input');
const psw = document.getElementById('psw');
 

const userinp = document.getElementById('userinp')
const userpsw = document.getElementById('userpsw')

const btn = document.getElementById('user-btn');
const userCheck = document.getElementById('nic')



let id = new Date().getMilliseconds().toString();

function add() {
   addToLocalStorage(id, inp.value, psw.value)
}





function getLocalStorage() {
    if (localStorage.getItem('name')) {
       return JSON.parse(localStorage.getItem('name'))
    } else {
        return []
    }
}






function addToLocalStorage(id, value, psw) {
    const data = { id,value,psw };
    const items = getLocalStorage();
    items.push(data);
    localStorage.setItem('name', JSON.stringify(items));
    location.href = './index.html'
}

// let users = getLocalStorage();

// function checkUser(userinp, psw) {
//     for (let i = 0; i < users.length; i++){
//         if (users[i].value === userinp  && users[i].psw === psw ) {
//         location.href = './index.html'
//         } else {
//             console.log('xato');
//         }
//     }
// }