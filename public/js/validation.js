function signupdata()
{
    const username = document.getElementById("Fullname").value
    const useremail = document.getElementById('emailaddress').value
    const user_password = document.getElementById('Passwordaddress').value
    const user_mobile = document.getElementById('mobile').value
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var mobile_regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/

    if(username==null || username=='' )
    {
        document.getElementById('error').innerText="please enter the username"
        document.getElementById('erroremail').innerText="please enter the email"
        document.getElementById('errorpassword').innerText="please enter  the password"
        document.getElementById('errorphone').innerText='please enter the number'
        return false
    }
    else{
        document.getElementById('error').innerText=""
    }


    if(!username.match(usernameRegex))
    {
        document.getElementById("error").innerText="please enter valid username"
        return false
    }
   
    if(useremail==null||useremail=="")
    {
        document.getElementById('erroremail').innerText="please enter the email"
        return false
    }
    else{
        document.getElementById('erroremail').innerText=''
    }

    if(user_password==""|| user_password==null)
    {
        document.getElementById("errorpassword").innerText="please enter the password"
        return false

    }else if(!user_password.match(passwordRegex))
    {
        document.getElementById("errorpassword").innerText="please enter strong password"
        return false
    }
    else{
        document.getElementById('errorpassword').innerText=''
    }

    if(user_mobile==null || user_mobile=='')
    {
        document.getElementById("errorphone").innerText("please enter the number")
        return false
    }
    else if(!user_mobile.match(mobile_regex))
    {
        document.getElementById('errorphone').innerText="please enter valid number"
        return false
    }
    else{
        document.getElementById("errorphone").innerText=''
    }
   


}