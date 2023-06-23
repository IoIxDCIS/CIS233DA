function getMenu() {
    // set variables
    var url = window.location.pathname;
    var nav = document.getElementById('nav');

    // create menu tabs from menu array
    for (x = 0; x < aryMenu.length; x++) {

        // create new list item
        var li = document.createElement('li');

        // get page 
        var pageName = aryMenu[x][0];

        // set active status of tab
        if (url.indexOf(pageName) > 0) {
            li.setAttribute('class', 'active')
        } else {
            li.setAttribute('class', 'inactive')
        }

        // create anchor tag
        let a = document.createElement('a');
        a.href = aryMenu[x][0];
        a.innerText = aryMenu[x][1];

        // append anchor tag to li
        li.appendChild(a);

        //append li to ul
        nav.appendChild(li);
    }
}

function getSemester() {
    let semesterList = document.getElementById("semesterList");
    semesterList.innerHTML.length = 0;

    let options = [];
    let option = document.createElement("option");
    option.value = 0;
    option.text = "Select a Semester";
    options.push(option);
    
    arySemesters.forEach(semester => {
        let option = document.createElement("option");
        option.value = semester[0];
        option.text = semester[1];

        options.push(option);
    });

    options.forEach(option => {
        semesterList.appendChild(option);
    })
}

function getClass() {
    let semesterList = document.getElementById("semesterList");
    let value = semesterList.value;
    
    let classArray = eval("ary"+value);
    
    let classList = document.getElementById("classList");
    classList.innerHTML = "";

    let options = [];
    let option = document.createElement("option");
    option.value = 0;
    option.text = "Select a Class";
    options.push(option);

    classArray.forEach(cls => {
        let option = document.createElement("option");
        option.value = cls[0];
        option.text = cls[1];

        options.push(option);
    });
    options.forEach(option => {
        classList.appendChild(option);
    })
}

function addClass() {
    let semesterList = document.getElementById("semesterList");
    let value = semesterList.value;

    let className = document.getElementById("className").value;
    let sectionNumber = document.getElementById("sectionNumber").value;

    if(className == "") {
        alert("Input a class name");
    } else if(sectionNumber == "") {
        alert("Input a section number");
    } else {
        let classArray = eval("ary"+value);    
        classArray.push([className, sectionNumber]);
        
        document.getElementById("className").value = "";
        document.getElementById("sectionNumber").value = "";

        getClass();
        getSemester();
    }
}

function deleteClass() {
    let semesterList = document.getElementById("semesterList");
    let value = semesterList.value;
    
    let classList = document.getElementById("classList");

    if(value == 0) {
        alert("Select a class to delete");
    } else {
        let classArray = eval("ary"+value);    
        classArray.splice(classList.selectedIndex, 1);
        
        getClass();
        getSemester();
    }
}

function getStudents() {
    let classList = document.getElementById("classList");
    let value = classList.value;
    
    let studentList = document.getElementById("studentList");
    studentList.innerHTML = "";

    if(value == 0) {
        alert("Class must be selected");
    } else {
        let userArray = eval("ary"+value);

        let options = [];
        userArray.forEach(user => {
            let option = document.createElement("option");
            option.value = user[0];
            option.text = user[1];
    
            options.push(option);
        });

        options.forEach(option => {
            studentList.appendChild(option);
        })
    }


}

function addStudent() {
    let classList = document.getElementById("classList");
    let value = classList.value;

    let meid = document.getElementById("meid").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    if(meid == "" || firstName == "" || lastName == "") {
        alert("Input an MEID, first, and last name");
    } else {
        let classArray = eval("ary"+value);    
        classArray.push([meid, lastName+", "+firstName]);
        
        document.getElementById("meid").value = "";
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";

        getStudents();
    }
}

function deleteStudent() {
    let classList = document.getElementById("classList");
    let studentList = document.getElementById("studentList");
    let value1 = classList.value;
    let value2 = studentList.value;

    if(value2 == 0) {
        alert("Select a student to delete");
    } else {
        let studentArray = eval("ary"+value1);    
        studentArray.splice(studentList.selectedIndex, 1);
        
        getStudents();
    }
}
