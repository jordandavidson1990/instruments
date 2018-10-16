const data = require('./data/instrument_data.js')
const SelectView = require('./views/select_view.js')
const FamilyInfoView = require('./views/family_info_view.js')
const InstrumentFamilies = require('./models/instrument_families.js')

document.addEventListener('DOMContentLoaded', function(){

  const selectElement = document.querySelector('select#instrument-families');
  const familyDropdown = new SelectView(selectElement);
  familyDropdown.bindEvents();

  const infoDiv = document.querySelector('div#instrument-data')
  const familyInfoDisplay = new FamilyInfoView(infoDiv);
  familyInfoDisplay.bindEvents();

  const familyDataSource = new InstrumentFamilies();
  familyDataSource.bindEvents();
});
