export const range = (start, stop, step) => {
  // python range equivalent for js
  if (typeof stop == "undefined") {
    // one param defined
    stop = start;
    start = 0;
  }

  if (typeof step == "undefined") {
    step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return [];
  }

  let result = [];
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }

  return result;
};

export const getMaxSalary = (data) => {
  return data.reduce((max, b) => Math.max(max, b.salary), data[0].salary);
}

export const getMinSalary = (data) => {
  return data.reduce((min, b) => Math.min(min, b.salary), data[0].salary);
}


export const getAverageSalary = (data) => {
  let sum = 0;
  data.forEach((value) => {
    sum += parseInt(value.salary);
  })
  return (sum / data.length);
}

export const getTotalSalary = (data) => {
  let sum = 0;
  data.forEach((value) => {
    sum += parseInt(value.salary);
  })
  return sum;
}