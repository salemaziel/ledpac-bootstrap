import React from "react";
import LSidebar from "./LSidebar";
import SectionTwo from "./SectionTwo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { CostcoAfter, CostcoAfter_1 } from "../../../../images/index";

const SectionOne = () => (
  <section id="main" className="wrapper sidebar right">
    <div className="inner">
      <header className="major">
        <h2>Costco Jewelry</h2>
        <p></p>
      </header>
      {/* Content */}
      <div className="content">
        <div className="image fit">
          <img src={CostcoAfter} alt="" />
        </div>
        <h3>A Case Study: Do Brighter Lights Boost Jewelry Sales? </h3>
        <p>
          LED lighting by LEDpac was installed in the typical jewelry case in a
          test store in Irvine, California. The test has resulted in a
          significant increase in sales of quality jewelry in just a few weeks,
          including more sales of high end diamonds. An independent study was
          done on the Costco Jewelry Case LED lighting for informative purposes
          by an independent lighting designer.{" "}
        </p>
        <p>
          Diamonds facets are designed to create sparkle by reflecting and
          refracting light which comes from various angles. Each facet reflects
          the light sources that impinge on the surface. As the case was
          originally designed, there were 1 or 2 50Watt MR16 low voltage lamps
          located above head height in the top of the case shining down through
          the case glass. Each facet of each diamond reflects the small quantity
          of lights from above. With the new LED case lighting, there are
          multiple LED's per case. Each facet of each diamond has the
          opportunity to see multiple LED's, and the level of sparkle increases
          nearly five-fold. This increased sparkle is evident as a customer
          traverses in front of or beside a display case, and the sparkle
          movement is attractive to the peripheral vision of the eye. In simple
          terms, it will make the customer turn their head to look. When viewing
          the diamond directly in the case, the diamond has an increased level
          of sparkle due to the increased number of reflections. The increased
          sparkle makes the diamonds look more expensive, and therefore more
          worthy of being purchased. The same is true of polished surfaces such
          as watch bezels, crystals and metal bands. Edges, corners and surfaces
          also reflect an increased number of light sources making them seem
          more polished and more expensive.{" "}
        </p>

        <br />
        <SectionTwo />
        {/*<h3>Amplified Depth</h3>
        <p>
        In the original design, the single downlight creates a flat, uninteresting light on the top of the case. Glare from the glass makes viewing product through the glass more difficult. There is a single shadow and little depth to the lighting. Additionally, when a customer bends over to look into the case, they have the chance of blocking the lighting from above. The LEDpac LED case lighting kit is from the inside front edge of the case, making it impossible to block the lighting from overhead, and giving a general wash of lighting to the whole case. The lighting also creates a series of shadows which increase the depth and interest of the lighting, providing shadow and contrast in various ways on products which are displayed. In addition, the existing overhead lighting illuminates the perimeter metal banding of the case, thus reducing contrast, while the internal LED case lighting leaves the perimeter metal in darkness, increasing the contrast of the brighter product to the darker surrounding case.
        </p>
        <h3>Improved Color of Light
</h3>
        <p>
        LEDpac chose a specific LED color blend which has a unique quality of light. The increased color temperature of the light source provides a cooler light which is more flattering to the typical diamond. Warmer light tends to make the typical diamond or other gem stone more yellow and less clear in appearance. The cooler light makes the product more white which is psychologically more "clear." The current trend toward white metals tends to be complimented more by the cooler light sources. Unlike the halogen lamps in the original display, the LEDs emit no UV energy, thus decreasing the fading of products and display backgrounds.
        </p>*/}

        <h3>Greater Light Levels</h3>
        <p>
          The existing lighting fixtures provided a single source of direct
          lighting to the case. Much of the light is reflected off of the glass
          or falls on parts of the case that do not house products. At times,
          the beam of light does not cover all of the products in the case. The
          LED's, although individually lower in light output, are positioned
          closer to the products. The overlap of lighting provides more light
          within the case and on the product than the original lighting.
        </p>

        <h3>Decreased Energy Consumption</h3>
        <p>
          The overhead lighting in the original case design operated at about
          115 W per case and 1250 Watts total. The new "green" lighting system
          by LEDpac using LEDs operates at 9 to 15 Watts per case, (about 250W
          total) a savings of more than 80% of the energy consumed. Because the
          cases are relatively small in relation to the overall store, the
          energy story is not significant unless it can be included with other
          lighting energy savings from overhead lighting or other display
          lighting. A total savings of about 1000W per case or 3600 KWh
          translates to approximately $700 per year in energy savings.
          Additional energy consumption could be significant if the LEDpac
          technology is used in refrigeration and freezer case applications and
          the overhead lighting system converted to newer, "green" highbay
          technologies.
        </p>

        <h3>Minimized Maintenance, Sustainable Lighting</h3>
        <p>
          Lighting maintenance on low voltage MR16 lamps is frequent. The lamps
          are designed to last about 2000-4000 hours of operation, but in
          reality when housed in a small fixture, the life tends to be shorter.
          This requires a maintenance program that demands regular replacement
          of lamp burnouts. LEDs are long life solid state lighting elements.
          The life is quoted at 15 to 20 years. This rating is based on the
          light output of the LED. LEDpac has designed a unique system unlike
          other LED manufacturers. The system drives the lamps at current levels
          below the rated amperage of the LED. This allows the lamps to reach
          their full rated life. Other LED systems are designed for maximum
          light output, and the power supplies tend to overdrive the LEDs making
          them fail prematurely. This LEDpac benefit is crucial to the design
          and integrity of the installation and provides a nearly maintenance
          free product in the case for the life of the case.
        </p>

        <h3>Improved Design Appearance</h3>
        <p>
          The LEDpac LED lighting system is small and compact and can be added
          to the cases without the need for a bulky overhead "Crown." Removing
          this crown reduces the size of the overall retail fixture. It also
          improves internal store sightlines, allowing the customer to see past
          the display case and into retail space beyond. Eliminating the crown
          significantly reduces shipping costs for the fixture itself and speeds
          the assembly of the case on site in a new store.
        </p>
        <Row>
          <Col>
            <span className="image fit">
              <img src={CostcoAfter} alt="airport" />
            </span>
          </Col>
        </Row>

        <h3>Conclusion</h3>
        <p>
          In conclusion, the increased sparkle is probably all that is needed to
          repay the cost of the new lighting system. Initial store results in
          Irvine showed a maintained 70% increase in sales after the cases were
          relit. With these results, there is an almost immediate payback. With
          additional savings in energy and maintenance, there are many reasons
          to use the LEDpac LED lighting system in the cases. LEDpac has refined
          the case lighting system to make it easier to install with just a
          single �" hole drilled in the bottom of each display case. LED Strips
          are simply applied with VHB tape and no hardware. The system low
          voltage power supply is simply mounted to the underside of the case
          and wired using common terminal blocks. The cases in a store can be
          retrofitted in a single evening, allowing the store to experience no
          downtime during store hours. The collectable case has also been
          retrofitted in the Irvine store with success.
        </p>
        <p>
          I would recommend this lighting product to Costco for further
          application in other stores.
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
