class DbContext {
  constructor(pool) {
    this.pool = pool;
  }

  getClient() {
    return this.pool.connect();
  }

  query(text, params) {
    return this.pool.query(text, params);
  }

  releaseConnections() {
    return this.pool.end();
  }
}

export default DbContext;
