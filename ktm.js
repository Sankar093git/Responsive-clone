function showsidebar() {
    const menuSidebar = document.querySelector(".menuSidebar")
    menuSidebar.style.display = 'flex'
}

function hideSidebar() {
    const menuSidebar = document.querySelector(".menuSidebar")
    menuSidebar.style.display = 'none'
}

/*function hideText() {
    const hideIt = document.querySelectorAll(".conFig")
    var opaci
    hideIt.forEach(element => {
        opaci = number(windows.getComputedStyle(element).getPropertyValue("opacity"))

        if (opaci > 0) {
            opaci = opaci - 0.1
            element.style.opacity = opaci;
        }
        else {
            clearInterval(intervalID)
        }

    });

}
var opaci;
var intervalID;


function showText() {
    const hideIt = document.querySelectorAll(".conFig")
     opaci
    hideIt.forEach(element => {
        opaci = number(windows.getComputedStyle(element).getPropertyValue("opacity"))

        if (opaci < 1) {
            opaci = opaci + 0.1
            element.style.opacity = opaci;
        }
        else {
            clearInterval(intervalID)
        }

    });

}

function fadeOut(){

     intervalID = setInterval(hideText, 30)
}

function fadeIn() {
     intervalID = setInterval(showText, 30)
}*/
function hideText() {
    const hideIt = document.querySelectorAll(".conFig")
    hideIt.forEach(element => {
        element.style.display='none'

       
    });
}
function showText() {
    const hideIt = document.querySelectorAll(".conFig")
    hideIt.forEach(element => {
        element.style.display='flex'

       
    });
}
function showMenu1(){
    const drop=document.querySelector(".dropDownFooter1")
    var x = window.getComputedStyle(drop)
    if(x.display=='none'){
    drop.style.display="block"
    }
    else{
        drop.style.display='none'
    }
}
function showMenu2(){
    const drop=document.querySelector(".dropDownFooter2")
    var x = window.getComputedStyle(drop)
    if(x.display=='none'){
    drop.style.display="block"
    }
    else{
        drop.style.display='none'
    }
}
function showMenu3(){
    const drop=document.querySelector(".dropDownFooter3")
    var x = window.getComputedStyle(drop)
    if(x.display=='none'){
    drop.style.display="block"
    }
    else{
        drop.style.display='none'
    }
}
function showMenu4(){
    const drop=document.querySelector(".dropDownFooter4")
    var x = window.getComputedStyle(drop)
    if(x.display=='none'){
    drop.style.display="block"
    }
    else{
        drop.style.display='none'
    }
}




   /* const cName=document.getElementById("nAme")
    const cPass=document.getElementById("pAss")
    const form=document.getElementById("cOntact")
    const cMess=document.getElementById("mEssage")
    const cMail=document.getElementById("eMAil")
    const cNameval= cName.value.trim()
    const cMailval= cMail.value.trim()
    const cPassval= cPass.value.trim()
    const cMessval= cMess.value.trim()
    const errorElement2=document.getElementById("error2")
    const errorElement1=document.getElementById("error1")
    const errorElement3=document.getElementById("error3")
    const errorElement4=document.getElementById("error4")*/

    /*const form=document.getElementById("cOntact");
    const cName=document.getElementById("nAme");
    const cMail=document.getElementById("eMAil");
    const cPass=document.getElementById("pAss");
    const cMess=document.getElementById("mEssage");

    form.addEventListener("submit",e=>{
        e.preventDefault();

        validateInputs();
    });

    const setError =(element,message) => {
        const inputControl=element.parentElement;
        const errorDisplay=inputControl.querySelector('.error');

        errorDisplay.innerText=message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }

    const setSuccess=(element) =>{
        const inputcontrol=element.parentElement;
        errorDisplay.innerText='';

        inputControl.classList.add('success');
        inputControl.classList.remove('error');     
    }

    const validateInputs= ()=>{
        const cNameval= cName.value.trim();
        const cMailval= cMail.value.trim();
        const cPassval= cPass.value.trim();
        const cMessval= cMess.value.trim();

        if(cNameval===''){
            setError(cName,'Name is required');

        }else{
            setSuccess(cName);

        }

        if(cMailval===''){
            setError(cMail,'Name is required');
        }else if(!isValidemail(cMailval)){
             setError(cMail,'Provide a valid address')
             }else{
            setSuccess(cMail);
             }
        


        if(cPassval===''){
            setError(cPass,'Name is required');
        }else if(cPassval.length<8)
            {setError(cPass,"passowrd must be atleast 8 characters long")}
            else{
            setSuccess(cPass);
        }

        if(cMessval===''){
            setError(cMess,'Name is required');
        }else{
            setSuccess(cMess);
        }


    }*/

        var Form=document.getElementById('contact')
        var u_name=document.myForm.u_name;
        var u_pass=document.myForm.u_pass;
        var ph_pass=document.myForm.ph_pass;
        var c_name=document.myForm.c_name;
        document.getElementById("name_validation").innerText=""
        document.getElementById("pass_validation").innerText=""
        var buttn=document.getElementById("subBtn")
        var field
        var x
        var y
        
        
        function validate(field)
        {
            if(field=='name_field')
            { if(c_name.value){
                c_name.classList.remove("is-invalid");
                c_name.classList.add("is-valid");
                document.getElementById("name_validation").innerText=""
                x=1
                }else{
                 c_name.classList.remove("is-valid");
                 c_name.classList.add("is-invalid");
                 document.getElementById("name_validation").innerText="This field is required*"
          
                }

            }
            if(field =='mail_field')
            {
              if(u_name.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
              u_name.classList.remove("is-invalid");
              u_name.classList.add("is-valid");
              document.getElementById("mail_validation").innerText=""
              y=1
              }else{
               u_name.classList.remove("is-valid");
               u_name.classList.add("is-invalid");
               document.getElementById("mail_validation").innerText="Enter a valid mail-id*"
        
              }

            }else if(field =='password_field')
             {
              if(u_pass.value){
              u_pass.classList.remove("is-invalid");
              u_pass.classList.add("is-valid");
              document.getElementById("pass_validation").innerText=""
              var z=1
             }else{
              u_pass.classList.remove("is-valid");
              u_pass.classList.add("is-invalid");
              document.getElementById("pass_validation").innerText="Password required*"
             }
          }
            
          
        
        
        if(x==1 && y==1 && z==1){
        buttn.disabled=false;
        }else{
         buttn.disabled=true;
        }
        }

        function sendMail(){
            var params={
                from_name:document.getElementById('username').value,
                email_id:document.getElementById('emailAdress').value,
                message:document.getElementById('messages').value,
            }
            console.log("sree")
            

            emailjs.send('service_qng3vof','template_hu1e1zk',params).then((res)=>alert("sent"))
            }

        Form.addEventListener('submit', (e)=>{
            e.preventDefault()
            if(Form.checkValidity()){
                sendMail()
            }
        })
            

       


   
