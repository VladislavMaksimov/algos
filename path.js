// Restore travel's path by tickets

// arrays
const getPathV1 = (tickets) => {
  const path = [tickets[0]];

  if (tickets.length === 1) return path;

  const addedTickets = [true];

  for (let i = 1; i < tickets.length; i++) addedTickets.push(false);

  let firstAdded = false;
  let lastAdded = false;

  for (let i = 1; i < tickets.length; i++) {
    let beforeAdded = firstAdded || false;
    let afterAdded = lastAdded || false;

    for (let j = 1; j < tickets.length; j++) {
      if (beforeAdded && afterAdded) break;
      if (addedTickets[j]) continue;

      const currentTicket = tickets[j];

      if (path[0].from === currentTicket.to) {
        beforeAdded = true;
        addedTickets[j] = true;
        path.unshift(currentTicket);
      }

      if (path[path.length - 1].to === currentTicket.from) {
        afterAdded = true;
        addedTickets[j] = true;
        path.push(currentTicket);
      }
    }

    if (!beforeAdded) firstAdded = true;
    if (!afterAdded) lastAdded = true;
  }

  return path;
};

// two maps with cities' names
const getPathV2a = (tickets) => {
  if (tickets.length === 1) return tickets;

  const fromToMap = new Map(tickets.map((ticket) => [ticket.from, ticket.to]));
  const toFromMap = new Map(tickets.map((ticket) => [ticket.to, ticket.from]));

  const firstTicket = tickets.find(
    (ticket) => !!fromToMap.get(ticket.from) && !toFromMap.get(ticket.from)
  );

  const result = [firstTicket];
  let currentCity = firstTicket.to;

  while (!!currentCity) {
    const nextCity = fromToMap.get(currentCity);
    if (!nextCity) break;
    result.push({ from: currentCity, to: nextCity });
    currentCity = nextCity;
  }

  return result;
};

// one map with cities' names
const getPathV2b = (tickets) => {
  if (tickets.length === 1) return tickets;

  const fromToMap = new Map(tickets.map((ticket) => [ticket.from, ticket.to]));

  const firstTicket = tickets.find(
    (neededTicket) =>
      tickets.filter((ticket) => ticket.to === neededTicket.from).length === 0
  );

  const result = [firstTicket];
  let currentCity = firstTicket.to;

  while (!!currentCity) {
    const nextCity = fromToMap.get(currentCity);
    if (!nextCity) break;
    result.push({ from: currentCity, to: nextCity });
    currentCity = nextCity;
  }

  return result;
};

// one map with ticket objects
const getPathV2c = (tickets) => {
  if (tickets.length === 1) return tickets;

  const fromToMap = new Map(tickets.map((ticket) => [ticket.from, ticket]));

  const firstTicket = tickets.find(
    (neededTicket) =>
      tickets.filter((ticket) => ticket.to === neededTicket.from).length === 0
  );

  const result = [];
  let currentTicket = fromToMap.get(firstTicket.from);

  while (!!currentTicket) {
    result.push(currentTicket);
    currentTicket = fromToMap.get(currentTicket.to);
  }

  return result;
};

// TO-DO: getPathV3 via sort()

const tickets = [
  { from: "Moscow", to: "Belgrade" },
  { from: "New York", to: "Paris" },
  { from: "Astana", to: "Dubai" },
  { from: "Singapore", to: "Moscow" },
  { from: "Dubai", to: "New York" },
  { from: "Belgrade", to: "Astana" },
  { from: "Dublin", to: "Singapore" },
];

const resultV1 = getPathV1(tickets);
const resultV2a = getPathV2a(tickets);
const resultV2b = getPathV2b(tickets);
const resultV2c = getPathV2c(tickets);

console.log("Result V1:", resultV1);
console.log("Result V2a:", resultV2a);
console.log("Result V2b:", resultV2b);
console.log("Result V2c:", resultV2c);
