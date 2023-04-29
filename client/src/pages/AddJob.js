import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import { Button, Dropdown, Form } from "react-bootstrap";
import CustomInput from "../components/customInput/CustomInput";
import { addJob } from "../utils/AxiosHelper";
import { toast } from "react-toastify";

export const AddJob = () => {
  const [form, setForm] = useState({});
  const inputField = [
    {
      name: "title",
      type: "text",
      label: "Job Title",
      required: true,
      placeholder: "John",
    },
    {
      name: "jd",
      type: "text",
      label: "Job Description",
      required: true,
      placeholder: "",
    },
    {
      name: "link",
      type: "text",
      label: "Job Link",
      required: true,
      placeholder: "",
    },
    {
      name: "appliedDate",
      type: "date",
      label: "Applied Date",
      required: true,
      placeholder: "****",
    },
    // {
    //   name: "Status",
    //   type: "password",
    //   label: "Confirm Password",
    //   required: true,
    //   placeholder: "****",
    // },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  console.log(form);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await addJob(form);
    toast[status](message);
    console.log(form);
  };

  return (
    <Layout>
      {/* <div className="container">
        <h1 className="text-center">Add Job</h1>
        <div className="formarea">
          <form onSubmit={handleSubmit}>
            <label>
              Job Title:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Company:
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </label>
            <label>
              Job Description:
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label>
              Job Description:
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
        
      </div> */}

      <div className=" mt-4 p-2 register">
        <div className="register-form">
          <h2 className="fw-bold text-center">Add Job</h2>
          <hr />

          <Form className="mt-4" onSubmit={handleSubmit}>
            {inputField.map((item, i) => {
              return <CustomInput key={i} {...item} onChange={handleChange} />;
            })}

            {/* <label for="jobstatus">Job Status</label> */}
            <Form.Select
              name="status"
              value={form.status}
              onChange={handleChange}
              label="Choose the Job Status"
              required>
              <option value="">Choose</option>
              <option value="applied">Applied</option>
              <option value="wantToApply">Want to Apply</option>
              {/* <option value="3">Three</option> */}
            </Form.Select>

            <div className="d-grid mt-3">
              <Button variant="info" type="submit">
                Save Job
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
};
