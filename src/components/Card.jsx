

export default function Card({ data }) {
  return (
    <>
      {/* <div className="card m-5">
        <img
          className="card-img-top"
          src="../../.learn/assets/Dylan.png?raw=true"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Bob Dylan</h5>
          <p className="card-text">
            Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American
            singer/songwriter, author, and artist who has been an influential
            figure in popular music and culture for more than five decades.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Bob_Dylan"
            className="btn btn-primary"
          >
            Go to wikipedia
          </a>
        </div>
      </div> */}
      <div className="card m-5">
        <img className="card-img-top" src={data.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{data.cardTitle}</h5>
          <p className="card-text">{data.cardDescription}</p>
          <a href={data.button.url} className="btn btn-primary">
            {data.button.label}
          </a>
        </div>
      </div>
    </>
  );
}
