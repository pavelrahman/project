import Layout from '../components/Layout';
import Container from '../components/Container';
let About = ()=>{
    return (
      <Layout title={'About'}>
        <Container>
            <div>
              <h1>This is the about page</h1>
              {/* <a href='http://localhost:3000'>Go To Home Page</a> */}
            </div>
        </Container>
      </Layout>
    )
  }

  export default About;