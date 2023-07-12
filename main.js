var VisitorAPI = function (t, e, a) {
  var s = new XMLHttpRequest();
  (s.onreadystatechange = function () {
    var t;
    s.readyState === XMLHttpRequest.DONE &&
      (200 === (t = JSON.parse(s.responseText)).status
        ? e(t.data)
        : a(t.status, t.result));
  }),
    s.open("GET", "https://api.visitorapi.com/api/?pid=" + t),
    s.send(null);
};

VisitorAPI(
  "vE7APIMDpG7WFGHqd0rh",
  function (data) {
    let country = data.countryCode;
    let city = data.city;
    axios
      .get("https://api.aladhan.com/v1/timingsByCity", {
        params: {
          country: country,
          city: city,
        },
      })

      .then(function (response) {
        const timings = response.data.data.timings;
        console.log(response);
        filltime("Fajr", timings.Fajr);
        filltime("Sunrise", timings.Sunrise);
        filltime("Dhuhr", timings.Dhuhr);
        filltime("Asr", timings.Asr);
        filltime("Maghrib", timings.Maghrib);
        filltime("Isha", timings.Isha);
        const readable = response.data.data.date.gregorian.date;
        const day = response.data.data.date.hijri.weekday.ar;
        const date = day + " " + readable;
        document.getElementById("date").innerHTML = date;
      });
    function filltime(id, time) {
      document.getElementById(id).innerHTML = time;
    }
  },
  function (errorCode, errorMessage) {
    console.log(errorCode, errorMessage);
  }
);
var menubtn = document.getElementById("menubtn");
var sidenav = document.getElementById("sidenav");

sidenav.style.left = "-250px";
sidenav.style.top = "0px";
menubtn.onclick = function () {
  if (sidenav.style.left == "-250px") {
    sidenav.style.left = "0";
  } else {
    sidenav.style.left = "-250px";
  }
};
