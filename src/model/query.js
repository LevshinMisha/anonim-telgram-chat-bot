let query = null;

export const addToQuery = user => { query = user; }

export const clearQuery = () => { query = null; }

export const isQueryEmpty = () => query === null;

export const getQuery = () => query;

export const queryContains = user => query === user;