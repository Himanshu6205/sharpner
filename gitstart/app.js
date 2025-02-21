// console.log("himanshu patel strudent an sharpner")

// const header1 = document.getElementById("main-heading")
//     header1.textContent("Fruit World")
//     header1.style.color = "orange"

// const header2 = document.getElementById("header")
//          header2.style.borderBottom = "green"


//          const header3 = document.getElementById("basket-heading")
//            header3.style.color = "green"

//            thanks
//            const header4 = document.getElementById("thanks")
//            header4.innerHTML = "<p>Please visit us again</p>"


//            const header = document.getElementsByClassName("fruits")
//            header.style.font = "bold"

//            fruit[2].style.backgroundColor = "yellow"

//          const heading = document.querySelector("#basket-heading")
//            heading.style.color = ("brown")


//            const heading1 = document.querySelector(".fruit")
//            for(let i = 0 ; i < heading1.length ; i++){
//               heading1[2,4].style.color = ("white")

//           }

 
            const subhead = document.createElement("h3")
            const  text = document.createTextNode("Buy high quality organic fruits online")
            subhead.appendChild(text)


            const divs = document.getElementsByTagName("div")
            const onediv = divs[0];
  
                  onediv.appendChild(subhead)
                  subhead.style.fontStyle = ("italic")

                  

                  const subhead1 = document.createElement("P")
                  const  text1 = document.createTextNode("Total fruits: 4")
                  subhead1.appendChild(text1)
      
      
                  const divs1 = document.getElementsByTagName("div")
                  const onediv1 = divs[1];

                   const fru = document.querySelector(".fruits")
                   onediv1.insertBefore(subhead1, fru)
                   subhead1.style.fontStyle = ("italic")
                   subhead1.id = ("#fruits-total")
                   






                //   . Inside the second Div, before the unordered list add a paragraph tag showing .

                //   3. On this paragraph tag set an id of "fruits-total".

        //    Inside the first Div, after the main heading add a sub-heading (h3 tag) "Buy high quality organic fruits online".
        //   2. Make the sub-heading text italic.