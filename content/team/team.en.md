---
dataKey: teamInfo
contentLang: en

team:
  - nick: radvam
    name: Dmitry Radkovets
    linkToGitHub: https://github.com/radvam
    srcImg: "./radkovets.png"
    worklog:
      - spentTime: 8
        feature: "Layout implementation of components"
      - spentTime: 5
        feature: "Collecting information about authors"
      - spentTime: 4
        feature: "Create md-files about authors"
      - spentTime: 9
        feature: "Creating team page components"
      - spentTime: 11
        feature: "Creating work log page components"
      - spentTime: 3
        feature: "Code review"
  - nick: HyBeard
    name: Ilya Kaptsevich
    linkToGitHub: https://github.com/HyBeard
    srcImg: "./kaptsevich.png"
    worklog:
      - spentTime: 5
        feature: "Project structure creation"
      - spentTime: 10
        feature: "Installation and adjustment GatsbyJS"
      - spentTime: 8
        feature: "Static page autogeneration"
      - spentTime: 11
        feature: "Translation implementation"
      - spentTime: 7
        feature: "Home page component creation - author of the day"
      - spentTime: 3
        feature: "Code review"
  - nick: nextdesusu
    name: Ilya Bakanov
    linkToGitHub: https://github.com/nextdesusu
    srcImg: "./bakanov.png"
    worklog:
      - spentTime: 5
        feature: "Layout implementation of components"
      - spentTime: 10
        feature: "Implementation of components - header and footer"
      - spentTime: 9
        feature: "Creating search page components"
      - spentTime: 12
        feature: "Creating author's page components"
      - spentTime: 4
        feature: "Deployment of the project"
      - spentTime: 3
        feature: "Code review"
mainDifficulties:
  - "Branch merge conflicts."
  - "Study, install and configure GatsbyJS, CMS."
  - "Delegation of authority"
---

## Evaluation

---

### Min scope - **50**

- [x] **10** Main page + page with a list of authors + author's page (only pages with content without widgets);
- [x] **10** Page with team members + page with worklog
- [x] **10** Page with list of authors contains search widget;
- [x] **20** Portal has two languages;

### Normal scope - **140**

- [x] **20** Portal has page with styleguide;
- [x] **10** Mobile version is okey
- [x] **10** Ipad/tablet version is okey
- [x] **10** Author's page contains timeline;
- [x] **10** Author's page contains video overlay;
- [x] **20** Author's page contains photo gallery;
- [x] **10** Author's page contains map (geowidget);
- [x] **from 0 to 20** Design (typography, icons, colors, links + buttons + input are styled)
- [x] **20** Material-ui / bootstrap is used
- [x] **10** Portal has third language;

### Extra scope - **90**

- [x] **10** Confidence of the project presentation;
- [x] **10** Project is made using gatsbyjs;
- [ ] **10** Contentful / netlify cms is used for content management
- [ ] **20** Animations / special effects like paralax
- [x] **up to 20** Outstanding design;
- [x] **20** Storybook/styleguidist/other react styleguide tool usage for the page with styles

### Fines

- **-50** if there are less than 5 commits from each active team member. Everyone should merge their own PRs.
- up to **-50** points for violations
  [stage2-tasks-requirements](https://github.com/rolling-scopes-school/docs/blob/master/docs/stage2.md)
- **-40** if there is no worklog for team
- **-20** too primitive (ugly for 2020) design / UX

---

### Total score: 250
