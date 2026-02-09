import { createRoot } from "react-dom/client";
import { toast, Toaster } from "sonner";

const container = document.createElement("div");
document.body.appendChild(container);

const root = createRoot(container);
root.render(<Toaster />);

window.toast = toast;
