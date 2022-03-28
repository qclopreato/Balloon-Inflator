let balloon = [0];
let map1 = balloon;
document.getElementById(`balloon`).src = `pix/deflated.png`;
document.getElementById(`balloon`).alt = `Deflated balloon`;
document.getElementById(`balloon`).style.width = `10%`;
document.getElementById(`balloon`).style.height = `20%`,

document.getElementById(`pump`).addEventListener(`click`, function(){
    const checkOne = map1 == 0 ? (document.getElementById(`balloon`).src = `pix/inflated_one.png`, document.getElementById(`balloon`).alt = `Slightly inflated balloon`, document.getElementById(`balloon`).style.width = `20%`, document.getElementById(`balloon`).style.height = `40%`, map1 = balloon.map(x => x + 1)) : map1 == 1 ? (document.getElementById(`balloon`).src = `pix/inflated_two.png`, document.getElementById(`balloon`).alt = `Moderately inflated balloon`,  document.getElementById(`balloon`).style.width = `30%`, document.getElementById(`balloon`).style.height = `60%`, map1 = balloon.map(x => x + 2)) : map1 == 2 ? (document.getElementById(`balloon`).src = `pix/inflated_three.png`, document.getElementById(`balloon`).alt = `Fully inflated balloon`, document.getElementById(`balloon`).style.width = `35%`, document.getElementById(`balloon`).style.height = `70%`, map1 = balloon.map(x => x + 3)) : alert(`Balloon is full`);
    console.log(map1);
});

document.getElementById(`pin`).addEventListener(`click`, function(){
    document.getElementById(`balloon`).src = `pix/deflated.png`; document.getElementById(`balloon`).alt = `Deflated balloon`;
    document.getElementById(`balloon`).style.width = `10%`;
    document.getElementById(`balloon`).style.height = `20%`,
    map1 = balloon.map(x => x = 0);
    console.log(map1);
});