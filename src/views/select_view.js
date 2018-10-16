const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
  // console.log('element:',element);
};
// console.log('xox');

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Data:all-data-ready', (event) => {
    console.log('anything', event);
    const allFamilies = event.detail;
    this.populate(allFamilies);
  });
  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populate = function(familyData){
  familyData.forEach((family, index) => {
    const option = document.createElement('option');
    option.textContent = family.name;
    // console.log('xoxxx',data.name);
    option.value = index;
    this.element.appendChild(option);
    // debugger
  })
}
// }
module.exports = SelectView;
