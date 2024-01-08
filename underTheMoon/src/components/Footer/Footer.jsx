import "./Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="Wrapper">
        <h3>SUBSCRIBE TO NEWSLETTER</h3>
        <form className="Form" action="">
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />

          <input
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />

          <button className="Button">sign up</button>
        </form>
      </div>
      <div className="MellemFooter">
        <h3>QUICK LINKS</h3>
        <ul>
          <li>Hjem</li>
          <li>Om os</li>
          <li>Prisliste</li>
          <li>Booking</li>
          <li>Newsletter</li>
          <li>Kontakt</li>
        </ul>
        <h3>FOLLOW US</h3>
        <div className="cirkel">
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
      <div className="LastFooter">
        <h3>FIND US</h3>
        <p>
          WhatsApp <br />+ 45 23 43 43 43
        </p>
        <p>
          Telefonnummer
          <br />
          +45 58 84 84 84
        </p>
        <p>
          Adresse
          <br />
          Supergatan 56,
          <br />
          Oslo, Norway
        </p>
      </div>
    </footer>
  );
};
