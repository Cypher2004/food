
// Create an object to store user input
let userData = {};

function valid(){
    var name = document.getElementById("name").value;
    userData.name = name;
    var email = document.getElementById("email").value;
    userData.email = email;
    var phone = document.getElementById("phone").value;
    userData.phone = phone;
    var message = document.getElementById("message").value;
    userData.message = message;

    if(name!=null && email!=null && phone!=null && message!=null){
        alert("Thank you for your message. We will get back to you shortly.");
    }

    // Function to convert user input to Excel file
    function convertToExcel() {
    // Create a new workbook
    let wb = XLSX.utils.book_new();

    // Create a new worksheet
    let ws = XLSX.utils.aoa_to_sheet([Object.keys(userData), Object.values(userData)]);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Save the workbook as an Excel file
    XLSX.writeFile(wb, "user_data.xlsx");
}

convertToExcel();
}