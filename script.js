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
const lbOutputOri = document.getElementById("lbOutput");
const parent = document.getElementById("outputContainer");

window.onload = function () {
	showLeaderboard(list);
}

function showLeaderboard(data) {
	data.sort((a, b) => b.nilai - a.nilai);
	
	let result;
	let result1 = " ";
	let i1 = 0;
	for (let i = 0; i < data.length; i++) {
		i1++;
		
		if (i < 3) {
			result = `${i1}.  |  ${data[i].nama}  |  ${data[i].nilai}`;
			
			const lbOutputClone = lbOutputOri.cloneNode(false);
			parent.appendChild(lbOutputClone)
			
			lbOutputClone.innerHTML = result;
			
			if (i1 == 1) {
				lbOutputClone.style.backgroundColor = "#ffc055";
			}
			if (i1 == 2) {
				lbOutputClone.style.backgroundColor = "#cacaca";
			}
			if (i1 == 3) {
				lbOutputClone.style.backgroundColor = "#794f05";
			}
		}
	}
}