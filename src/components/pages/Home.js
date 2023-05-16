import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";
import { VscBook } from "react-icons/vsc";
import { AiFillClockCircle } from "react-icons/ai";
import { MdLiveTv } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";

const subscriptionPlans = [
  { duration: "18 months", price: 149 },
  { duration: "12 months", price: 99 },
  { duration: "6 months", price: 69 },
  { duration: "3 months", price: 49 },
];

const Home = () => {
  const [selectedPlan, setSelectedPlan] = useState(subscriptionPlans[1]); // Initially select the second plan

  const handleSubscriptionSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div style={{ marginLeft: "50px", marginTop: "30px", backgroundColor:"3c4852"}}>
      <h2>Access curated courses worth</h2>
      <h2>₹18,500 at just ₹99 per year</h2>
      <div>
        <div>
          <VscBook />
          <p style={{ marginLeft: "20px", marginTop: "-23px" }}>
            100+ job relevant courses
          </p>
        </div>
        <div>
          <AiFillClockCircle />
          <p style={{ marginLeft: "20px", marginTop: "-23px" }}>
            20,000+ Hours of content
          </p>
        </div>
        <div>
          <MdLiveTv />
          <p style={{ marginLeft: "20px", marginTop: "-23px" }}>
            Exclusive webinar access
          </p>
        </div>
        <div>
          <IoMdSchool />
          <p style={{ marginLeft: "20px", marginTop: "-23px" }}>
            Scholarship worth ₹94,500
          </p>
        </div>
        <div>
          <FaDollarSign />
          <p style={{ marginLeft: "20px", marginTop: "-23px" }}>
            Ad Free learning experience
          </p>
        </div>
      </div>

      <Card style={{ width: "25rem", marginTop: "-280px", marginLeft: "850px" }}>
        <Card.Body>
          <div>
            
            <Button style={{ marginLeft: "60px" }}>SignUp</Button>
            <Button style={{ marginLeft: "245px", marginTop: "-60px" }}>Subscribe</Button>
          </div>
          <Card.Title style={{ textAlign: "center" }}>
            Select your subscription plan
          </Card.Title>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {subscriptionPlans.map((plan, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  marginBottom: "10px",
                  backgroundColor:
                    plan === selectedPlan ? "lightgreen" : "transparent",
                }}
                onClick={() => handleSubscriptionSelect(plan)}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BsCheckCircle
                    size={20}
                    style={{
                      marginRight: "10px",
                      color: plan === selectedPlan ?
                      "green" : "gray",
}}
/>
<p>{plan.duration} Subscription</p>
<p style={{ marginLeft: "100px" }}>₹{plan.price}</p>
</div>
</div>
))}
        <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
          >
            Subscription fee
          </p>
          <p style={{ marginRight: "32px" }}>₹{selectedPlan.price}</p>
        </div>

        <div
          style={{
            backgroundColor: "lightcoral",
            width: "100%",
            height: "50px",
            marginTop: "10px",
          }}
        >
          <p style={{ marginLeft: "10px", marginTop: "5px" }}>
            Limited period offer
          </p>
          <p style={{ marginLeft: "310px", marginTop: "-40px" }}>
            ₹{selectedPlan.price}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
              marginLeft: "10px",
              marginTop: "10px",
            }}
          >
            Total (Inc. of 18% GST)
          </p>
          <p style={{ marginRight: "32px" }}>₹{selectedPlan.price}</p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <Button
            variant="danger"
            style={{
              color: "red",
              backgroundColor: "white",
              width: "50%",
            }}
          >
            Cancel
          </Button>
          <Button variant="success">Proceed to Pay Now</Button>
        </div>
      </div>
    </Card.Body>
  </Card>
</div>
);
};

export default Home;
