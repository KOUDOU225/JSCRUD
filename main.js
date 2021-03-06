var selectEditRow=null;

function onFormSubmit()
{
    'use strict';
    if(validate())
    {
        var forData=readFormData();
        if(selectEditRow==null)
        {
            insertNewRecor(forData);
        }
        else
        {
            updateRecord(forData);
        }
        resetForm();
    }
}

function readFormData()
{
    var formData={};

    formData["fullName"]=document.getElementById("fullName").value;
    formData["empCode"]=document.getElementById("empCode").value;
    formData["salary"]=document.getElementById("salary").value;
    formData["city"]=document.getElementById("city").value;

    return formData;
}
function insertNewRecor(data)
{
    var table=document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    var newRow=table.insertRow(table.length);
    var cell1=newRow.insertCell(0);
    cell1.innerHTML=data.fullName;
    var cell2=newRow.insertCell(1);
    cell2.innerHTML=data.empCode;
    var cell3=newRow.insertCell(2);
    cell3.innerHTML=data.salary;
    var cell4=newRow.insertCell(3);
    cell4.innerHTML=data.city;
    var cell5=newRow.insertCell(4);
    cell5.innerHTML="<a onClick='onEdit(this)'>Edit</a>|<a onClick='onDelete(this)'>Delete</a>";
}
function resetForm()
{
    document.getElementById("fullName").value="";
    document.getElementById("empCode").value="";
    document.getElementById("salary").value="";
    document.getElementById("city").value="";
}
function onEdit(td)
{
    selectEditRow=td.parentElement.parentElement;
    document.getElementById("fullName").value=selectEditRow.cells[0].innerHTML;
    document.getElementById("empCode").value=selectEditRow.cells[1].innerHTML;
    document.getElementById("salary").value=selectEditRow.cells[2].innerHTML;
    document.getElementById("city").value=selectEditRow.cells[3].innerHTML;
}
function updateRecord(forData)
{
    selectEditRow.cells[0].innerHTML=forData.fullName;
    selectEditRow.cells[1].innerHTML=forData.empCode;
    selectEditRow.cells[2].innerHTML=forData.salary;
    selectEditRow.cells[3].innerHTML=forData.city;
}
function onDelete(td)
{
    if(confirm("Are you sure to delete records?"))
    {
        row=td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm()
    }
}
function validate(){
    isvalid=true;
    if(document.getElementById("fullName").value=="")
    {
        isvalid=false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    }
    else
    {
        isvalid=true;
        if(!document.getElementById("fullNameValidationError").classList.contains("hide"))
        {
            document.getElementById("fullNameValidationError").classList.add("hide");
        }
    }
    return isvalid;
}