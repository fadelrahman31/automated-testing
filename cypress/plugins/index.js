/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const fs = require('fs')
const path = require('path')
const pdf = require('pdf-parse');

const pdfParse = async (pdfName) => {
  const pdfPathName = path.join("./downloaded/", pdfName)
  let dataBuffer = fs.readFileSync(pdfPathName);
  await pdf(dataBuffer).then(function(data) {
    return data.info;
  })
}


module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {downloadFile})
  on('task', {
    getPdfContent (pdfName) {
      return String(pdfParse(pdfName))
    }
  })
}
