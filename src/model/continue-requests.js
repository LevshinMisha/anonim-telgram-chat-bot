const requests = [];

export const addRequest = (user, other, username) => {
  requests.push({
    from: user,
    to: other,
    username
  });
}

const requestFind = (user, other) => i => i.from === user && i.to === other;

export const findRequest = (user, other) => {
  return requests.find(requestFind(user, other));
}

export const hasRequest = (user, other) => {
  return !!requests.find(requestFind(user, other));
}