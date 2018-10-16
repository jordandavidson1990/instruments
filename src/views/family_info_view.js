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
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `The ${family.name}`;
  // this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = FamilyInfoView;
