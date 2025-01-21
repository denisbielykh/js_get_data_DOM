'use strict';

const populationSpans = document.querySelectorAll('.population');
const populationData = [];
const totalPopulationElem = document.querySelector('.total-population');
const averagePopulationElem = document.querySelector('.average-population');

function getPopulationData(populationSpans) {
  for (const el of populationSpans) {
    const elText = el.innerText.replaceAll(',', '');

    if (+elText || +elText === 0) {
      populationData.push(+elText);
    };
  }
}

function getTotalPopulation(populationData) {
  return populationData.reduce((prev, item) => item + prev, 0);
}

function getAveragePopulation(populationData, totalPopulation) {
  return Math.round(totalPopulation / populationData.length);
}

function addThousandsSeparator(number, separator = ',') {
  let splittedString = `${number}`.split('').reverse();
  let parts = [];

  for (let i = 0; i <  splittedString.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      parts.push(separator);
    }

    parts.push(splittedString[i]);
  }

  return parts.reverse().join('');
}

addThousandsSeparator(1234567, '.')

getPopulationData(populationSpans);

const totalPopulation = getTotalPopulation(populationData);
const averagePopulation = getAveragePopulation(populationData, totalPopulation);

totalPopulationElem.innerText = addThousandsSeparator(totalPopulation);
averagePopulationElem.innerText = addThousandsSeparator(averagePopulation);
