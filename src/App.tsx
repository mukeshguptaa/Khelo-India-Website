import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Mission } from "./pages/Mission";
import { Journey } from "./pages/Journey";
import { Verticals } from "./pages/Verticals";
import { Pledge } from "./pages/Pledge";
import { State } from "./pages/State";

// Placeholder components for new pages
const Discover = () => <div className="py-24 text-center font-display font-black text-4xl uppercase">Discover Page Coming Soon</div>;
const Documents = () => <div className="py-24 text-center font-display font-black text-4xl uppercase">Documents Page Coming Soon</div>;
const Media = () => <div className="py-24 text-center font-display font-black text-4xl uppercase">Media Page Coming Soon</div>;
const Dashboard = () => <div className="py-24 text-center font-display font-black text-4xl uppercase">Dashboard Page Coming Soon</div>;
const FitIndia = () => <div className="py-24 text-center font-display font-black text-4xl uppercase">FIT India Page Coming Soon</div>;
const KhelSetu = () => <div className="py-24 text-center font-display font-black text-4xl uppercase">Khel Setu Page Coming Soon</div>;
const Contact = () => <div className="py-24 text-center font-display font-black text-4xl uppercase">Contact Us Page Coming Soon</div>;

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/verticals" element={<Verticals />} />
          <Route path="/pledge" element={<Pledge />} />
          <Route path="/state" element={<State />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/media" element={<Media />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fit-india" element={<FitIndia />} />
          <Route path="/khel-setu" element={<KhelSetu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
