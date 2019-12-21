const contactLink = document.querySelector('#contactLink');
let contactInfo = document.querySelector('#nav-contact')
const toggleDisplay =()=>{  
    if(contactInfo.style.display===""||contactInfo.style.display==="none")
    {
        contactInfo.style.display="block"
        contactInfo.style.backgroundColor="#4C8DD6"
        contactInfo.style.color="rgb(247,247,255)"
        contactInfo.style.fontSize="1.5rem"
    }
    else
    {
        contactInfo.style.display="none"
    }
}

contactLink.onclick = toggleDisplay

