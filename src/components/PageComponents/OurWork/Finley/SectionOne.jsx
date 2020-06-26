import React from "react";
import { Link } from "gatsby";
import LSidebar from "./LSidebar";

import { Finley8 } from "../../../../images/index";

const SectionOne = () => (
  <section id="main" className="wrapper sidebar right">
    <div className="inner">
      <header className="major">
        <h2>Finley Residence</h2>
        <p></p>
      </header>
      {/* Content */}
      <div className="content">
        <div href="#" className="image fit"><img src={Finley8} alt='' /></div>
        <h3>Dolore Amet Consequat</h3>
        <p>
        In vestibulum massa quis arcu lobortis tempus. Nam pretium arcu in
          odio vulputate luctus. Suspendisse euismod lorem eget lacinia
          fringilla. Sed sed felis justo. Nunc sodales elit in laoreet aliquam.
          Nam gravida, nisl sit amet iaculis porttitor, risus nisi rutrum metus.e.{" "}
        </p>
        <p>
        In vestibulum massa quis arcu lobortis tempus. Nam pretium arcu in
          odio vulputate luctus. Suspendisse euismod lorem eget lacinia
          fringilla. Sed sed felis justo. Nunc sodales elit in laoreet aliquam.
          Nam gravida, nisl sit amet iaculis porttitor, risus nisi rutrum metus.{" "}
        </p>
        <br />
        <h3>Dolore Amet Consequat</h3>
        <p>
        In vestibulum massa quis arcu lobortis tempus. Nam pretium arcu in
          odio vulputate luctus. Suspendisse euismod lorem eget lacinia
          fringilla. Sed sed felis justo. Nunc sodales elit in laoreet aliquam.
          Nam gravida, nisl sit amet iaculis porttitor, risus nisi rutrum metus.
        </p>
        <h3>Dolore Amet Consequat</h3>
        <p>
          In vestibulum massa quis arcu lobortis tempus. Nam pretium arcu in
          odio vulputate luctus. Suspendisse euismod lorem eget lacinia
          fringilla. Sed sed felis justo. Nunc sodales elit in laoreet aliquam.
          Nam gravida, nisl sit amet iaculis porttitor, risus nisi rutrum metus.
        </p>
        <ul>
          <li>Faucibus orci lobortis ac adipiscing integer.</li>
          <li>Col accumsan arcu mi aliquet placerat.</li>
          <li>Lobortis vestibulum ut magna tempor massa nascetur.</li>
          <li>Blandit massa non blandit tempor interdum.</li>
          <li>Lacinia mattis arcu nascetur lobortis.</li>
        </ul>
      </div>
      <LSidebar />
    </div>
  </section>
);

export default SectionOne;
