/**
 * PSUEDOCODE:
 * 
 * Avg(A, B):
 * // A = List of Categories/Subcategories/Assignments
 * // B = List of Weights
 *    num = 0
 *    div = 0
 *    For i in A 
 *      num = num + A[i] * B[i]
 *      div = div + B[i]
 *    return num/div
 * //Make sure you check that weights add up to 100
 * //Make sure all weights for subcategory
 * 
 * AddToList(L, input):
 *      L.push(input);
 * 
 * AddToDict(D, Key, input):
 *      D.Key = input;
 * 
 * MakeNewCategory(Name, Value, Weight):
 *      AddToList(Categories, Name);
 *      AddToList(CatWeight, Weight);
 *      AddToList(CategoryValues, Value);
 *      //Create div with the following HTML:
 *      <table>
            <tr>
                <td>Category: <input type="text" name="Category Name" value="Category 1"></td> <!-- Add inputs after colons. Inputs somehow involve the <form> and <input> tags. -->
                <td>Category Average: <input type="text" name="Category Average" value="100"></td>
                <td>Category Weight: <input type="text" name="Category Weight" value="33"></td>
            </tr>
        <table>
 *      //Append to big div.
 *      
 * 
 * MakeNewSubCat(Name, Value, Weight, Category):
 *      AddToList(Categories.Category.SubcatValue, Value); //Not sure how to differentiate between a key called "Category" and the variable category.
 *      AddToList(Categories.Category.SubWeight, Weight);
 *      //Add the following to the table created by MNC
 *      <tr>
            <td>Subcategory: <input type="text" name="Subcategory Name" value="Subcat 1"></td> <!-- Add inputs after colons. Inputs somehow involve the <form> and <input> tags. -->
            <td>Subcategory Average: <input type="text" name="Subcategory Average" value="100"></td>
            <td>Subcategory Weight: <input type="text" name="Subcategory Weight" value="50"></td>
        </tr>
 * 
 * MakeNewAssignment(Name, Value, Weight, Category, Subcategory):
 *     AddToDict(Categories.Category.Subcategory, AssignmentValues, Value); // I don't think this will work. How do dictionaries work?
 *     AddToDict(Categories.Category.Subcategory, AssgnmentWeights, Weight);
 *      //Add the following after the subcategory selected.
 *      <tr>
                <td>Assignment: <input type="text" name="Assignment Name" value="Assignment 1"></td> <!-- Add inputs after colons. Inputs somehow involve the <form> and <input> tags. -->
                <td>Assignment Grade: <input type="text" name="Assignment Grade" value="100"></td>
                <td>Assignment Weight: <input type="text" name="Assignment Weight" value="1"></td>
        </tr>
 * 
 * function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   var cVal = document.getElementById('CatSelect').value;
   var sVal = document.getElementById('SubcatSelect').value;
   var aVal = document.getElementById('AssignmentSelect').value;
   // Get values of inputs
   // Pass values to addNewPost()
   addNewPost(user,cap,fileLocations[imge]);
* }

We're going to want to change the HTML so that the inputs are all part of the submit... 
*/

function AddCat() {
    // This next line prevents the reload of the form
   //event.preventDefault();
   var cName = document.getElementById('cName').value;
   // Get values of inputs
   // Pass values to addNewPost()
   console.log(cName);
   //addNewPost(user,cap,fileLocations[imge]);
 }
 function AddSub() {
    // This next line prevents the reload of the form
   //event.preventDefault();
   var cSel = document.getElementById('CatSelect').value;
   var sName = document.getElementById('sName').value;
   var sWeight = document.getElementById('sWeight').value;
   // Get values of inputs
   // Pass values to addNewPost()
   console.log(sName);
   //addNewPost(user,cap,fileLocations[imge]);
 }
 function AddAssign() {
    // This next line prevents the reload of the form
   //event.preventDefault();
   var sSel = document.getElementById('SubcatSelect').value;
   var aVal = document.getElementById('aVal').value;
   // Get values of inputs
   // Pass values to addNewPost()
   console.log(aVal);
   //addNewPost(user,cap,fileLocations[imge]);
 }
/**
 window.onload = () => {
    // Once our window is loaded, we add the event listener for our post form
    postForm.addEventListener('submit', handleFormSubmit);
 };
 */
