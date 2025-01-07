const {getJestProjects} = require('@nx/jest');

export default {
  projects: [
    ...getJestProjects(),
    '<rootDir>/app/lanceur-lib-ihm',
    '<rootDir>/libs/bloc-opportunites-epi',
    '<rootDir>/libs/bloc-alertes-epi'
  ]
};
