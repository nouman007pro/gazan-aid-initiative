
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Newspaper } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Aid Shipment Reaches Rafah Crossing",
      date: "May 3, 2025",
      description: "200 tons of food and medical supplies successfully delivered to southern Gaza through Rafah crossing.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Aid Delivery"
    },
    {
      id: 2,
      title: "New Medical Center Opens in Khan Younis",
      date: "April 28, 2025",
      description: "A field hospital with advanced surgical capabilities now operational in southern Gaza.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      category: "Healthcare"
    },
    {
      id: 3,
      title: "Clean Water Initiative Expanded",
      date: "April 20, 2025",
      description: "Our water purification program now reaches 15,000 more residents in northern Gaza communities.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      category: "Infrastructure"
    },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto">Latest News & Updates</h2>
        <p className="text-center text-lg text-gaza-dark max-w-2xl mx-auto mb-12">
          Stay informed about our ongoing aid efforts and the situation in Gaza through our regular updates.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="card-hover">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-gaza-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gaza-primary">{item.title}</CardTitle>
                <CardDescription className="flex items-center text-muted-foreground">
                  <Calendar size={16} className="mr-1" />
                  {item.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gaza-dark">{item.description}</p>
              </CardContent>
              <CardFooter>
                <a 
                  href="#" 
                  className="text-gaza-primary hover:text-gaza-accent font-medium flex items-center"
                >
                  Read More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-gaza-primary hover:text-gaza-accent font-medium"
          >
            <Newspaper size={20} className="mr-2" />
            View All Updates
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
