//modules.js
import aCourse from "./Course.mjs";
aCourse.init(); //use init(); this is more security

//danger: this option could be danger, 
// somebady could do bad use the information:
/*import aCourse, { renderSections, setCourseInfo } from "./Course.mjs";

setCourseInfo(aCourse);
renderSections(aCourse.sections);*/


  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum);
  });
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, false);
  });
