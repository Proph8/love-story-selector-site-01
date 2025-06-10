
import GroomLayout from "@/components/layout/GroomLayout";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Calendar, Car, Utensils } from "lucide-react";

const GroomVenue = () => {
  return (
    <GroomLayout>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl tracking-tighter  font-medium mb-6 text-white animate-fade-in">
          Reception Details
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-12 animate-slide-up text-white font-normal">
          Join us for our wedding reception lunch celebration at Kbees Durbar Convention Center.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Map */}
        <Card className="bg-groom-accent/20 border-groom-border hover:bg-groom-accent/30 theme-transition animate-fade-in">
          <CardContent className="p-6">
            <h2 className="text-2xl mb-4 flex items-center text-white font-bold">
              <MapPin className="mr-2" /> Location
            </h2>
            <div className="h-64 bg-slate-800 mb-4 rounded">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.5796566329286!2d76.2029432747026!3d10.22671478989059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081b8c145507b1%3A0xe1f143c6fa7d91cf!2sKbees%20Durbar%20convention%20centre!5e1!3m2!1sen!2sin!4v1749544530335!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded"
              />
            </div>
            <h3 className="text-xl mb-2 text-white font-bold">Kbees Durbar Convention Center</h3>
            <p className="text-white font-normal">Reception Venue</p>
            <p className="text-sm text-white">
              <a 
                href="https://maps.app.goo.gl/Ln3oyMPuoxT4oSNR6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-groom-heading hover:underline"
              >
                View on Google Maps
              </a>
            </p>
          </CardContent>
        </Card>

        {/* Schedule */}
        <Card className="bg-groom-accent/20 border-groom-border hover:bg-groom-accent/30 theme-transition animate-fade-in" style={{ animationDelay: "100ms" }}>
          <CardContent className="p-6">
            <h2 className="text-2xl mb-4 flex items-center text-white font-bold">
              <Calendar className="mr-2" /> Schedule
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="mr-3 mt-1 flex-shrink-0 text-white" />
                <div>
                  <h3 className="text-xl text-white font-bold">11:00 AM - Reception Begins</h3>
                  <p className="text-white font-normal">Welcome and gathering</p>
                </div>
              </div>
              <div className="flex items-start">
                <Utensils className="mr-3 mt-1 flex-shrink-0 text-white" />
                <div>
                  <h3 className="text-xl text-white font-bold">11:30 AM - 2:30 PM - Lunch</h3>
                  <p className="text-white font-normal">Reception lunch celebration</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transportation */}
        <Card className="bg-groom-accent/20 border-groom-border hover:bg-groom-accent/30 theme-transition animate-fade-in md:col-span-2" style={{ animationDelay: "200ms" }}>
          <CardContent className="p-6">
            <h2 className="text-2xl mb-4 flex items-center text-white font-bold">
              <Car className="mr-2" /> Transportation & Parking
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl text-white font-bold">Own Vehicles</h3>
                <p className="text-white font-normal">Ample parking space available at the venue for your convenience</p>
              </div>
              <div>
                <h3 className="text-xl text-white font-bold">Location Access</h3>
                <p className="text-white font-normal">Easily accessible location with good road connectivity</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GroomLayout>
  );
};

export default GroomVenue;
