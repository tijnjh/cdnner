import { createRoot } from "react-dom/client";
import { toast, Toaster } from "sonner";

const params = (() => {
  try {
    return Object.fromEntries(
      new URL(document.currentScript?.src).searchParams.entries(),
    );
  } catch (e) {
    return {};
  }
})();

const container = document.createElement("div");
document.body.appendChild(container);

const root = createRoot(container);
root.render(<Toaster {...params} />);

window.toast = toast;
