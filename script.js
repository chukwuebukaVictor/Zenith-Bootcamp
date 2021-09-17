const speakerName = document.querySelectorAll('.speaker-name');
const speakerJob = document.querySelectorAll('.speaker-job');
const speakerDesc = document.querySelectorAll('.speaker-desc');

const speakersArray = [
  {
    name: 'Yochai Benckler',
    job: 'Ceo of at Zenith Bootcamp',
    description: 'Youchai Studied IT at Havard high school as a fullstack web developer ',
  },
  {
    name: 'Kilnam Chon',
    job: 'Head front end web developer team at Zenith Bootcamp',
    description: 'Kilnam studied IT at Barclays High school as front end web developer.',
  },
  {
    name: 'SohYeong Noh',
    job: 'Head back end web developers team at Zenith Bootcamp',
    description: 'SohYeong studied IT at Havard High school as a back end web developer. ',
  },
  {
    name: 'Lila Tretikov',
    job: 'Head technical team at Zenith Bootcamp',
    description: 'Lila studied IT at oakland High university as a fullstack web developer.',
  },
  {
    name: 'Julie Leda',
    job: 'Technical team memeber at Zenith Bootcamp',
    description: 'Julie studied IT at Havard High school and a backend web developer. ',
  },
  {
    name: 'Ryan Merkley',
    job: 'Technical team memeber at Zenith Bootcamp',
    description: 'Ryan studied IT at Havard High school as a front end developer. ',
  },
];

window.addEventListener('load', () => {
  for (let i = 0; i < speakersArray.length; i++) {
    speakerName[i].textContent = speakersArray[i].name;
    speakerJob[i].textContent = speakersArray[i].job;
    speakerDesc[i].textContent = speakersArray[i].description;
  }
});