import React from "react";

export default function Form() {
  return (
    <>
      <div className="container " style={{ backgroundColor: "#beb8c9" ,marginTop:"104px", with:"100vw"}}>
        <div className="row align-items-start">
          <div className="col">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Identifler
              </label>
              <input type="text" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="inputPassword4" />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Descripton
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>

              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">
                  Extra link
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                />
              </div>

              <div className="mb-3">
                <label for="inputEmail4" className="form-label">
                  Constant type
                </label>
                <select className="form-select" aria-label="Default select example">
                  <option selected>select Consent types</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <label for="customRange3" className="form-label">
                Example range
              </label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="5"
                step="0.5"
                id="customRange3"
              />
            </div>
          </div>
          <div className="col">
            <h5 style={{ color: "blue" }}>Business process steps</h5>
            <div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Step Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="step name"
                />
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
              <button className="btn btn-primary me-md-2 mx-1" type="button">
                Cancel
              </button>
              <button className="btn btn-dark" type="button">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
