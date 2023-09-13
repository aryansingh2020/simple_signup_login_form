
const btnLoginOpt=document.getElementById("btn-login")
const btnSignupOpt=document.getElementById("btn-signup")
const signupForm=document.getElementById("signup")
const loginForm=document.getElementById("login")
const user=document.getElementById("username")
const password=document.getElementById("password")
const btn1=document.getElementById("btn1")
const msg1 =document.getElementById("msg1")

const loginUsername=document.getElementById("login-username")
const loginPassword=document.getElementById("login-password")
const btn2=document.getElementById("btn2")
const msg2 =document.getElementById("msg2")

const userdata = [];
btnSignupOpt.addEventListener("click", () => {
   
    loginForm.style.display = "none";
    signupForm.style.display="block";
  });
  
btnLoginOpt.addEventListener("click", () => {
    
    loginForm.style.display = "block";
    signupForm.style.display="none";
});
  
btn1.addEventListener("click", () => {
    const userName = user.value;
    const passWord = password.value;

    // Check if a user with the same userName already exists
    const userExists1 = userdata.some(userObj=>userObj.userName===userName);

    if (userExists1) {
        msg1.innerHTML = "Username already exist.";
        setTimeout(()=>{
            msg1.innerHTML="";
        },1300);
    } 
    else if(user.value==="" || password.value==="")
    {
        msg1.innerHTML = "All fields are required.";
        setTimeout(()=>{
            msg1.innerHTML="";
        },1300);
    }
    else{
        userdata.push({ userName, passWord });
        msg1.innerHTML = "Success";
        user.value = "";
        password.value = "";
        setTimeout(()=>{
            msg1.innerHTML="";
        },1300);
    }
    console.log(userdata)    
});

btn2.addEventListener("click", ()=>{
    const loginUser=loginUsername.value
    const loginPass=loginPassword.value
    const userExists2 = userdata.some(userObj=>userObj.userName===loginUser && userObj.passWord===loginPass);
    if(userExists2)
    {
        msg2.innerHTML="Login success";
        loginUsername.value=""
        loginPassword.value=""
        console.log(userExists2)
        setTimeout(()=>{
            msg2.innerHTML="";
        },1300);
    }
    else{
        msg2.innerHTML="Login failed";
        loginUsername.value=""
        loginPassword.value=""
        console.log(userExists2)
        setTimeout(()=>{
            msg2.innerHTML="";
        },1300);
    }
});
