import React from 'react'

const Home = () => {
  return (
    <>
      <div>
        <section id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder">introduct yourself "<br></br> to the world who are you</h1>
              <p className="intro">Fill the information what is your<br></br>
              Profession what is your abiltiy for other requirement<br></br>
              and get the opportunity to work your dream
              </p>
              <button type="button" class="btn btn-danger rounded-pill">Danger</button>
              </div>
            </div>
            <div className="img1">
            <img src="https://img.freepik.com/free-photo/portrait-happy-excited-man-holding-laptop-computer_171337-12121.jpg?size=626&ext=jpg" class="rounded float-end " alt="boy_wcomp"  ></img>
            </div>
          </div>
        </section>
        
      </div>
    </>
  )
}

export default Home