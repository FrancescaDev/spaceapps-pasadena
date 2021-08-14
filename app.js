import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCRipple } from '@material/ripple';

// Instantiation app bar
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

// Instantiation button
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
