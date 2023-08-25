

const MY_EXPERIENCE = [
    {
        title: 'Regions Finicial Advisor',
        location: 'Birmingham, AL',
        summary: 'help people budget and look at options'
    },
]



const MY_SKILLS = [
    { skill_name: 'Sewing', isCool: true }, { skill_name: 'HTML', isCool: false }, { skill_name: 'CSS', isCool: false }, { skill_name: 'Chess', isCool: true }
];

function displaySKill(skills) {
    skills.forEach(skill => {
        let skill_sentence = '';
        if (skill.isCool == true) {
            skill_sentence += '*BAM: ';

        }
        skill_sentence += skill.skill_name;
        console.log(skill_sentence);
    });
}

const MY_INTERESTS = [
    '*horror films',
    '*cooking gumbo',
    '*video games',
];




function displayPosition(experiences) {
    experiences.forEach(experience => {
        console.log(`* ${experience.title} at ${experience.location} - ${experience.summary}`)
    });
}



const sentence = 'liz heacock';
console.log('NAME: ' + sentence.toUpperCase());
console.log('Career: Finicial Advisor ');
console.log('Description: always a little sleepy ');
console.log('My Interests: ')
MY_INTERESTS.forEach(interest => {
    console.log(interest);
});
console.log('My Previous Experience');
displayPosition(MY_EXPERIENCE);
console.log('My Skills: ');
displaySKill(MY_SKILLS);