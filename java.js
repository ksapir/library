var formats = [`maps`, `audio`, `photos`, `manuscripts`, `newspapers`, `film-and-videos`, `notated-music`, `websites`];
var baseUrl = `https://www.loc.gov/fo=json`;
var searchUrl;
var format;
var query;

function getFormat() {  
}
function getQuery() {
}
function createSearchUrl() {
    getFormat();
    getQuery();
    searchUrl = `${baseUrl}/${format}/?q=${query}`;
}