import React, { useState } from "react";
import Modal from "react-modal";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { ErrorMessage } from "@hookform/error-message";
import MapComponent from "components/Admin/Providers/Map/MapComponent";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  overlay: {
    zIndex: 99999999999,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: "75vh",
    zIndex: 99999999999,
  },
};

export default function LocationDetail({
  showLocationModal,
  setShowLocationModal,
  claimDetails,
  register,
  errors,
  _hanldeLocationSave,
  handleFieldChange,
}) {
  const { Location, Latitude, Longitude } = claimDetails;
  const zoom = 7;
  const [error, setError] = useState("");

  const _mapRender = (status) => {
    // if (status === Status.LOADING) return <h3>{status} ..</h3>;
    // if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    // return null;
    return <p>{status}</p>;
  };

  const handleSave = () => {
    if (Location !== "") {
      _hanldeLocationSave(Location, Latitude, Longitude);
      setError("");
    } else {
      setError("Location is requred");
    }
  };

  return (
    <>
      <div class="ltnd__block-area">
        <div class="row">
          <div class="col-lg-12">
            <div class="ltnd__block-item mt-30">
              <div class="ltnd__space-between">
                <div class="ltnd__title ltnd__title-2">
                  <h4>Location information</h4>
                </div>
              </div>
              <div class="ltn__block-item-info ltnd__policies-details-info">
                {Location !== "" ? (
                  <>
                    <p>
                      <b>Location: </b> {Location}
                    </p>
                    <p>
                      <b>Latitude:</b> {Latitude}
                    </p>
                    <p>
                      <b>Longitude:</b> {Longitude}
                    </p>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div
                className="btn theme-btn-1 btn-round-12"
                onClick={() => setShowLocationModal(!showLocationModal)}
              >
                { Location !== "" ? "Update Location" : "Add Location" }
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        style={styles}
        isOpen={showLocationModal}
        onRequestClose={() => setShowLocationModal(!showLocationModal)}
      >
        <div className={styles.container}>
          <h4>Add Location information</h4>

          <input
            type="text"
            {...register("Location")}
            name="Location"
            value={Location}
            onChange={handleFieldChange}
            placeholder="Enter Location"
            required
          />
          {error !== "" && <p style={{ color: "red" }}>{error}</p>}

          <Wrapper
            apiKey="AIzaSyDC08zJVNOeiRvDJkE3S8vNbixfw8jTV1g"
            render={_mapRender}
          >
            <MapComponent
              height={290}
              center={{ lat: parseFloat(Latitude), lng: parseFloat(Longitude) }}
              zoom={zoom}
            />
          </Wrapper>

          <p>
            <b>Latitude:</b> {Latitude}
          </p>
          <p>
            <b>Longitude:</b> {Longitude}
          </p>
        </div>

        <button
          className="btn theme-btn-1 btn-round-12"
          style={{ float: "right" }}
          onClick={handleSave}
          type="submit"
        >
          Save
        </button>
      </Modal>
    </>
  );
}
