import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";
import { Button, Container } from "react-bootstrap";

const Blog = () => {
  const downloadPDF = () => {
    const capture = document.querySelector(".blogs-container");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "pt", "a4");
      const componentWidth = pdf.internal.pageSize.getWidth();
      const componentHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      pdf.save("Blog.pdf");
    });
  };
  return (
    <Container>
      <div className="text-center mt-5">
        Download Blogs:{" "}
        <Button onClick={downloadPDF} className="bg-warning">
          Download
        </Button>
      </div>
      <div className="blogs-container">
        <div className=" p-4 my-5 ">
          <h3>1. Tell us the differences between uncontrolled and controlled components.</h3>
          <div>
            <span className="fw-bold text-warning">Answer: </span>
            Uncontrolled and controlled components are terms commonly used in the context of
            building user interfaces in web development. Here are their differences:
            <ul>
              <li>
                Definition: An uncontrolled component is a form element whose value is handled by
                the DOM (Document Object Model), whereas a controlled component is a form element
                whose value is handled by React.
              </li>
              <li>
                Data Flow: In an uncontrolled component, the data flow is handled by the browser,
                while in a controlled component, the data flow is controlled by React.
              </li>
              <li>
                Value Management: In an uncontrolled component, the value of the form element is
                managed by the DOM and is accessed using a ref. In contrast, in a controlled
                component, the value of the form element is managed by the React state and is
                accessed through event handlers.
              </li>
              <li>
                Accessibility: Uncontrolled components are less accessible as they require more
                manual coding and do not have built-in accessibility features. Controlled
                components, on the other hand, are more accessible as they can be easily modified to
                include accessibility features.
              </li>
              <li>
                Validation: In an uncontrolled component, form validation is typically done using
                HTML attributes or JavaScript. In contrast, in a controlled component, form
                validation is typically done using React's state and props.
              </li>
            </ul>
          </div>
        </div>
        <div className=" p-4 mb-5 ">
          <h3>2. How to validate React props using PropTypes?</h3>
          <div>
            <span className="fw-bold text-warning">Answer: </span>
            PropTypes is a utility library built into React that allows you to define the expected
            data types of the props passed to your component. To use PropTypes, you first import it
            at the top of your component file. Then, you define the PropTypes for your component by
            adding a propTypes object to your component class or function. The PropTypes object maps
            the name of each prop to its expected data type, and you can use a variety of built-in
            validators to create complex validation rules. When a prop is passed to your component,
            React will automatically validate it against the PropTypes you defined, and if the prop
            is invalid, React will display a warning in the console. By using PropTypes to validate
            your props, you can catch errors early in development and ensure that your component is
            being used correctly.
          </div>
        </div>
        <div className=" p-4 mb-5 ">
          <h3>3.Tell us the difference between nodejs and express js.</h3>
          <div>
            <span className="fw-bold text-warning">Answer: </span>
            Node.js is a runtime environment for executing JavaScript code, while Express.js is a
            web application framework built on top of Node.js. Node.js provides a platform for
            running JavaScript code outside of a web browser and comes with built-in modules for
            handling tasks such as file system access and networking. Express.js provides a
            framework for building web applications using Node.js, with features like routing,
            middleware, and template rendering. Node.js can be used for a wide range of
            applications, while Express.js is specifically designed for building web applications.
            Both technologies have their own strengths and weaknesses, and the choice between them
            depends on the specific needs of your project
          </div>
        </div>
        <div className=" p-4 mb-5 ">
          <h3>4.What is a custom hook, and why will you create a custom hook?</h3>
          <div>
            <span className="fw-bold text-warning">Answer: </span>
            A custom hook is a reusable function that contains some logic and state that can be
            shared across multiple React components. Custom hooks are used to extract and
            encapsulate common logic that may be repeated in multiple components, providing a
            cleaner and more modular codebase. <br /> Custom hooks are created to solve specific
            problems and make code more reusable. For example, you might create a custom hook that
            fetches data from an API and returns it as a result, or a hook that manages the state of
            a form across multiple components. Custom hooks can also be used to share functionality
            across different parts of an application, allowing you to avoid repeating the same code
            in multiple places. <br />
            There are a few key benefits to using custom hooks. First, they help to keep your code
            modular and organized by encapsulating common functionality in a single place. Second,
            they can improve the reusability of your code by allowing you to share functionality
            across multiple components. Third, custom hooks can simplify your code by abstracting
            away complex logic and making it easier to reason about. <br />
            Overall, creating custom hooks is a powerful technique for improving the maintainability
            and reusability of your React applications.
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
