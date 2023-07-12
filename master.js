let myRequest = new XMLHttpRequest();
        myRequest.open("GET", "./data/quran.json");
        myRequest.send();
        myRequest.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let jsData = JSON.parse(this.responseText);
                let surahs = jsData;
                let numberOfsurahs = 114;

                for (let i = 0; i < numberOfsurahs; i++) {
                    boxs.innerHTML += `<div class="box">
        <h4>${surahs[i].name}</h4>
        <h4>${surahs[i].transliteration}</h4>
      </div>`;
                }
                  let surahstitle = document.querySelectorAll(".box");
            let surahpop = document.getElementsByClassName("surah-pop")[0];
            let content = document.getElementsByClassName("container");
            let close = document.getElementsByClassName("closepup");
            surahstitle.forEach((title, index) => {
                title.addEventListener('click', () => {
                    fetch(`http://api.alquran.cloud/v1/surah/${index + 1}`)
                        .then(response => response.json())
                        .then(data => {
                            surahpop.innerHTML = "";
                            let ayat = jsData[index].verses;
                            console.log(ayat)
                             content.innerHTML = ""; 
                                let kind = ""
                                if (data.data.revelationType == "Meccan"){
                                    kind = "مكية"
                                }else {
                                    kind = "مدنية"
                                }
                                  surahpop.innerHTML += `
                                  <div class="close">
                <i class="uil uil-times-square closepup"></i>
            </div>
                                  <h1 class="title">${data.data.name}</h1>
                                
                <div class="info">
                    <div class="info-box">
                        <h3>${data.data.numberOfAyahs}</h3>
                        <span>عدد الأيات</span>
                    </div>
                    <div class="info-box">
                        <h3>${kind}</h3>
                        <span>نوع السورة</span>
                    </div>
                    <div class="info-box">
                        <h3>${data.data.englishName}</h3>
                        <span>الاسم بالإنجليزية</span>
                    </div>
                </div>
                <div class="content"></div>
               `;
               ayat.forEach((ayah) => {
                 surahpop.innerHTML += ` 
                 
                 <span>${ayah.text}</span>
                 <span class="id">﴿${ayah.id}﴾</span>
               `;
               });
               console.log(content)
            });
                            surahpop.classList.add('active'); 
                        });
                        });
            }
        };



































// // let myRequest = new XMLHttpRequest();
// // // فتح الاتصال بملف quran.json
// // myRequest.open("GET", "./data/quran.json");
// // // إرسال الطلب
// // myRequest.send();
// // // عند تغيير حالة الاستجابة
// // myRequest.onreadystatechange = function () {
// //   if (this.readyState === 4 && this.status === 200) {
// //     let jsData = JSON.parse(this.responseText);
// //     let surahs = jsData;
// //     let numberOfsurahs = 114;

// //     for (let i = 0; i < numberOfsurahs; i++) {
// //       boxs.innerHTML += `<div class="box" onclick='open()'>
// //         <h4>${surahs[i].name}</h4>
// //         <h4>${surahs[i].transliteration}</h4>
// //       </div>`;
// //     }
// //     let surahsbox = document.querySelectorAll('.box')
// //     let surahpop = document.getElementsByClassName("surah-pop");
// //     let content = document.getElementsByClassName('content');
// //     surahsbox.forEach((title , index) =>{
// //         title.addEventListener('click', function(){
// //         })
// //     })
// //   }
// // };


