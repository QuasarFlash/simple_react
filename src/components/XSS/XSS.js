import React, { Component } from "react";
import "./XSS.css";
// content from service plus XSS attacks
const response = [
  {
    id: 1,
    title: "My Blog post 1...",
    content: "<p> This is <strong>HTML</strong></p>",
  },
  {
    id: 2,
    title: "My Blog post 2...",
    content: `<p>Alert: <script>alert(1);</script></p>`,
  },
  {
    id: 3,
    title: "My Blog post 3...",
    content: `<p> 
    <img onmouseover="alert('This site is not secure');"
    src="attack.jpg"/>
    </p>`,
  },
];

//injected into DOM
const initialState = JSON.stringify(response);

export default class XSS extends Component {
  render() {
    //parse json string to object
    const posts = JSON.parse(initialState);
    // React prevents injecting HTML code directly into components
    return (
      <div className="XSS">
        {posts.map((post, key) => (
          <div key={key}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>
              <strong>Insecure Code:</strong>
            </p>
            <p dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        ))}
      </div>
    );
  }
}
