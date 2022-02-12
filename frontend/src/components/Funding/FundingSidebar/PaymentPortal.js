import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

function PaymentPortal({ children }) {
  const [windowPortalElement, setWindowPortalElement] = useState(null);
  const externalWindow = useRef(null);

  useEffect(function () {
    externalWindow.current = window.open(
      "",
      "",
      "width=600,height=400,left=200,top=200"
    );
    const element = document.createElement("div");
    externalWindow.current.document.body.appendChild(element);
    setWindowPortalElement(element);
    return function cleanUp() {
      externalWindow.current.close();
    };
  }, []);

  if (!windowPortalElement) {
    return null;
  }
  return ReactDOM.createPortal(children, windowPortalElement);
}

export default PaymentPortal;
