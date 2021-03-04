import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './app';


const { expect } = chai;
chai.use(chaiHttp);

describe('', () => {
  it('', (done) => {
    chai.request(app)
    .get('/')
    .end((err, res) => {
      expect(res.statusCode).to.equal(200),
      expect(res.body.status).to.equal('success'),
      expect(res.body.message).to.equal('!!! welcome to deploying express to aws elastic beanstalk ci/cd')
      done();
    });
  })
})