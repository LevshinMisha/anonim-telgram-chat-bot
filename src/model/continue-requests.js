const requests = [];

export const addRequest = (user, other, userInfo) => {
  requests.push({
    from: user,
    to: other,
    userInfo
  });
}

const requestsFilter = (u1, u2) => i => {
  return (i.from === u1 && i.to === u2) || (i.from === u2 && i.to === u1);
}

export const hasRequest = (user, other) => {
  return requests.filter(requestsFilter(user, other)).length;
}