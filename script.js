const list = [
{ nama: "Kaelo Suwadana Muntaha", nilai: 90 },
{ nama: "Firly Batrisya", nilai: 89 },
{ nama: "Namira Kheiran Suprapto", nilai: 88 },
{ nama: "Orang", nilai: 87 },
{ nama: "Gavyn Arabi Ariansyah", nilai: 86 },
{ nama: "Orang", nilai: 75 },
{ nama: "Orang", nilai: 84 },
{ nama: "Orang", nilai: 82 },
{ nama: "Orang", nilai: 70 },
];

const lbOutputOri = document.querySelector("#lbOutput");
const parent = document.querySelector("#outputContainer");

showLeaderboard(list)

function showLeaderboard(data) {
	data.sort((a, b) => b.nilai - a.nilai);
	
	let result;
	let i1 = 0;
	for (let i = 0; i < data.length; i++) {
		const rank = i + 1;
		const lbOutputClone = lbOutputOri.cloneNode(false);
		parent.appendChild(lbOutputClone);
		lbOutputClone.removeAttribute("id");
		
		if (i < 3) {
			result = `${rank}.  |  ${data[i].nama}  |  ${data[i].nilai}`;
			
			lbOutputClone.innerHTML = result;
			lbOutputClone.classList.add("rank" + rank);
			
		} else {
			result = `<small>${rank}.  |  ${data[i].nama}  |  ${data[i].nilai}</small>`;
			
			lbOutputClone.innerHTML = result;
			lbOutputClone.classList.add("other-rank");
		};
	};
};

window.onload = () => {
	document.querySelector(".elements").style.opacity = 1;
}