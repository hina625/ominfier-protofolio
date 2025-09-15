
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VoiceAgent from '../components/VoiceAgent';
import Features from '../components/Features';
import WebRTCFeatures from '../components/WebRTCFeatures';
import DigitalArtShowcase from '../components/DigitalArtShowcase';
import WebsiteFeatures from '../components/WebsiteFeatures';
import AppDevelopment from '../components/AppDevelopment';
import FFmpegFeatures from '../components/FFmpegFeatures';
import CustomerReviews from '../components/CustomerReviews';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg relative z-10">
      <Navbar />
      <Hero />
      <DigitalArtShowcase />
      <Features features={undefined} />
      <VoiceAgent />
      <WebRTCFeatures />
      <WebsiteFeatures />
      <AppDevelopment />
      <FFmpegFeatures />
      <CustomerReviews />
      <Footer />
    </div>
  );
}
