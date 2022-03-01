import React from "react";
// import '../../../assets/bootstrap/css/Sample.module.css'

const Sample = () => {
  return (
    <div>
      <div class="input-group mb-3">
        <button
          class="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Separated link
            </a>
          </li>
        </ul>
        <input
          type="text"
          class="form-control"
          aria-label="Text input with dropdown button"
        />
      </div>
    </div>
  );
};

export default Sample;
