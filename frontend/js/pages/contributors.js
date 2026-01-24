const contributorsGrid=document.getElementById('contributors-grid');

const githubUsername='omkarhole';
const repoName='Environment_Animal_Safety_Hub';

const API_URL=`https://api.github.com/repos/${githubUsername}/${repoName}/contributors`;

async function loadContributors() {
    try{
        const response=await fetch(API_URL);
        if(!response.ok){
            throw new Error("Failed to fetch contributors");
        }
        const contributors=await response.json();
        contributorsGrid.innerHTML='';

        contributors.forEach(contributor=>{
            const card=document.createElement('div');
            card.classList.add('contributor-card');

            card.innerHTML=`
            <img src="${contributor.avatar_url}" alt="${contributor.login}" />
            <h3>${contributor.login}</h3>
            <p>${contributor.contributions} contributions</p>
            <a href="${contributor.html_url}" target="_blank">
            <i class="fa-brands fa-github"></i>
            </a>
            `;
            contributorsGrid.appendChild(card);
        });

    }
    catch(err){
        contributorsGrid.innerHTML="<p>Unable to load contributors...</p>";
        console.error(err);
    }
}

loadContributors();