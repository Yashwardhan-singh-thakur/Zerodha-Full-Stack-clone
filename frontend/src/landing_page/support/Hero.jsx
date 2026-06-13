export default function Hero() {
  return (
    <div className="container-fluid mt-5">
      <div
        className="row px-sm-5"
        style={{ backgroundColor: "#F6F6F6", height: "13rem" }}
      >
        <div className="col-12 d-flex justify-content-between  align-items-center mt-5 mb-3">
          <h1 className="fs-2 fw-bold text-center  text-dark-emphasis  ">
            Support Portal
          </h1>
          <button
            className="btn btn-primary p-2 fw-medium  custom-btn "
            style={{
              width: "7rem",
              height: "2.5rem",
              lineHeight: "1rem",
              fontSize: "1rem",
            }}
          >
            My tickets
          </button>
        </div>
        <div className="col-12">
          <div className="input-group mb-3">
            <span className="input-group-text bg-white px-3 rounded-0">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0 py-3 shadow-none  no-focus rounded-0"
              placeholder="Eg: How do I open my account, How do i activate F&O..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
