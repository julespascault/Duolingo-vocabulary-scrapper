var original = [];
var translation = [];
var count = document.querySelectorAll("._2of4F").length
var c = "_1Mm4p"

function sleep(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

while (((count-1)%50) ==0) {
    console.log(count)
    var count = document.querySelectorAll("._2of4F").length
    if((count-1)%50 == 0) {
        document.querySelector("._3f-XU").click()
    }
    await sleep(200)
    
}

document.querySelectorAll("." + c).forEach((element) => {
    div = element.querySelector("div")
    original.push(div.querySelector("h3").innerHTML)
    translation.push(div.querySelector("p").innerHTML)

})
// export to csv 
function csv(original, translation){
    let csvContent = "data:text/csv;charset=utf-16,";
    original.forEach((element, i) => {
        csvContent += element + ";" + translation[i] + "\n"
    })
    
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
}

csv(original, translation)