import "./Main1.css";
import { useState } from "react";

const Main1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((isOpen) => !isOpen);
    console.log(isOpen);
  };

  return (
    <main>
      <div className="backdrop"
      style={{
        display: setIsOpen ? 'none':'block',
      }}
      
    ></div>
      <div className="modal"
      style={{
        display: setIsOpen ? 'none':'block',
      }}
     >
        <h1 className="modal__title">Do you want to continue?</h1>
        <div className="modal__actions">
          <a href="start-hosting/index.html" className="modal__action">
            Yes!
          </a>
          <button
            className="modal__action modal__action--negative"
            type="button"
          >
            No!
          </button>
        </div>
      </div>
            {" "}
      <section className="product-overview">
                   <h1>Get the freedom you deserve.</h1>
              {" "}
      </section>
            {" "}
      <section className="plans">
                   <h1 className="section-title">Choose Your Plan</h1>
                  {" "}
        <div className="plan__list">
                        {" "}
          <article className="plan">
                               <h1 className="plan__title">FREE</h1>
                               <h2 className="plan__price">$0/month</h2>
                               <h3>For hobby projects or small teams.</h3>
                              {" "}
            <ul className="plan__features">
                                    {" "}
              <li className="plan__feature">1 Workspace</li>
                                    {" "}
              <li className="plan__feature">Unlimited Traffic</li>
                                    {" "}
              <li className="plan__feature">10GB Storage</li>
                                    {" "}
              <li className="plan__feature">Basic Support</li>
                                {" "}
            </ul>
                              {" "}
            <div>
                                    
              <button className="button"  onClick={clickHandler}>
                CHOOSE PLAN
              </button>
                                {" "}
            </div>
                          {" "}
          </article>
                        {" "}
          <article className="plan plan--highlighted">
                               <h1 className="plan__annotation">RECOMMENDED</h1>
                               <h1 className="plan__title">PLUS</h1>
                               <h2 className="plan__price">$29/month</h2>
                               <h3>For ambitious projects.</h3>
                              {" "}
            <ul className="plan__features">
                                    {" "}
              <li className="plan__feature">5 Workspaces</li>
                                    {" "}
              <li className="plan__feature">Unlimited Traffic</li>
                                    {" "}
              <li className="plan__feature">100GB Storage</li>
                                    {" "}
              <li className="plan__feature">Plus Support</li>
                                {" "}
            </ul>
                              {" "}
            <div>
                                    {" "}
              <button className="button"  onClick={clickHandler}>CHOOSE PLAN</button>
                                {" "}
            </div>
                          {" "}
          </article>
                        {" "}
          <article className="plan">
                               <h1 className="plan__title">PREMIUM</h1>
                               <h2 className="plan__price">$99/month</h2>
                               <h3>Your enterprise solution.</h3>
                              {" "}
            <ul className="plan__features">
                                    {" "}
              <li className="plan__feature">10 Workspaces</li>
                                    {" "}
              <li className="plan__feature">Unlimited Traffic</li>
                                    {" "}
              <li className="plan__feature">Unlimited Storage</li>
                                    {" "}
              <li className="plan__feature">Priority Support</li>
                                {" "}
            </ul>
                              {" "}
            <div>
                                    {" "}
              <button className="button"  onClick={clickHandler}>CHOOSE PLAN</button>
                                {" "}
            </div>
                          {" "}
          </article>
                    {" "}
        </div>
              {" "}
      </section>
            {" "}
      <section className="key-features">
                  {" "}
        <h1 className="section-title">Many Good Reasons to Stick Around</h1>
                  {" "}
        <ul className="key-feature__list">
                        {" "}
          <li className="key-feature">
                              {" "}
            <div className="key-feature__image">
                                                       {" "}
            </div>
                              {" "}
            <p className="key-feature__description">
              3,857,000 Trusting Customers
            </p>
                          {" "}
          </li>
                        {" "}
          <li className="key-feature">
                              {" "}
            <div className="key-feature__image">
                                                       {" "}
            </div>
                              {" "}
            <p className="key-feature__description">99.999% Uptime Guarantee</p>
                          {" "}
          </li>
                        {" "}
          <li className="key-feature">
                              {" "}
            <div className="key-feature__image">
                                                       {" "}
            </div>
                              {" "}
            <p className="key-feature__description">Lightning Fast CDN</p>
                          {" "}
          </li>
                    {" "}
        </ul>
              {" "}
      </section>
        
    </main>
  );
};

export default Main1;
