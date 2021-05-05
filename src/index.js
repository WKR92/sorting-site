import './vendor.css';
import listOfChannels, {channelsValues} from './components/makeChannelsBlocks.js';
import makeRadioFilters, {makeInputFilter, mainJSContainer} from './components/filters.js';
import setUserEntryInfoOnBeforeUnLoad, {setUserEntryInfoOnload} from './components/userEntriesInfo.js';
import createClearBtn, {createDarkModeBtn, createLightModeBtn} from './components/buttons.js';
import createReverseBtn from './components/sorting.js'

// display basic channels layout:
mainJSContainer.innerHTML = listOfChannels(channelsValues).join("");

// make filters:
makeInputFilter();
makeRadioFilters();

// initiate buttons:
createClearBtn();
createReverseBtn();
createDarkModeBtn();
createLightModeBtn();

// saving user entries info into local storage:
setUserEntryInfoOnload();
setUserEntryInfoOnBeforeUnLoad();
