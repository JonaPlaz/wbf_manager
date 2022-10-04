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

const founder = wbfTeamObject.forEach(teammate => {
  const teammatesList = document.querySelector('#founder');
  if (teammate.occupation === 'Fondatrice') {
    const createLi = document.createElement('li');
    createLi.textContent = `${teammate.firstname}`;
    teammatesList.appendChild(createLi);
  }
})

const tags = document.querySelectorAll('.hidden');
tags.forEach((tag, i) => {
  setTimeout(() => tag.classList.remove('hidden'), i * 1000);
})