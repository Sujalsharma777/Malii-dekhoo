import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useSelector } from "react-redux";
import { Flip, toast, ToastContainer } from "react-toastify";
import api from "../../API/api.jsx";
import { useNavigate } from "react-router-dom";
const CreateServices = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const [file, setfile] = useState(null);
  const [close , setclose] = useState(false)
const isDisable = close
  const [Input, SetInput] = useState({
    service_name: "",
    service_description: "",
    category: "",
    service_category: "",
    service_price: "",
    contact: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    start_time: "",
    end_time: "",
  });
  const handleimage = (e) => {
    setfile(e.target.files[0]);
  };

  const handleinput = (e) => {
    const { name, value } = e.target;
    SetInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  const formData = new FormData();
  Object.entries(Input).forEach(([key, value]) => {
    // Append all text values
    formData.append(key, value);
  });
  formData.append("service_image", file);
  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const create = await api.post("/supplier/createAppointment", formData);
      const { success, message, error } = create.data;

      if (success) {
        toast.success("Appointment Publish");
        setclose(true)
        navigate("/Manager");
      } else if (!success) {
        toast.error(message);
      } else if (error) {
        toast.error(error);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      <div className="hero p-10 mb-10">
        <div className="absolute top-5 right-10">
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
            theme="dark"
            transition={Flip}
          />
        </div>
        <div>
          <h1 className="text-center pb-10 text-2xl font-bol underline underline-offset-4 ">
            Create Your Services
          </h1>
          <form onSubmit={handlesubmit} encType="multipart/form-data">
            <div className="flex justify-center items-center flex-col gap-5 ">
              <label htmlFor="image" className="label">
                {" "}
                Upload Image
                <input
                  type="file"
                  onChange={handleimage}
                  name="service_image"
                  id="service_image"
                  accept=".png, .jpg, image/jpeg"
                  required
                  className="file-input validator file-input-ghost"
                />
              </label>
              <input
                type="text"
                onChange={handleinput}
                value={Input.service_name}
                name="service_name"
                id="service_name"
                placeholder="What Kind Of Services Name "
                required
                className="input validator"
              />
              <textarea
                type="text"
                onChange={handleinput}
                value={Input.service_description}
                name="service_description"
                id="service_description"
                placeholder="Description "
                required
                className=" textarea validator"
              />
              <select
                name="category"
                id="category"
                className="select validator"
                onChange={handleinput}
                value={Input.category}
              >
                <option value="">Category</option>
                <option value="Weed removal">Weed removal</option>
                <option value="Vertical gardening">Vertical gardening</option>
                <option value="Landscape design">Landscape design</option>
                <option value="Terrace/rooftop gardens">
                  Terrace/rooftop gardens
                </option>
                <option value="Corporate/commercial gardening">
                  Corporate/commercial gardening
                </option>
              </select>

              <label htmlFor="ServiceKey" className="label text-md pb-2 ">
                {" "}
                Service Price
              </label>
              <div className="grid grid-cols-2 gap-2 " id="PriceCon">
                <input
                  type="text"
                  onChange={handleinput}
                  value={Input.service_category}
                  name="service_category"
                  id="service_category"
                  className="input validator"
                  placeholder="Gardening"
                />
                <input
                  type="text"
                  onChange={handleinput}
                  value={Input.service_price}
                  name="service_price"
                  id="service_price"
                  className="input validator"
                  placeholder="Price: $10"
                />
              </div>

              <label htmlFor="startdate" className="input">
                <span className="label">Start date</span>
                <input
                  type="date"
                  onChange={handleinput}
                  value={Input.start_time}
                  name="start_time"
                  id="start_time"
                  className="input validator"
                />
              </label>
              <label htmlFor="" className="input">
                <span className="label">Last date</span>

                <input
                  type="date"
                  onChange={handleinput}
                  value={Input.end_time}
                  name="end_time"
                  id="end_time"
                  className="input validator"
                  placeholder="Last Date"
                />
              </label>

              <input
                type="text"
                onChange={handleinput}
                value={(Input.contact = userInfo.contact)}
                name="contact"
                id="contact"
                placeholder="Mobile Number"
                className="input "
              />
              <input
                type="text"
                onChange={handleinput}
                value={(Input.city = userInfo.city)}
                name="city"
                id="city"
                placeholder="City"
                className="input "
              />
              <input
                type="text"
                onChange={handleinput}
                value={(Input.district = userInfo.district)}
                name="district"
                id="district"
                placeholder="District"
                className="input"
              />
              <input
                type="text"
                onChange={handleinput}
                value={(Input.state = userInfo.state)}
                name="state"
                id="state"
                placeholder="state"
                className="input "
              />
              <input
                type="text"
                onChange={handleinput}
                value={(Input.pincode = userInfo.pincode)}
                name="pincode"
                id="pincode"
                placeholder="Zipcode"
                className="input "
              />

              <button type="submit" className="btn bg-sky-600 hover:bg-sky-800"  disabled={isDisable}>
                {" "}
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateServices;
