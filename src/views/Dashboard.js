import React from "react";
import {Card,CardHeader,CardBody,CardTitle,Row,Col,Button, Form,Input,} from "reactstrap";
function Dashboard() {
  return (
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Client information</p>
                      <p />
                
                    </div>
                  </Col>
                </Row>
              </CardBody>
              </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-copy-04 text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                    <a href="Documents" >
                   <p className="card-category">Documents</p></a> 
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-paper text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                    <a href="Letter of engagment" >
                   <p className="card-category">Letter of engagment</p></a> 
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-bank  text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                    <a href="Letter of engagment" >
                   <p className="card-category">Risk assesment</p></a> 
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-briefcase-24 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                    <a href="Letter of engagment" >
                   <p className="card-category">Deadlines</p></a> 
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
</Row>
          <Row> 
            <Col md="4">
            <Card className="card-user">
            <CardHeader>
                <CardTitle tag="h5">Client information</CardTitle>
              </CardHeader>
              <CardBody>
                <p className="description text-center">
                  Required information <br /><br />
                  internal <br /><br />Account & return Details<br/><br />
                  staff task<br/><br /> VAT details<br/><br/>
                  staff task monitor<br/><br/>
                  business details<br/><br/>
                  main contact<br/><br/>
                secondarycontact<br/><br/>
                  income detail<br/><br/>
                  previous account<br/><br/>
                 other detail<br/><br/>
                 Paye detail<br/><br/>
                 Agent authorization<br/><br/>
                  registration<br/><br/>
                </p>
              </CardBody>
            </Card>
</Col>
 <Col  md="8" > 
            <Card className="card-user" >
              <CardHeader>
                <CardTitle tag="h5">Required informations</CardTitle>
              </CardHeader>
              <CardBody>
                <Form >
                  <label>Client type</label>
                        <Input
                          placeholder="Client type"
                          type="text"
                        /><label>category</label>
                        <Input
                          placeholder="select category"
                          type="text"
                        />
                    <label>Partner</label>
                        <Input
                        placeholder="Partner"
                          type="text"
                        />
                     <label>Manager</label>
                        <Input
                        placeholder="Manager"
                          type="text"
                        />
                  <Row>
                    <div className="update ml-auto ">
                      <Button
                        color="primary"
                        type="submit"
                      >
                        Next
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
            </Col>
            </Row>

      </div>
    
  );
}

export default Dashboard;
