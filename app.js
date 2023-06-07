class Tabs {
  constructor(tabs, tab) {
    this.tabs = tabs,
    this.tab = tab,
    this.init()
  }
  init() {
    this.tabsNavigation = document.createElement('div');
    this.tabsList = document.createElement('ul');
    this.tabsNavigation.classList.add('tabs__navigation');
    this.tabsList.classList.add('tabs__list');    
    this.tabsNavigation.append(this.tabsList);
    this.tab.prepend(this.tabsNavigation);

    this.tabsContentOne = this.tabsNavigation.nextElementSibling;

    Array.from(this.tabsContentOne.children).forEach((item, i) => {
      this.tabsItem = document.createElement('li');
      this.tabsLink = document.createElement('a');
      this.tabsItem.classList.add('tabs__item');
      this.tabsLink.classList.add('tabs__link');
      this.tabsLink.href = '#';
      this.tabsLink.textContent = item.id;
      this.tabsLink.id = '#' + item.id;
      this.tabsItem.append(this.tabsLink);
      this.tabsList.append(this.tabsItem);
    });
    this.tabsListA = this.tabsList.querySelectorAll('a');
    this.tabsC = this.tabsContentOne.querySelectorAll('.tabs__content-item');
    this.changer();
  }
  changer() {
    for (let i=0; i<this.tabsList.children.length; i++) {
      let tl = this.tabsList.children[i].querySelector('a');
      tl.addEventListener('click', event => {
        event.preventDefault();
        let tabId = tl.id;
        let curItem = document.querySelector(`${tabId}`);
        if (!tl.closest('.tabs--active')) {
          this.tabsListA.forEach(item => item.classList.remove('tabs--active'));
          this.tabsC.forEach(item => item.classList.remove('tabs--show'));

          tl.classList.add('tabs--active');
          curItem.classList.add('tabs--show')
        }
      })
    this.tabsListA[0].click()
    }
  }
}
let tabs = document.querySelectorAll('.tabs');
for (let i=0; i<tabs.length; i++) {
  new Tabs(tabs, tabs[i])
}