import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCDrawer } from '@material/drawer';
import { MDCRipple } from '@material/ripple';

// Instantiation app bar
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

// Instantiation tab bar
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

// Instantiation button
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

if (document.querySelector('.mdc-text-field--name') !== null) {
  const nameField = new MDCTextField(
    document.querySelector('.mdc-text-field--name')
  );
  const emailField = new MDCTextField(
    document.querySelector('.mdc-text-field--email')
  );
  const messageField = new MDCTextField(
    document.querySelector('.mdc-text-field--message')
  );
  const characterCounter = new MDCTextFieldCharacterCounter(
    document.querySelector('.mdc-text-field-character-counter')
  );

  const button = document.querySelector('.mdc-button');
  const ripple = new MDCRipple(button);
}

// // Select DOM elements
// const tabBarEl = document.querySelector('.mdc-tab-bar');
// const tabEls = Array.from(document.querySelectorAll('.mdc-tab'));

// const topAppBarEl = document.querySelector('.mdc-top-app-bar');
// const navIconEl = document.querySelector('.mdc-top-app-bar__navigation-icon');

// const drawerEl = document.querySelector('.mdc-drawer');
// const listEl = document.querySelector('.mdc-drawer .mdc-list');
// const listItemEls = Array.from(
//   document.querySelectorAll('.mdc-drawer .mdc-list-item')
// );

// const mainContentEl = document.querySelector('.main-content');
// const contentEls = Array.from(document.querySelectorAll('.content-section'));

// // Initialize modal drawer

// const drawer = new MDCDrawer(drawerEl);
// drawer.open = false;
// topAppBar.setScrollTarget(mainContentEl);
// topAppBar.listen('MDCTopAppBar:nav', () => {
//   drawer.open = !drawer.open;
// });

// listEl.addEventListener('click', (event) => {
//   drawer.open = false;
// });

// // Switch content on tab or drawer item activation

// tabBarEl.addEventListener('MDCTabBar:activated', (e) =>
//   switchToSection(e.detail.index)
// );

// // Update to e.detail.index on next release: https://github.com/material-components/material-components-web/pull/4356
// listEl.addEventListener('MDCList:action', (e) => switchToSection(e.detail));

// const switchToSection = (index) => {
//   contentEls.forEach((contentSection) => {
//     contentSection.style.display =
//       getSectionName(contentSection, '-content') ==
//       getSectionName(tabEls[index], '-tab')
//         ? 'block'
//         : 'none';
//   });

//   // Make sure to update whichever one was not clicked on
//   drawer.list_.selectedIndex = index; // https://github.com/material-components/material-components-web/issues/4364
//   tabBar.activateTab(index);
// };

// const getSectionName = (el, sectionSuffix) =>
//   el.id.slice(0, -1 * sectionSuffix.length);
