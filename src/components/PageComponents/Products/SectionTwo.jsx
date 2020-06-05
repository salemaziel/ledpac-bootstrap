import React from 'react'

import { 
    Airport1,
    Airport2,
    Airport3,
    Airport4,
    Airport5

} from '../../../images/index'
 import Container from 'react-bootstrap/Container'
 import Row from 'react-bootstrap/Row'
 import Col from 'react-bootstrap/Col'


const SectionTwo = () => (
<section>
  <div className="box alt">
    <div className="row gtr-uniform gtr-50">
      <div className="col-4"><span className="image fit"><img src={Airport2} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport5} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport5} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport2} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport3} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport2} alt /></span></div>
      <div className="col-4"><span className="image fit"><img src={Airport5} alt /></span></div>
    </div>
  </div>
 </section>

)

export default SectionTwo