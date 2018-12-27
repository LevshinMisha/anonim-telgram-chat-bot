let requests = [];

export const addRequest = (user, other, username) => {
  requests.push({
    from: user,
    to: other,
    username
  });
}

const requestFind = (user, other) => i => i.from === user && i.to === other;

export const findRequest = (user, other) => {
  console.info('123', requests);
  return requests.find(requestFind(user, other));
}

export const hasRequest = (user, other) => {
  return !!requests.find(requestFind(user, other));
}

export const deleteRequests = (users) => {
  requests = requests.filter(i => !users.includes(i.from) && !users.includes(i.to));
}