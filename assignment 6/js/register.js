var signUp=(e) => {
    e.preventDefault(); //Do not want to reload, by preventing default browser behaviour

    var store = localStorage.getItem('formData');
    var student =[];
    if(store!==null){
        student = JSON.parse(store);
    }
       
    //object- form data
    let formData = {
        //The properties of student object taken in the form
        fname: document.getElementById('fname').value, // gives the value entered by the user for the field first name
        fName: document.getElementById('fName').value,
        dob: document.getElementById('dob').value,
        standard: document.getElementById('standard').value,
        address: document.getElementById('addr').value,
        interests: document.getElementById('interest').value,
        rollNo: Date.now() //to get the current time stamp

        
    }
    
   console.log(student);

    student.push(formData); //form data object is being added to an array Students
    document.querySelector('form').reset(); //To clear the form for the next entries
   
    //using local storage to save the data - has to be a string
    localStorage.setItem('formData',JSON.stringify(student));
    //console.log(localStorage.getItem('formData'));
    //dispData();
   
   
}


//let len = localStorage.length;
let length = JSON.parse(localStorage.getItem('formData')).length;
for(var i=0; i<length; i++){
    //JSON.parse(localStorage.getItem('formData'));
   
    console.log(JSON.parse(localStorage.getItem('formData'))[i]);
    // console.log(JSON.parse(localStorage.getItem('formData'))[i].fName);
    // console.log(JSON.parse(localStorage.getItem('formData'))[i].dob);
    // console.log(JSON.parse(localStorage.getItem('formData'))[i].standard);
    // console.log(JSON.parse(localStorage.getItem('formData'))[i].addr);
    // console.log(JSON.parse(localStorage.getItem('formData'))[i].interest);
    // console.log(JSON.parse(localStorage.getItem('formData'))[i].rollNumber);
}




/*
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btn').addEventListener('click', signUp); //Whenever there is click event like mouse click or load, the function signUp is called
});
*/


function dispData() {
 
    //console.log(JSON.parse(localStorage.getItem('formData')));
    //De structuring the keys in form data object on the local storage
    if(localStorage.getItem('formData')){
        let length=JSON.parse(localStorage.getItem('formData')).length;
    for(var i=0;i<length;i++){
    let{fname, fName, dob, standard, address, interests, rollNo} = JSON.parse(localStorage.getItem('formData'))[i];
    
    var output = document.getElementById('out');
    
    output.innerHTML += `
    
    <tbody>
    <tr>
    
    <td> ${fname}</td>
    <td> ${fName}</td>
   
    <td> ${dob}</td>
   
    <td> ${standard}</td>
    
    
    <td> ${address}</td>
 
    
    <td> ${interests}</td>
   
    
    <td> ${rollNo}</td>
    </tr>

    </tbody>
    </table>
    `;
   
}
    }
}
//dispData();

function getName() {
    let data = JSON.parse(localStorage.getItem('formData'));
    let length= data.length;
    for(var i=0;i<length;i++){
        if(document.getElementById("class-number").value == data[i].standard){
            //alert(data[i].fname + data[i].rollNo);
            let x = document.createElement('p');
            x.appendChild(document.createTextNode('Name: '+data[i].fname));
            display.appendChild(x);

        }
    }
}

function studentSort() 
{
    let data = JSON.parse(localStorage.getItem('formData'));
    let length = data.length;
    for(var i=0; i<length-1; i++)
    {
        for(var j=0;j<length-i-1; j++)
        {
            if((data[j].fname)>(data[j+1].fname))
            {
                var temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
    }
    for (var i = 0; i < length; i++) {
        console.log(data[i].fname);
        let t = document.createElement('p');
        t.appendChild(document.createTextNode('Name: '+data[i].fname));
        disp.appendChild(t);

    }
    
}
let disp = document.getElementById('stud');

let display = document.getElementById('lists');
// let studentList=JSON.parse(document.getElementById('formData').textContent);
// const ctx=document.getElementById('myChart');
// new Chart(ctx,{
   
//         type: 'pie',
//         data: {
//             labels: ['1','2','3','4','5','6','7','8','9','10'],
//             datasets: [{
//                 label: '# of Votes',
//                 data: [studentlist],
//                 backgroundColor: [
//                     'aqua',
//                     'azure',
//                     'wheat'
//                 ],
//                 borderColor: [
//                     'aqua',
//                     'azure',
//                     'wheat'
                    
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             responsive: true,
//             legend:{
//                 position:"bottom"
//             },
            
//         },
//     })


     
