Template.timer.rendered = function () {
	// var disp, format, load, r, remote, ss, t;
	//
	// ss = function() {
	//   var row, td;
	//   t[t[2]] = (new Date()).valueOf();
	//   t[2] = 1 - t[2];
	//   if (0 === t[2]) {
	//     clearInterval(t[4]);
	//     t[3] += t[1] - t[0];
	//     row = document.createElement("tr");
	//     td = document.createElement("td");
	//     td.innerHTML = t[7]++;
	//     row.appendChild(td);
	//     td = document.createElement("td");
	//     td.innerHTML = format(t[1] - t[0]);
	//     row.appendChild(td);
	//     td = document.createElement("td");
	//     td.innerHTML = format(t[3]);
	//     row.appendChild(td);
	//     document.getElementById("lap").appendChild(row);
	//     t[4] = t[1] = t[0] = 0;
	//     disp();
	//   } else {
	//     t[4] = setInterval(disp, 43);
	//   }
	// };
	//
	// r = function() {
	//   if (t[2]) {
	//     ss();
	//   }
	//   t[4] = t[3] = t[2] = t[1] = t[0] = 0;
	//   disp();
	//   document.getElementById("lap").innerHTML = "";
	//   t[7] = 1;
	// };
	//
	// disp = function() {
	//   if (t[2]) {
	//     t[1] = (new Date()).valueOf();
	//   }
	//   t[6].value = format(t[3] + t[1] - t[0]);
	// };
	//
	// format = function(ms) {
	//   var d, x;
	//   d = new Date(ms + t[5]).toString().replace(/.*([0-9][0-9]:[0-9][0-9]:[0-9][0-9]).*/, "$1");
	//   x = String(ms % 1000);
	//   while (x.length < 3) {
	//     x = "0" + x;
	//   }
	//   d += "." + x;
	//   return d;
	// };
	//
	// load = function() {
	//   t[5] = new Date(1970, 1, 1, 0, 0, 0, 0).valueOf();
	//   t[6] = document.getElementById("disp");
	//   disp();
	//   if (!window.opener && window === window.top) {
	//     document.getElementById("remote").style.visibility = "visible";
	//   }
	// };
	//
	// remote = function() {
	//   window.open(document.location, "_blank", "width=700,height=350");
	//   return false;
	// };
	//
	// t = [0, 0, 0, 0, 0, 0, 0, 1];

};
