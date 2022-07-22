import React from "react";

export default function LocationComponent() {
  return (
    <div className={"location_wrapper"}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61546.21375594!2d28.28316236342088!3d-15.396059810662333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f59d37206917%3A0xb693af5568b537a1!2sNew%20Location%20Muhanya%20Solar%20Ltd!5e0!3m2!1sen!2szm!4v1658455045872!5m2!1sen!2szm"
        width="100%"
        height="500px"
        allowFullScreen=""
      ></iframe>
      <div className={"location_tag"}>
        <div>Location</div>
      </div>
    </div>
  );
}
