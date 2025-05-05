
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Executive Director",
      bio: "Sarah has over 15 years of experience in humanitarian aid and has led operations in multiple crisis zones.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400"
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      role: "Field Operations Manager",
      bio: "Ahmed coordinates our ground teams and ensures aid reaches those who need it most efficiently.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400"
    },
    {
      id: 3,
      name: "Dr. Leila Mahmoud",
      role: "Medical Director",
      bio: "Dr. Leila oversees all medical aid initiatives and coordinates with local healthcare providers.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400"
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Logistics Coordinator",
      bio: "Michael manages our supply chain and ensures aid materials reach Gaza despite challenging conditions.",
      image: "https://images.unsplash.com/photo-1542178243-bc20204b769e?auto=format&fit=crop&w=400&h=400"
    },
  ];

  return (
    <section id="team" className="py-20 bg-gaza-light">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Users size={28} className="text-gaza-accent mr-3" />
          <h2 className="section-heading mb-0">Our Team</h2>
        </div>
        <p className="text-center text-lg text-gaza-dark max-w-2xl mx-auto mb-12">
          Meet the dedicated professionals working tirelessly to provide humanitarian assistance in Gaza.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="card-hover bg-white overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-gaza-primary mb-1">{member.name}</h3>
                <p className="text-gaza-accent font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
