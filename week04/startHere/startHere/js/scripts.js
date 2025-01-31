//Grab the entire URL for this page including the attached GET values
const currentUrl = window.location.href;
console.long(currentUrl);

//Divide the url into two halves
const everything=currentUrl.split('#')
console.log(everything)

/* option 1:
//Grab just the second half
let formData = everything[1];
console.log(formData)

//Break the form value pairs into  an array
formData=formData.split('¿')
console.log(formData)
*/
// option 2: Grab just the second half 
// and Break the form value pairs into  an array
let formData = everything[1].split('¿')
console.log(formData)

function show(){
    console.log(cup)
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result=element.split('K') //console.log("Found a Macth")
            result=result[1]
        }// end if
    })
    return(result)
}// end show


const showInfo = document.querySelector('#results')
showInfo.innerHTML = show("phone") //formData[0] + formData[1]

//show("phone")

//tutorial video: https://video.byui.edu/media/t/1_fo78nelv