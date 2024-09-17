"use strict";
// Input elelment
const form = document.getElementById('resume');
const displayName = document.getElementById('name');
const displayAge = document.getElementById('age');
const displayPhone = document.getElementById('phone');
const displayEmail = document.getElementById('email1');
const displayExp = document.getElementById('exp');
const displayEdu = document.getElementById('education1');
const displaySkills = document.getElementById('skill1');
const displayHomeadress = document.getElementById('home');
const displaygithub = document.getElementById('github');
const displayaddress = document.getElementById('address');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('text').value;
        const age1 = document.getElementById('age1').value;
        const phone = document.getElementById('phone1').value;
        const email = document.getElementById('email').value;
        const education = document.getElementById('education').value;
        const exp = document.getElementById('exper').value;
        const skill = document.getElementById('skill').value;
        const address = document.getElementById('address1').value;
        const Home1 = document.getElementById('Home1').value;
        // Insert values
        displayName.innerHTML = `Name: ${name}`;
        displayAge.innerHTML = `Age: ${age1}`;
        displayPhone.innerHTML = `Phone: ${phone}`;
        displayEmail.innerHTML = `Email:${email}`;
        displayEdu.innerHTML = `Education:${education}`;
        displayExp.innerHTML = `Exp:${exp}`;
        displaySkills.innerHTML = `${skill}`;
        displayaddress.innerHTML = `${address} `;
        displayHomeadress.innerHTML = `${Home1} `;
    });
}
