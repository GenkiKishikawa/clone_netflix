import { Row } from './components/Row';
import { requests } from './request';
import './App.css';

function App() {
  return (
    <div className="App">
      <Row
        title="NETFLIX ORIGUINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOcumentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default App
