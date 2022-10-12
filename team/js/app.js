const arrayWbfTeammate = ['Fabiola', 'Gwen', 'Priscilla', 'Julie', 'Sandy', 'Kiara'];

const teamIntro = function (teammate) {
  const teammatesList = document.querySelector('#teammatesList');
  const createLi = document.createElement('li');
  createLi.textContent = 'Hello, je m\'appelle ' + teammate + ' et Je fais partie de la team Bonnes fées !';
  teammatesList.appendChild(createLi);
}

arrayWbfTeammate.forEach(teamIntro);

const wbfTeamObject = [{
    firstname: 'Fabiola',
    age: 33,
    occupation: 'Fondatrice'
  },
  {
    firstname: 'Gwen',
    age: 33,
    occupation: 'Webmaster'
  }, {
    firstname: 'Priscilla',
    age: 21,
    occupation: 'Franchisée'
  }, {
    firstname: 'Julie',
    age: 31,
    occupation: 'Franchisée'
  }, {
    firstname: 'Sandy',
    age: 31,
    occupation: 'Franchisée'
  }, {
    firstname: 'Chiara',
    age: 27,
    occupation: 'Franchisée'
  }
];

const franchised = teammate => {
  const teammatesList = document.querySelector('#franchisedList');
  if (teammate.occupation === 'Franchisée') {
    const createLi = document.createElement('li');
    createLi.textContent = `${teammate.firstname}`;
    teammatesList.appendChild(createLi);
  }
};

const teamFranchised = wbfTeamObject.map(franchised);

const franchisedObject = wbfTeamObject.filter(teammate => teammate.occupation === 'Franchisée');
console.log(franchisedObject);

const founder = wbfTeamObject.forEach(teammate => {
  const teammatesList = document.querySelector('#founder');
  if (teammate.occupation === 'Fondatrice') {
    const createLi = document.createElement('li');
    createLi.textContent = `${teammate.firstname}`;
    teammatesList.appendChild(createLi);
  }
})

function findTeammate(occupation, teammates) {
  const wbfFounder = teammates.find(teammate => teammate.occupation === 'Fondatrice');
  return wbfFounder;
};

const wbfFounder = findTeammate('Fondatrice', wbfTeamObject);
console.log(wbfFounder);

const tags = document.querySelectorAll('.hidden');
tags.forEach((tag, i) => {
  setTimeout(() => tag.classList.remove('hidden'), (i + 1) * 1000);
})

const [Fabiola, Gwen, Priscilla, Julie, Sandy, Chiara] = wbfTeamObject;
console.log(Sandy);
console.log(Julie.age);


const fabiola = {
  firstname: 'Fabiola',
  lastname: 'Plazanet',
  age: 33,
  occupation: founder,
};

const {
  firstname: prenom,
  lastname: nom,
  age
} = fabiola;
console.log(prenom, age);
const fabiolaFirstname = prenom;
console.log(fabiolaFirstname);

const sayHelloToTeammate = ({firstname, lastname}) => {
  document.querySelector('#helloFabiola').textContent = `Bonjour ${firstname} ${lastname} et bienvenue parmi nous`;
};
sayHelloToTeammate(fabiola);