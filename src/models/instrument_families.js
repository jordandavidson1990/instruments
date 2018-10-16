const PubSub = require('../helpers/pub_sub.js')
const data = require('../data/instrument_data.js')

const InstrumentFamilies = function() {
  this.data = [
    {
      name: 'Brass',
      description: 'A brass instrument is a musical instrument that produces sound by sympathetic vibration of air in a tubular resonator in sympathy with the vibration of the player\'s lips',
      instruments: ['trumpet', 'trombone', 'horn', 'tuba', 'bugle']
    },
    {
      name: 'Strings',
      description: 'String instruments, stringed instruments, or chordophones are musical instruments that produce sound from vibrating strings when the performer plays or sounds the strings in some manner.',
      instruments: ['violin', 'double bass', 'guitar', 'sitar', 'hurdy-gurdy']
    },
    {
      name: 'Wind',
      description: 'A wind instrument is a musical instrument that contains some type of resonator (usually a tube), in which a column of air is set into vibration by the player blowing into (or over) a mouthpiece set at or near the end of the resonator.',
      instruments: ['flute', 'clarinet', 'bassoon', 'bagpipes', 'oboe']
    },
    {
      name: 'Percussion',
      description: 'A percussion instrument is a musical instrument that is sounded by being struck or scraped by a beater (including attached or enclosed beaters or rattles); struck, scraped or rubbed by hand; or struck against another similar instrument.',
      instruments: ['timpani', 'snare drum', 'bass drum', 'cymbals', 'triangle', 'tambourine']
    },
    {
      name: 'Keyboard',
      description: 'A keyboard instrument is a musical instrument played using a keyboard, a row of levers which are pressed by the fingers.',
      instruments: ['piano', 'organ', 'electronic keyboard', 'synthesizer']
    }
  ];
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('Data:all-data-ready', this.data);
  console.log('data::', this.data);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    console.log('detail:', evt.detail);
    this.publishDataDetail(selectedIndex);
  });

  InstrumentFamilies.prototype.publishDataDetail = function(selectedIndex){
    const selectedFamily = this.data[selectedIndex];
    PubSub.publish('Data:selected-family-ready', selectedFamily)
  };
}
// debugger
// console.log('data:', data);
// InstrumentFamilies.prototype.bindEvents = function() {
//   PubSub.subscribe('SelectView:change', (event) => {
//     console.log('event:', event);
//     const familyId = event.name;
//     const selectedFamily = this.family.filter((family) =>{
//       return family.name === familyId
//     });
//     PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
//     console.log('family:', selectedFamily);
//   })
// }

// InstrumentFamilies.prototype.bindEvents = function(){
//   PubSub.publish('Data:all-data-ready', this.data);
//   console.log('this.data:', this.data);
//   PubSub.subscribe('SelectView:change', (event) => {
//     const selectedIndex = event.detail;
//     this.publishInstrumentData(selectedIndex);
//   });
// };

module.exports = InstrumentFamilies;
