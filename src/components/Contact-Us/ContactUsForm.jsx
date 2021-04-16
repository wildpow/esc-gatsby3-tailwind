/* eslint-disable react/jsx-curly-newline */
import React, { useReducer } from "react";
import { navigate } from "gatsby";

// import { PrimaryButton } from "../shared/Buttons";
import SendIcon from "../../svg/paper-plane-solid.svg";
import ResetIcon from "../../svg/redo-solid.svg";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  tel: "",
  type: "",
  message: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.payload };
    case "lastName":
      return { ...state, lastName: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "tel":
      return { ...state, tel: action.payload };
    case "type":
      return { ...state, type: action.payload };
    case "message":
      return { ...state, message: action.payload };
    case "reset":
      return { ...initialState };
    default:
      throw new Error();
  }
};
// const FormButtons = styled(PrimaryButton)`
//   padding-right: 20px;
//   padding-left: 20px;
// `;

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
const ContactUsForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };
  return (
    <form
      name="contact"
      method="post"
      action="/thank-you"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="sm:rounded sm:border-blueGray-400 sm:border p-1 sm:p-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label htmlFor="bot-field">
          Don’t fill this out:
          <input
            name="bot-field"
            onChange={() => console.log("Don’t fill this out")}
          />
        </label>
      </p>

      <fieldset>
        <div className="flex justify-between flex-col sm:flex-row sm:mb-6">
          <label
            htmlFor="firstName"
            id="firstName"
            className="input-label flex flex-col w-full sm:w-5/12 mb-6 sm:mb-0"
          >
            <span className="font-medium">First Name</span>
            <input
              className="rounded-sm border-blueGray-300 shadow "
              placeholder="Percival"
              required
              type="text"
              id="firstName"
              name="firstName"
              autoComplete="given-name"
              value={state.firstName}
              onChange={e =>
                dispatch({ type: "firstName", payload: e.target.value })
              }
            />
          </label>

          <label
            htmlFor="lastName"
            id="lastName"
            className="input-label flex flex-col w-full sm:w-5/12 mb-6 sm:mb-0"
          >
            <span>Last Name</span>
            <input
              className="rounded-sm border-blueGray-300 shadow"
              required
              type="text"
              id="lastName"
              name="lastName"
              autoComplete="family-name"
              placeholder="Panda"
              value={state.lastName}
              onChange={e =>
                dispatch({ type: "lastName", payload: e.target.value })
              }
            />
          </label>
        </div>
        <div className="flex justify-between flex-col sm:flex-row mb-6">
          <label
            htmlFor="tel"
            className="input-label flex flex-col w-full sm:w-5/12 mb-6 sm:mb-0"
          >
            <span>Phone</span>
            <input
              className="rounded-sm border-blueGray-300 shadow"
              autoComplete="tel-national"
              pattern="^[0-9-+s()]*$"
              type="tel"
              name="tel"
              placeholder="***-***-****"
              value={state.tel}
              onChange={e => dispatch({ type: "tel", payload: e.target.value })}
            />
          </label>
          <label
            htmlFor="email"
            className="input-label flex flex-col w-full sm:w-5/12 mb-6 sm:mb-0"
          >
            <span>Email</span>
            <input
              className="rounded-sm border-blueGray-300 shadow"
              required
              placeholder="youremail@email.com"
              type="email"
              name="email"
              autoComplete="email"
              value={state.email}
              onChange={e =>
                dispatch({ type: "email", payload: e.target.value })
              }
            />
          </label>
        </div>

        <label htmlFor="message" className="message flex flex-col">
          <textarea
            onChange={e =>
              dispatch({ type: "message", payload: e.target.value })
            }
            className="rounded-sm border-blueGray-300 shadow"
            placeholder="Enter your message here..."
            required
            type="text"
            value={state.message}
            name="message"
          />
        </label>
        <div className="bottom-buttons">
          <button
            danger
            type="button"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
            <ResetIcon />
          </button>
          <button type="submit">
            Submit
            <SendIcon />
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default ContactUsForm;
