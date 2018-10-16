const PubSub = require('../helpers/pub_sub.js');

const FamilyInfoView = function(container){
  this.container = container;
};

FamilyInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Data:selected-family-ready', (evt) => {
    const family = evt.detail;
    this.render(family);
  });
};

FamilyInfoView.prototype.render = function(family){
  console.log('family:', family);
  const infoHeading = document.createElement('h2');
  infoHeading.textContent = family.name;
  this.container.innerHTML = '';
  this.container.appendChild(infoHeading);

  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = family.description;
  this.container.appendChild(infoParagraph);

  const instrumentInclude = document.createElement('h3');
  instrumentInclude.textContent = 'Instruments Include';
  this.container.appendChild(instrumentInclude);

  const instrumentList = document.createElement('li');
  instrumentList.textContent = family.instruments;

  this.container.appendChild(instrumentList);
  // infoParagraph.textContent =
};

module.exports = FamilyInfoView;
