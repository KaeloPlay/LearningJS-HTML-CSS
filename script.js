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
{ nama: "Orang", nilai: 68 },
];

window.onload = () => {
	document.querySelector(".elements").style.opacity = 1;
	showLeaderboard(list)
}

const lbOutputOri = document.querySelector("#lbOutput");
const parent = document.querySelector("#outputContainer");

function showLeaderboard(data) {
	data.sort((a, b) => b.nilai - a.nilai);
	
	let result;
	for (let i = 0; i < data.length; i++) {
		const rank = i + 1;
		const lbOutputClone = lbOutputOri.cloneNode(false);
		
		lbOutputClone.removeAttribute("id");
		
		result = i < 3 ? `${rank}.  |  ${data[i].nama}  |  ${data[i].nilai}` : `<small>${rank}.  |  ${data[i].nama}  |  ${data[i].nilai}</small>`;
			
		lbOutputClone.innerHTML = result;
		lbOutputClone.classList.add(i < 3 ? "rank" + rank : "other-rank");
		
		parent.appendChild(lbOutputClone);
		
	}
	const allChild = document.querySelectorAll(".rank1, .rank2, .rank3, .other-rank");
	allChild.forEach((rankEl, i) => {
		setTimeout(() => {
			rankEl.classList.add("show");
			}, i * 150);
		});
}