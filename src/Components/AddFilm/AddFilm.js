import "bootstrap/dist/css/bootstrap.min.css";
import "./AddFilm.css";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export function AddFilm({ add }) {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [year, setyear] = useState("");
  const [trailer, settrailer] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    settitle("");
    setdescription("");
    setposter("");
    setrating("");
    setyear("");
    settrailer("");
  };
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    const newValues = {
      title: title,
      posterURL: poster,
      description: description,
      rating: rating,
      year: year,
      trailer: trailer,
    };
    add(newValues);
    handleClose();
    settitle("");
    setdescription("");
    setposter("");
    setrating("");
    setyear("");
    settrailer("");
  };

  return (
    <>
      <Button className="addbtn" variant="primary" onClick={handleShow}>
        <img src="../images/plus.jpg" id="plus-icon" alt="plus-logo" /> Add to
        WatchList
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add the new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div>
              <div class="col-25">
                <label className="input">Title: </label>
              </div>
              <div class="col-75">
                <input
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                  type="text"
                  placeholder="title"
                ></input>
              </div>
            </div>
            <div>
              <div class="col-25">
                <label className="input">Description: </label>
              </div>
              <div class="col-75">
                <input
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  type="text"
                  placeholder="description"
                ></input>
              </div>
            </div>
            <div>
              <div class="col-25">
                <label className="input">Poster: </label>
              </div>
              <div class="col-75">
                <input
                  value={poster}
                  onChange={(e) => setposter(e.target.value)}
                  type="text"
                  placeholder="poster"
                  min={0}
                  max={5}
                ></input>
              </div>
            </div>
            <div>
              <div class="col-25">
                <label className="input">Rating: </label>
              </div>
              <div class="col-75">
                <input
                  value={rating}
                  onChange={(e) => setrating(e.target.value)}
                  type="number"
                  min={0}
                  max={5}
                  placeholder="rating"
                ></input>
              </div>
            </div>
            <div>
              <div class="col-25">
                <label className="input">Release Date: </label>
              </div>
              <div class="col-75">
                <input
                  value={year}
                  onChange={(e) => setyear(e.target.value)}
                  type="text"
                  placeholder="year"
                ></input>
              </div>
            </div>
            <div>
              <div class="col-25">
                <label className="input">Trailer: </label>
              </div>
              <div class="col-75">
                <input
                  value={trailer}
                  onChange={(e) => settrailer(e.target.value)}
                  type="text"
                  placeholder="trailer"
                ></input>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
