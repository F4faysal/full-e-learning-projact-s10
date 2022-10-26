import React from "react";

const Faq = () => {
  return (
    <div className="w-full h-auto flex flex-col  items-center mb-20">
      <div className="bg-green-500 w-full flex flex-col  items-center py-10">
        <h1 className="text-5xl text-white font-semibold ">
          4 questions & answers
        </h1>
      </div>
      <p className="text-2xl text-slate-500 font-semibold md:w-1/2 mt-7 ">
        {" "}
        1 what is cors?
      </p>
      <p className="text-1xl text-slate-500 font-semibold md:w-1/2 mt-4 ">
        {" "}
        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
        that allows a server to indicate any origins (domain, scheme, or port)
        other than its own from which a browser should permit loading resources.
        CORS also relies on a mechanism by which browsers make a "preflight"
        request to the server hosting the cross-origin resource, in order to
        check that the server will permit the actual request. In that preflight,
        the browser sends headers that indicate the HTTP method and headers that
        will be used in the actual request.
      </p>
      <p className="text-2xl text-slate-500 font-semibold md:w-1/2 mt-7 ">
        {" "}
        2 Why are you using firebase? What other options do you have to
        implement authentication?
      </p>
      <p className="text-1xl text-slate-500 font-semibold md:w-1/2 mt-4 ">
        Firebase provides tools to grow your app and business, for startups &
        global enterprises. Get your app up and running quickly & securely with
        fully managed backend infrastructure. Boost App Engagement. Monitor App
        Performance. Release Apps Confidently.
        <br />
        Firebase Authentication provides backend services, easy-to-use SDKs, and
        ready-made UI libraries to authenticate users to your app. It supports
        authentication using passwords, phone numbers, popular federated
        identity providers like Google, Facebook and Twitter, and more.
        <br />
        Usually, authentication by a server entails the use of a user name and
        password. Other ways to authenticate can be through cards, retina scans,
        voice recognition, and fingerprints.
      </p>
      <p className="text-2xl text-slate-500 font-semibold md:w-1/2 mt-7 ">
        {" "}
        3 How does the private route work?
      </p>
      <p className="text-1xl text-slate-500 font-semibold md:w-1/2 mt-4 ">
        The private route component is similar to the public route, the only
        change is that redirect URL and authenticate condition. If the user is
        not authenticated he will be redirected to the login page and the user
        can only access the authenticated routes If he is authenticated (Logged
        in){" "}
      </p>
      <p className="text-2xl text-slate-500 font-semibold md:w-1/2 mt-7 ">
        {" "}
        4 What is Node? How does Node work?
      </p>
      <p className="text-1xl text-slate-500 font-semibold md:w-1/2 mt-4 ">
        {" "}
        Node. js is a JavaScript runtime environment that achieves low latency
        and high throughput by taking a “non-blocking” approach to serving
        requests. In other words, Node. js wastes no time or resources on
        waiting for I/O requests to return.
      </p>
    </div>
  );
};

export default Faq;
