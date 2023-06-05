import React, { useState } from "react";
import "./CreateCoursePack.css";
import { ChevronRightIcon,XCircleFillIcon, CheckCircleFillIcon } from "@primer/octicons-react";
import emptyimage from "../../../../../assets/emptyimage.jpg";
import { createCourse } from "../../../../api/api";

const CreateCourseForm = () => {
  const [titre, setCourseTitle] = useState("");
  const [discipline_id, setCourseDiscipline] = useState(null);
  const [classe_id, setTypeClass] = useState("");
  const [niveau, setLevel] = useState("");
  const [price, setLatestPrice] = useState("");
  const [description, setShortDescription] = useState("");
  const [background_image, setBackgroundImage] = useState(null);
  const [video, setVideoFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCourseTitleChange = (event) => {
    setCourseTitle(event.target.value);
  };

  const handleCourseDisciplineChange = (event) => {
    const selectedValue = parseInt(event.target.value, 10);
    setCourseDiscipline(selectedValue);
  };

  const handleTypeClassChange = (event) => {
    const selectedValue = parseInt(event.target.value, 10);
    setTypeClass(selectedValue);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleLatestPriceChange = (event) => {
    setLatestPrice(event.target.value);
  };

  const handleShortDescriptionChange = (event) => {
    setShortDescription(event.target.value);
  };

  const handleBackgroundChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setBackgroundImage(file);
    }
  };

  const handleVideoFileChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setVideoFile(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const courseData = {
      titre: titre,
      discipline_id: discipline_id,
      classe_id: classe_id,
      niveau: niveau,
      price: parseFloat(price),
      description: description,
      background_image: background_image,
      video: video,
    };

    try {
      const response = await createCourse(courseData);
      setSuccessMessage("Course created successfully");
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      console.log("Response:", response); // Handle the response or perform any necessary actions
    } catch (error) {
      setErrorMessage("Failed to create course");
      setShowErrorMessage(true);

      // Hide error message after 7 seconds
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 7000);
      console.error("Failed to create course:", error);
      // Handle the error, show an error message, etc.
    }
  };

  return (
    <>
      <div className="create-course-container">
        <div className="container">
          <div className="create-course-form">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-form">
                  <div className="form-group">
                    <label className="form-label">Course Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Course Title"
                      value={titre}
                      onChange={handleCourseTitleChange}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Course Discipline</label>
                    <select
                      className="form-select"
                      value={discipline_id || ""}
                      onChange={handleCourseDisciplineChange}
                    >
                      <option value="">Select</option>
                      <option value={1}>Yoga</option>
                      <option value={2}>Sophrologie</option>
                      <option value={3}>Yoga therapie</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Type Class</label>
                    <select
                      className="form-select"
                      value={classe_id}
                      onChange={handleTypeClassChange}
                    >
                      <option value="">Select</option>
                      <option value={1}>Vinyasa</option>
                      <option value={2}>Yin</option>
                      <option value={3}>Relaxation dynamique</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Level</label>
                    <select
                      className="form-select"
                      value={niveau}
                      onChange={handleLevelChange}
                    >
                      <option value="">Select</option>
                      <option value="Débutant">Débutant</option>
                      <option value="Intermédiaire">Intermédiaire</option>
                      <option value="avancée">Avancée</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Latest Price</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="29.99 DH"
                      aria-describedby="latest_price_help"
                      value={price}
                      onChange={handleLatestPriceChange}
                    />
                    <div id="latest_price_help" className="form-text">
                      The latest price will show as the course price.
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Thumbnail Image:</label>
                    <input
                      type="file"
                      className="form-control file-control"
                      name="background_image"
                      accept="image/*"
                      onChange={handleBackgroundChange}
                    />
                    {background_image && (
                      <img
                        src={background_image}
                        alt="thumbnail"
                        className="img-thumbnail w-100px me-2 mt-2"
                      />
                    )}
                    {!background_image && (
                      <img
                        src={emptyimage}
                        alt="image"
                        className="img-thumbnail w-100px me-2 mt-2"
                      />
                    )}
                    <div className="form-text">Upload image size 750x550!</div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Video File:</label>
                    <input
                      type="file"
                      className="form-control file-control"
                      name="video"
                      accept="video/*"
                      onChange={handleVideoFileChange}
                    />
                  </div>
                </div>

                <div className="col-form">
                  <div className="form-group">
                    <label className="form-label">Short Description</label>
                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Short description"
                      value={description}
                      onChange={handleShortDescriptionChange}
                    ></textarea>
                  </div>
                </div>

                <div className="col-md-12">
                  <button type="submit" className="create-course-btn">
                    Create Course <ChevronRightIcon size={20} />
                  </button>
                </div>
                {errorMessage && (
                  <div className="error-message">
                    <XCircleFillIcon className="message-icons" size={16} />
                    {errorMessage}
                  </div>
                )}
                {successMessage && (
                  <div className="success-message">
                    <CheckCircleFillIcon className="message-icons" size={16} />{" "}
                    {successMessage}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCourseForm;
