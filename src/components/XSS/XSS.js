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

// Used to remove XSS attasks
const removeXSSAttacks = html => {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  // Removing the <script> tags
  while (SCRIPT_REGEX.test(html)) {
  html = html.replace(SCRIPT_REGEX, '');
  }
  // Removing all events from tags...
  html = html.replace(/ on\w+="[^"]*"/g, '');
  return {
  __html: html
  }
  };
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
            <p dangerouslySetInnerHTML={ removeXSSAttacks(post.content)} />
          </div>
        ))}
      </div>
    );
  }
}
