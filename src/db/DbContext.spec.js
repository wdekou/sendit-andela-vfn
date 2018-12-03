import { Pool } from 'pg';
import { expect, should } from 'chai';
import sinon from 'sinon';

import DbContext from './DbContext';

should();
describe('DbContext', () => {
  const pool = new Pool({ connectionString: 'fake_connection_string' }); // because the obj will be mock
  const dbContext = new DbContext(pool);
  afterEach(() => {
    sinon.restore();
  });

  describe('getClient Function', () => {
    it('should be a Function ', () => {
      expect(dbContext.getClient).to.be.a('Function');
    });

    it('should be return a Promise', () => {
      sinon.stub(pool, 'connect').resolves();

      const dbClient = dbContext.getClient();
      expect(dbClient.then).to.be.a('Function');
      expect(dbClient.catch).to.be.a('Function');
    });

    it('should call the connect fn once on the pool obj', () => {
      sinon.stub(pool, 'connect').resolves();

      dbContext.getClient();
      expect(pool.connect.calledOnce).to.equal(true);
    });

    it('FIXME: should rethrows error emited by the connect fn on the pool obj', () => {
      sinon.stub(pool, 'connect').rejects('Error');
      // FIXME: UnhandledPromiseRejectionWarning: Erroor
      // dbContext.getClient();
    });
  });

  describe('query Function', () => {
    it('should be a Function', () => {
      expect(dbContext.query).to.be.a('Function');
    });

    it('should be return a Promise', () => {
      sinon.stub(pool, 'query').resolves();
      const queryText = 'SELECT NOW();';
      const queryParams = [];
      const queryResult = dbContext.query(queryText, queryParams);
      expect(queryResult.then).to.be.a('Function');
      expect(queryResult.catch).to.be.a('Function');
    });

    it('should call the query fn once on the pool obj with same params', () => {
      sinon.stub(pool, 'query').resolves();
      const queryText = 'SELECT NOW();';
      const queryParams = [];
      dbContext.query(queryText, queryParams);
      expect(pool.query.calledOnce).to.equal(true);
      expect(pool.query.calledWith(queryText, queryParams)).to.equal(true);
    });

    it('FIXME: should rethrows error emited by the query fn on the pool obj', () => {
      sinon.stub(pool, 'query').rejects('Error');
      // FIXME: UnhandledPromiseRejectionWarning: Erroor
      // dbContext.getClient();
    });
  });

  describe('releaseConnections Function', () => {
    it('should be a Function', () => {
      expect(dbContext.query).to.be.a('Function');
    });

    it('should be return a Promise', () => {
      sinon.stub(pool, 'end').resolves();
      const dbConnectionReleased = dbContext.releaseConnections();
      expect(dbConnectionReleased.then).to.be.a('Function');
      expect(dbConnectionReleased.catch).to.be.a('Function');
    });

    it('should call the end fn once on the pool obj', () => {
      sinon.stub(pool, 'end').resolves();

      dbContext.releaseConnections();
      expect(pool.end.calledOnce).to.equal(true);
    });

    it('FIXME: should rethrows error emited by the end fn on the pool obj', () => {
      sinon.stub(pool, 'end').rejects('Error');
      // FIXME: UnhandledPromiseRejectionWarning: Erroor
      // dbContext.getClient();
    });
  });
});
