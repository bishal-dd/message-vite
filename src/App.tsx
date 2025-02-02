import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Celebration } from "./pages/Celebration";
import { CreateLink } from "./pages/CreateLink";
import posthog from "posthog-js";

function App() {
  posthog.init("phc_htnUDkyNwV4ssVNDr5MVUKY5TeI8qCp5Qlo0Kz8O4Lx", {
    api_host: "https://us.i.posthog.com",
    person_profiles: "always", // or 'always' to create profiles for anonymous users as well
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Celebration />} />
        <Route path="/create-link" element={<CreateLink />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
