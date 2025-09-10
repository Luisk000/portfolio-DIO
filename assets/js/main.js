function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo;

    const name = document.getElementById('profile.name')
    name.innerHTML = profileData.name;

    const job = document.getElementById('profile.job')
    job.innerHTML = profileData.job;

    const location = document.getElementById('profile.location')
    location.innerHTML = profileData.location;

    const phone = document.getElementById('profile.phone')
    phone.innerHTML = profileData.phone;
    phone.hreg = "tel:" + profileData.phone;

    const email = document.getElementById('profile.email')
    email.innerHTML = profileData.email;
    email.href = "mailto:" + profileData.email;
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById("profile.skills.softSkills");
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById("profile.skills.hardSkills")
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => 
        `<li>
            <img class='tool-img' src='${skill.logo}' alt='${skill.name}'>
        </li>`).join('')
}

function updateLanguages(profileData){
    const languages = document.getElementById("profile.languages");
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePorftolio(profileData){
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(projeto => 
            `<li>
                <span class="title ${projeto.github == true ? 'github' : ''}">
                    ${projeto.name}
                </span>
                <a href="${projeto.url}">${projeto.url}</a>
             </li>`
        ).join('')
}

function updateExperiencia(profileData){
    const experiencia = document.getElementById('profile.professionalExperience')
    experiencia.innerHTML = profileData.professionalExperience.map(exp => 
        `<li>
            <span class='title'>${exp.name}</span>
            <span class='experiencia-data'>${exp.period}</span>
            <span class='experiencia-text'>${exp.description}</span>
         </li>`).join('')
}

async function run (){
    const url = "/profile.json"
    const fetching = await fetch(url);
    const profileData = await fetching.json()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePorftolio(profileData)
    updateExperiencia(profileData)
}

run()